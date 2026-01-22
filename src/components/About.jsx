import { motion } from 'framer-motion'
import './About.css'

const About = () => {

  return (
    <section id="about" className="about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I'm a Computer Science student at York University, graduating in 2025, with hands-on
            experience in full-stack web development, mobile applications, and embedded systems.
          </p>
          <p>
            Proficient in Java, Python, React, Node.js, and database management, with a strong
            academic foundation in algorithms, software design, and applied cryptography.
          </p>
          <p>
            I have a demonstrated ability to design and optimize responsive, user-centered
            applications and implement scalable solutions across diverse platforms. Passionate about
            building impactful technology and contributing to innovative software engineering
            projects.
          </p>
          <p>
            Beyond coding, I bring professional experience from client-facing roles that sharpened
            my ability to communicate clearly, coordinate complex workflows, and adapt to
            fast-changing demands.
          </p>
        </motion.div>

        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-wrapper glass">
            <motion.img
              src="/profile.png"
              alt="Subhan Hanif"
              className="about-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="about-image-placeholder" style={{ display: 'none' }}>
              <span>Add your photo</span>
              <span className="placeholder-hint">Place profile.png in /public folder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

