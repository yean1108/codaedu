import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t.hero.title}
          </h1>
          <h2 className="hero-subtitle">
            {t.hero.subtitle}
          </h2>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              {t.hero.freeConsultation}
            </Link>
            <Link to="/services" className="btn btn-outline">
              {t.hero.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
