import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Allow Railway/Render to set the port
const HOST = process.env.HOST || '0.0.0.0'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configure nodemailer transporter for Zoho Mail/Zoho Cloud
const createTransporter = () => {
  // Default to Zoho Cloud settings (smtp.zohocloud.ca:465 with SSL)
  const host = process.env.EMAIL_HOST || 'smtp.zohocloud.ca'
  const port = parseInt(process.env.EMAIL_PORT || '465')
  const useSSL = process.env.EMAIL_SECURE !== 'false' // Default to true for Zoho Cloud
  
  const config = {
    host: host,
    port: port,
    secure: useSSL, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    authMethod: 'LOGIN' // Try LOGIN method instead of PLAIN
  }

  // For SSL on port 465 (Zoho Cloud default)
  if (useSSL || port === 465) {
    config.secure = true
    config.tls = {
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    }
  } else if (port === 587) {
    // For STARTTLS on port 587
    config.requireTLS = true
    config.tls = {
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    }
  }

  // Debug logging (without exposing password)
  console.log('Email config:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    authMethod: config.authMethod,
    user: config.auth.user || 'NOT SET - Check EMAIL_USER in .env',
    hasPassword: !!config.auth.pass,
    passwordLength: config.auth.pass ? config.auth.pass.length : 0
  })

  if (!config.auth.user || !config.auth.pass) {
    console.error('ERROR: EMAIL_USER or EMAIL_PASS is not set in .env file!')
  } else {
    // Validate App Password format (usually 16 characters)
    if (config.auth.pass.length < 10) {
      console.warn('WARNING: Password seems too short. Make sure you\'re using an App Password, not your regular password!')
    }
  }

  return nodemailer.createTransport(config)
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      })
    }

    // Create transporter
    const transporter = createTransporter()

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
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
    if (process.env.SEND_CONFIRMATION === 'true') {
      const confirmationMail = {
        from: process.env.EMAIL_USER,
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

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Zoho Mail credentials and App Password in the .env file.'
      console.error('Authentication Error Details:')
      console.error('- Make sure you\'re using an App Password, not your regular password')
      console.error('- Generate App Password at: https://accounts.zoho.com/home#security/app-passwords')
      console.error('- Ensure EMAIL_USER is your full Zoho email address')
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please check your internet connection.'
    } else if (error.response) {
      errorMessage = `Email server error: ${error.response}`
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`)
  console.log(`Health check: http://${HOST}:${PORT}/api/health`)
})

