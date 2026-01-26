import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const [statusMessage, setStatusMessage] = useState('')

  // Use Netlify Function in production, local backend in development
  const getApiUrl = () => {
    // If VITE_API_URL is explicitly set, use it
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL.startsWith('http') 
        ? `${import.meta.env.VITE_API_URL}/api/contact`
        : import.meta.env.VITE_API_URL
    }
    // In production (Netlify), use Netlify Function
    if (import.meta.env.MODE === 'production' || import.meta.env.PROD) {
      return '/.netlify/functions/contact'
    }
    // In development, use local backend
    return 'http://localhost:3001/api/contact'
  }
  
  const API_URL = getApiUrl()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
      setStatusMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setStatusMessage('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setStatusMessage(data.message || 'Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
          setStatusMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setStatusMessage(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setStatusMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'info@subhan.ca',
      link: 'mailto:info@subhan.ca'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (647) 687-9109',
      link: 'tel:+16476879109'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/subhanhanif521/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'View my work',
      link: 'https://github.com/subhanbnto'
    }
  ]

  return (
    <section id="contact" className="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get In Touch
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new opportunities, interesting projects, or simply
            connecting with fellow developers. Feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-item glass"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message..."
            />
          </div>

          {submitStatus && (
            <motion.div
              className={`form-status ${submitStatus}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitStatus === 'success' ? (
                <FaCheckCircle className="status-icon" />
              ) : (
                <FaExclamationCircle className="status-icon" />
              )}
              <span>{statusMessage}</span>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

