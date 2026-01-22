import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Latte's Fitness App",
      description:
        'Led a team of four in developing a cross-platform mobile fitness tracking application featuring exercise logging, step counting, and calorie monitoring. Designed and implemented the front-end in React Native, integrating APIs to deliver personalized health and activity insights.',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Clerk'],
      period: 'Dec 2024',
      featured: true
    },
    {
      title: 'Home Automation Hub',
      description:
        'Engineered a microcontroller-based smart home hub using the ATmega328P, integrating sensors (light, sound, moisture) and actuators (OLED display, buzzer, LEDs). Programmed system logic in Java via the Firmata protocol.',
      tech: ['Java', 'Arduino', 'ATmega328P', 'Firmata'],
      period: 'May 2022',
      featured: true
    },
    {
      title: 'Plant Watering System',
      description:
        'Developed an Automated Plant Watering System using Arduino Grove Beginner Kit, moisture sensors, and a water pump. The system continuously monitors soil moisture levels and automatically activates the pump through a MOSFET.',
      tech: ['Arduino', 'Java', 'MOSFET', 'Sensors'],
      period: 'Mar 2023 - Aug 2023',
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">03.</span> Featured Projects
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card glass ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-period">{project.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

