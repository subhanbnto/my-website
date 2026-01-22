const nodemailer = require('nodemailer')

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'All fields are required'
        })
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Invalid email address'
        })
      }
    }

    // Get environment variables from Netlify
    const emailHost = process.env.EMAIL_HOST || 'smtp.zohocloud.ca'
    const emailPort = parseInt(process.env.EMAIL_PORT || '465')
    const emailSecure = process.env.EMAIL_SECURE === 'true'
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const contactEmail = process.env.CONTACT_EMAIL || emailUser
    const sendConfirmation = process.env.SEND_CONFIRMATION === 'true'

    if (!emailUser || !emailPass) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: 'Email configuration error. Please contact the site administrator.'
        })
      }
    }

    // Create transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPass
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      }
    })

    // Email content
    const mailOptions = {
      from: emailUser,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio website contact form.</p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user (optional)
    if (sendConfirmation) {
      const confirmationMail = {
        from: emailUser,
        to: email,
        subject: 'Thank you for contacting Subhan Hanif',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6;">Thank you for reaching out!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
            <p>Best regards,<br>Subhan Hanif</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">This is an automated confirmation email.</p>
          </div>
        `
      }
      await transporter.sendMail(confirmationMail)
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Message sent successfully!'
      })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    
    let errorMessage = 'Failed to send message. Please try again later.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact the site administrator.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again later.'
    }

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: false,
        message: errorMessage
      })
    }
  }
}

