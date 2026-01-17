import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './CTA.css'

const CTA = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.description}</p>
          <Link to="/contact" className="btn btn-primary">
            {t.cta.button}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
