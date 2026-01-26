import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiTypescript,
  SiSwift,
  SiFirebase,
  SiAmazon,
  SiExpress,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiDocker,
  SiJest,
  SiMysql,
  SiC,
  SiCplusplus,
  SiPhp,
  SiSqlite,
  SiOracle
} from 'react-icons/si'
import { FaJava, FaReact } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 90 },
        { name: 'Python', icon: <SiPython />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
        { name: 'CSS3', icon: <SiCss3 />, level: 90 },
        { name: 'C', icon: <SiC />, level: 75 },
        { name: 'C++', icon: <SiCplusplus />, level: 75 },
        { name: 'Swift', icon: <SiSwift />, level: 70 },
        { name: 'PHP', icon: <SiPhp />, level: 75 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <SiReact />, level: 90 },
        { name: 'React Native', icon: <FaReact />, level: 85 },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
        { name: 'Angular', icon: <SiAngular />, level: 70 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
        { name: 'jQuery', icon: <SiJquery />, level: 75 }
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'SQLite', icon: <SiSqlite />, level: 70 },
        { name: 'Oracle', icon: <SiOracle />, level: 65 },
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 75 },
        { name: 'Firebase', icon: <SiFirebase />, level: 75 },
        { name: 'AWS', icon: <SiAmazon />, level: 70 }
      ]
    }
  ]

  const otherSkills = [
    'MATLAB', 'Figma', 'Agile', 'Scrum', 'Embedded Systems', 'Algorithms',
    'Data Structures', 'Software Design', 'Applied Cryptography',
    'Object-Oriented Programming', 'Design Patterns', 'RESTful APIs',
    'GraphQL', 'Microservices', 'Test-Driven Development', 'CI/CD',
    'Webpack', 'Vite', 'Postman', 'JIRA', 'VS Code', 'IntelliJ IDEA',
    'System Design', 'Database Design', 'SQL', 'NoSQL', 'OAuth', 'JWT',
    'Authentication', 'Security', 'Performance Optimization',
    'Responsive Design', 'Mobile Development', 'SASS', 'SCSS'
  ]

  return (
    <section id="skills" className="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Technical Skills
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-category glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="other-skills glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="category-title">Other Skills & Technologies</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="other-skill-tag"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

