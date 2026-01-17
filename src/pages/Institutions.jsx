import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Institutions.css'

const Institutions = () => {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categoryPaths = {
    universities: 'universities',
    vet: 'vet',
    schools: 'schools',
    studyTours: 'study-tours'
  }

  const categories = [
    { ...t.institutions.categories.universities, key: 'universities' },
    { ...t.institutions.categories.vet, key: 'vet' },
    { ...t.institutions.categories.schools, key: 'schools' },
    { ...t.institutions.categories.studyTours, key: 'studyTours' }
  ]

  const universityKeys = ['anu', 'melbourne', 'sydney', 'unsw', 'uq', 'monash', 'uwa', 'adelaide']
  const universities = universityKeys.map(key => ({
    ...t.institutions.universities.list[key],
    key
  }))

  return (
    <div className="institutions-page">
      <div className="page-hero">
        <div className="container">
          <h1>{t.institutions.hero.title}</h1>
          <p>{t.institutions.hero.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <section className="categories-section">
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card card">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to={`/institutions/category/${categoryPaths[category.key]}`} className="btn btn-outline">
                  {t.institutions.viewDetails}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="universities-section">
          <h2 className="section-title">{t.institutions.universities.title}</h2>
          <p className="section-subtitle">{t.institutions.universities.subtitle}</p>
          <div className="universities-grid">
            {universities.map((uni) => {
              const uniName = language === 'zh' ? uni.name : uni.nameEn
              return (
                <div key={uni.key} className="university-card card">
                  <h3>{uniName}</h3>
                  <Link to={`/institutions/university/${uni.key}`} className="btn btn-primary">
                    {t.institutions.learnMore}
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Institutions
