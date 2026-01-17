import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './InstitutionCategory.css'

const InstitutionCategory = () => {
  const { categoryId } = useParams()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])

  const categoryMap = {
    'universities': 'universities',
    'vet': 'vet',
    'schools': 'schools',
    'study-tours': 'studyTours'
  }

  const categoryKey = categoryMap[categoryId]
  
  if (!categoryKey || !t.institutions.categories[categoryKey]) {
    return (
      <div className="institution-category-page">
        <div className="container">
          <div className="error-message">
            <h1>{language === 'zh' ? '页面未找到' : 'Page Not Found'}</h1>
            <Link to="/institutions" className="btn btn-primary">
              {language === 'zh' ? '返回院校页面' : 'Back to Institutions'}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const category = t.institutions.categories[categoryKey]

  return (
    <div className="institution-category-page">
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">{t.nav.home}</Link>
            <span> / </span>
            <Link to="/institutions">{t.nav.institutions}</Link>
            <span> / </span>
            <span>{category.title}</span>
          </nav>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      <div className="container">
        <div className="category-content">
          <div className="category-main">
            <div className="content-section">
              <h2>{language === 'zh' ? '详细介绍' : 'Detailed Introduction'}</h2>
              <div className="content-text">
                {category.content.split('\n').map((line, index) => {
                  if (line.trim() === '') return <br key={index} />
                  if (line.startsWith('•')) {
                    return (
                      <div key={index} className="content-item">
                        {line}
                      </div>
                    )
                  }
                  return <p key={index}>{line}</p>
                })}
              </div>
            </div>

            <div className="cta-section">
              <h3>{language === 'zh' ? '需要帮助？' : 'Need Help?'}</h3>
              <p>{language === 'zh' ? '联系我们的专业顾问，获取免费咨询' : 'Contact our professional consultants for a free consultation'}</p>
              <Link to="/contact" className="btn btn-primary">
                {t.contact.hero.title}
              </Link>
            </div>
          </div>

          <div className="category-sidebar">
            <div className="sidebar-card">
              <h3>{language === 'zh' ? '其他院校类型' : 'Other Institution Types'}</h3>
              <ul className="related-categories">
                {Object.entries(t.institutions.categories).map(([key, cat]) => {
                  if (key === categoryKey) return null
                  const pathMap = {
                    'universities': 'universities',
                    'vet': 'vet',
                    'schools': 'schools',
                    'studyTours': 'study-tours'
                  }
                  return (
                    <li key={key}>
                      <Link to={`/institutions/category/${pathMap[key] || key}`}>
                        {cat.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstitutionCategory
