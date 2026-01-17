import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Testimonials.css'

const Testimonials = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const testimonials = [
    {
      name: language === 'zh' ? '张同学' : 'Zhang',
      year: '2023',
      location: language === 'zh' ? '中国' : 'China',
      content: language === 'zh' 
        ? '非常专业的留学公司，感谢Stacy老师在申请学校方面的专业指导和与学校的积极沟通。我们很快就收到了心仪学校的offer。'
        : 'Very professional study abroad company, thanks to Ms. Stacy for her professional guidance on school application and active communication with the school. We quickly got an offer from the school we wanted.',
      rating: 5
    },
    {
      name: 'Janet',
      year: '2023',
      location: language === 'zh' ? '香港' : 'Hong Kong',
      content: language === 'zh'
        ? '我们的永久伴侣签证在申请后2.6个月就获批了！这太神奇了，Alice非常出色，她明智而顺利地指导我们完成了复杂的案例。'
        : 'Our permanent partner visa was granted in 2.6 months since the day of application! That is magic, Alice was fantastic, she advised and guided us through our complicated case wisely and smoothly.',
      rating: 5
    },
    {
      name: 'Jen & Jon',
      year: '2023',
      location: language === 'zh' ? '中国' : 'China',
      content: language === 'zh'
        ? '我们一家五口在仅仅四个月内就获得了PR批准，这与Alice的细致工作和精心准备密不可分。我们想表达对ACIC团队的真诚感谢！'
        : 'Our family of five achieved approval within a mere four months, which was intricately tied to Alice\'s dedicated work and meticulous preparation. We would like to express our sincere gratitude!',
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">{t.testimonials.title}</h2>
        <p className="section-subtitle">{t.testimonials.subtitle}</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {testimonial.rating}/5
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.year} · {testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
