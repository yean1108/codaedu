import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './About.css'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>{t.about.hero.title}</h1>
          <p>{t.about.hero.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <section className="about-intro">
          <div className="intro-content">
            <h2>{t.about.intro.title}</h2>
            <p>{t.about.intro.paragraph1}</p>
            <p>{t.about.intro.paragraph2}</p>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">37+</div>
              <div className="stat-label">{t.about.stats.years}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">90,000+</div>
              <div className="stat-label">{t.about.stats.successCases}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">{t.about.stats.countries}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">{t.about.stats.institutions}</div>
            </div>
          </div>
        </section>

        <section className="awards-section">
          <h2 className="section-title">{t.about.awards.title}</h2>
          <div className="awards-grid">
            <div className="award-card card">
              <h3>{t.about.awards.bestCompany.title}</h3>
              <p>{t.about.awards.bestCompany.description}</p>
            </div>
            <div className="award-card card">
              <h3>{t.about.awards.satisfaction.title}</h3>
              <p>{t.about.awards.satisfaction.description}</p>
            </div>
            <div className="award-card card">
              <h3>{t.about.awards.leadership.title}</h3>
              <p>{t.about.awards.leadership.description}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
