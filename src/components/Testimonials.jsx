import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ebunoluwa Makinde',
      role: 'Founder',
      company: 'While She is True',
      text: 'Subhan is a superstar! He quickly and efficiently got our project done. Couldn\'t have asked for a better student to work with on this project. He demonstrated exceptional technical skills, strong communication, and a genuine openness to learning and receiving feedback.',
      rating: 5
    },
    {
      name: 'Shereen Ashman',
      role: 'Director of Cultural Leadership',
      company: 'Saccae Studio',
      text: 'Subhan demonstrated strong initiative throughout his internship, taking the time to meet with myself and other founders to clearly identify the critical components of the project. He stepped into a leadership role with confidence, guiding the development process, producing deliverables, and consistently meeting deadlines.',
      rating: 4.5
    },
    {
      name: 'Rubén Möller',
      role: 'Producer/Director',
      company: 'Rue Productions',
      text: 'Subhan is a highly skilled individual. I am thoroughly impressed with his ability to listen to the needs of the project and initiate an exceptional solution. He is highly knowledgeable and performs every goal with enthusiasm and excellence.',
      rating: 5
    },
    {
      name: 'Olga Grass',
      role: 'CNP',
      company: 'Various Projects',
      text: 'Subhan is an excellent software programmer and has shown great communication skills and attention to detail when working with the clients. He redesigned the Dashboard on our learning platform, and his work is excellent. He is a great team player and is able to develop effective solutions.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="section-number">05.</span> Testimonials
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="testimonials-scroll-container">
        <div className="testimonials-scroll">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card glass"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="testimonial-quote">
                <FaQuoteLeft />
              </div>
              <div className="testimonial-rating">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <FaStarHalfAlt key="half" className="star" />
                )}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Duplicate cards for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="testimonial-card glass"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="testimonial-quote">
                <FaQuoteLeft />
              </div>
              <div className="testimonial-rating">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <FaStarHalfAlt key="half" className="star" />
                )}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

