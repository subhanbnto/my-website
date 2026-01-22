import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'All-Good-Accounting.com',
      location: 'Brampton, ON',
      period: 'Nov 2025 - Present',
      description: [
        'Developing a scalable software application to replace Excel-based financial reporting tool',
        'Improving usability by designing intuitive and user-friendly interface',
        'Implementing efficient data management practices for accuracy and reliability'
      ]
    },
    {
      title: 'Web Developer',
      company: 'HAPPY NUTRITION Health Academy',
      location: 'Markham, ON',
      period: 'Nov 2025 - Jan 2026',
      description: [
        'Designing website structure, layout, and visual elements using WordPress',
        'Developing clean, responsive page layouts and writing content for key sections',
        'Implementing intake form to support user interaction'
      ]
    },
    {
      title: 'Web Development & AI Integration',
      company: 'Saccae Studio - Cultural Training & Tools',
      location: 'Bowmanville, ON',
      period: 'Oct 2025 - Nov 2025',
      description: [
        'Developing full-stack website for FunCare Institute to enhance digital presence',
        'Designing modern, responsive UI aligned with branding and mission',
        'Implementing secure user registration system with validation',
        'Integrating AI-powered chatbot utilizing natural language processing'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Rue Productions',
      location: 'Vancouver, BC',
      period: 'Sep 2025 - Nov 2025',
      description: [
        'Developed interactive web features to showcase experimental animation works',
        'Designed and maintained fully responsive interface for multiple formats',
        'Built interactive navigation system triggering animations from studio films',
        'Researched and implemented AI-driven methods for press release distribution'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'While She is True',
      location: 'Winnipeg, MB',
      period: 'Sep 2025 - Oct 2025',
      description: [
        'Developed and integrated classroom page with restricted access for registered students',
        'Updated website content with current class offerings and student project showcases',
        'Built and deployed blog and resources page to support student learning',
        'Enhanced SEO strategies to increase online engagement'
      ]
    },
    {
      title: 'Mobile App Developer',
      company: 'Lassonde School Of Engineering',
      location: 'North York, ON',
      period: 'Sep 2024 - Dec 2024',
      description: [
        'Worked in a team to design and develop cross-platform productivity application',
        'Built front end in React Native with intuitive, user-friendly interface',
        'Led usability testing and applied iterative design enhancements'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">02.</span> Experience
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content glass">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-meta">
                <span className="experience-location">{exp.location}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

