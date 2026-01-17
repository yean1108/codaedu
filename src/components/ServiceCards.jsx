import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './ServiceCards.css'

const ServiceCards = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      title: t.serviceCards.services.study.title,
      description: t.serviceCards.services.study.description,
      link: '/services',
      color: 'var(--color-orange)'
    },
    {
      title: t.serviceCards.services.migration.title,
      description: t.serviceCards.services.migration.description,
      link: '/services',
      color: 'var(--color-sage)'
    },
    {
      title: t.serviceCards.services.visaIssues.title,
      description: t.serviceCards.services.visaIssues.description,
      link: '/services',
      color: 'var(--color-rose)'
    }
  ]

  const quickLinks = [
    { text: t.serviceCards.quickLinks.studentInAustralia, link: '/services/student-in-australia' },
    { text: t.serviceCards.quickLinks.touristVisa, link: '/services/tourist-visa' },
    { text: t.serviceCards.quickLinks.highSchoolStudent, link: '/services/high-school-student' },
    { text: t.serviceCards.quickLinks.studentOverseas, link: '/services/student-overseas' },
    { text: t.serviceCards.quickLinks.parentServices, link: '/services/parent-services' }
  ]

  const servicePaths = {
    study: '/services/study-plan',
    migration: '/services/temporary-residency',
    visaIssues: '/services/visa-problems'
  }

  return (
    <section className="service-cards">
      <div className="container">
        <h2 className="section-title">{t.serviceCards.title}</h2>
        <p className="section-subtitle">{t.serviceCards.subtitle}</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">{t.serviceCards.learnMore}</span>
            </Link>
          ))}
        </div>

        <div className="quick-links">
          <h3>{t.serviceCards.quickLinks.title}</h3>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.link} className="quick-link">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
