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
  SiVuedotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiJest,
  SiMysql,
  SiC,
  SiCplusplus,
  SiGo,
  SiRuby,
  SiPhp,
  SiKotlin,
  SiDart,
  SiR,
  SiRedis,
  SiSqlite,
  SiGooglecloud,
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
        { name: 'Go', icon: <SiGo />, level: 65 },
        { name: 'Ruby', icon: <SiRuby />, level: 70 },
        { name: 'PHP', icon: <SiPhp />, level: 75 },
        { name: 'Kotlin', icon: <SiKotlin />, level: 70 },
        { name: 'Dart', icon: <SiDart />, level: 65 },
        { name: 'R', icon: <SiR />, level: 60 }
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
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 70 },
        { name: 'Angular', icon: <SiAngular />, level: 70 },
        { name: 'Redux', icon: <SiRedux />, level: 80 },
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
        { name: 'Redis', icon: <SiRedis />, level: 75 },
        { name: 'SQLite', icon: <SiSqlite />, level: 70 },
        { name: 'Oracle', icon: <SiOracle />, level: 65 },
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 75 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 70 },
        { name: 'Jenkins', icon: <SiJenkins />, level: 70 },
        { name: 'Firebase', icon: <SiFirebase />, level: 75 },
        { name: 'AWS', icon: <SiAmazon />, level: 70 },
        { name: 'GCP', icon: <SiGooglecloud />, level: 65 }
      ]
    }
  ]

  const otherSkills = [
    'C', 'C++', 'MATLAB', 'AngularJS', 'Figma', 'MySQL', 'Agile', 'Scrum',
    'Embedded Systems', 'Algorithms', 'Data Structures', 'Software Design',
    'Applied Cryptography', 'Object-Oriented Programming', 'Functional Programming',
    'Design Patterns', 'RESTful APIs', 'GraphQL', 'Microservices', 'MVC Architecture',
    'Test-Driven Development', 'Jest', 'Unit Testing', 'Integration Testing',
    'CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Webpack', 'Vite', 'NPM', 'Yarn',
    'Postman', 'Swagger', 'JIRA', 'Confluence', 'Slack', 'VS Code', 'IntelliJ IDEA',
    'Eclipse', 'Xcode', 'Android Studio', 'Linux', 'Unix', 'Shell Scripting',
    'System Design', 'Database Design', 'SQL', 'NoSQL', 'Redis', 'Elasticsearch',
    'Message Queues', 'WebSockets', 'OAuth', 'JWT', 'Authentication', 'Authorization',
    'Security', 'Encryption', 'SSL/TLS', 'Performance Optimization', 'Code Review',
    'GitHub', 'GitLab', 'Bitbucket', 'Code Quality', 'Linting', 'ESLint', 'Prettier',
    'Responsive Design', 'Mobile Development', 'Cross-Platform Development',
    'Progressive Web Apps', 'Service Workers', 'Web Components', 'SASS', 'SCSS',
    'LESS', 'CSS Modules', 'Styled Components', 'Material-UI', 'Ant Design',
    'Chakra UI', 'Storybook', 'TypeScript', 'ES6+', 'Async/Await', 'Promises',
    'Error Handling', 'Debugging', 'Performance Monitoring', 'Analytics',
    'SEO', 'Accessibility', 'WCAG', 'Semantic HTML', 'Web Standards'
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
          <span className="section-number">04.</span> Technical Skills
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

