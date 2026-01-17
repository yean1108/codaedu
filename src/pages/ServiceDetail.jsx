import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

  // 将URL路径转换为翻译键
  const pathToKeyMap = {
    'student-in-australia': { category: 'study', key: 'studentInAustralia' },
    'high-school-student': { category: 'study', key: 'highSchoolStudent' },
    'student-overseas': { category: 'study', key: 'studentOverseas' },
    'tourist-visa': { category: 'study', key: 'touristVisa' },
    'parent-services': { category: 'study', key: 'parentServices' },
    'temporary-residency': { category: 'migration', key: 'temporaryResidency' },
    'employer-sponsorship': { category: 'migration', key: 'employerSponsorship' },
    'partner-family-visa': { category: 'migration', key: 'partnerFamilyVisa' },
    'business-investment-visa': { category: 'migration', key: 'businessInvestmentVisa' },
    'visa-problems': { category: 'visaIssues', key: 'visaProblems' },
    'reported-to-immigration': { category: 'visaIssues', key: 'reportedToImmigration' },
    'visa-expiring': { category: 'visaIssues', key: 'visaExpiring' }
  }

  const serviceInfo = pathToKeyMap[serviceId]
  
  if (!serviceInfo) {
    return (
      <div className="service-detail-page">
        <div className="container">
          <div className="error-message">
            <h1>页面未找到</h1>
            <Link to="/services" className="btn btn-primary">返回服务页面</Link>
          </div>
        </div>
      </div>
    )
  }

  const service = t.services[serviceInfo.category].services[serviceInfo.key]
  const categoryTitle = t.services[serviceInfo.category].title

  return (
    <div className="service-detail-page">
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">{t.nav.home}</Link>
            <span> / </span>
            <Link to="/services">{t.nav.services}</Link>
            <span> / </span>
            <span>{categoryTitle}</span>
            <span> / </span>
            <span>{service.title}</span>
          </nav>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </div>

      <div className="container">
        <div className="service-content">
          <div className="service-main">
            <div className="content-section">
              <h2>{language === 'zh' ? '服务详情' : 'Service Details'}</h2>
              <div className="content-text">
                {service.content.split('\n').map((line, index) => {
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

          <div className="service-sidebar">
            <div className="sidebar-card">
              <h3>{categoryTitle}</h3>
              <ul className="related-services">
                {Object.entries(t.services[serviceInfo.category].services).map(([key, item]) => (
                  <li key={key}>
                    <Link 
                      to={`/services/${Object.keys(pathToKeyMap).find(k => pathToKeyMap[k].key === key)}`}
                      className={key === serviceInfo.key ? 'active' : ''}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>{language === 'zh' ? '其他服务' : 'Other Services'}</h3>
              <ul className="other-services">
                {Object.entries(t.services).map(([categoryKey, category]) => {
                  if (categoryKey === serviceInfo.category) return null
                  return (
                    <li key={categoryKey}>
                      <Link to="/services">{category.title}</Link>
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

export default ServiceDetail
