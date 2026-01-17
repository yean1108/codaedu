import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Services.css'

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 服务路径映射
  const servicePaths = {
    studentInAustralia: 'student-in-australia',
    highSchoolStudent: 'high-school-student',
    studentOverseas: 'student-overseas',
    touristVisa: 'tourist-visa',
    parentServices: 'parent-services',
    temporaryResidency: 'temporary-residency',
    employerSponsorship: 'employer-sponsorship',
    partnerFamilyVisa: 'partner-family-visa',
    businessInvestmentVisa: 'business-investment-visa',
    visaProblems: 'visa-problems',
    reportedToImmigration: 'reported-to-immigration',
    visaExpiring: 'visa-expiring'
  }

  const studyServices = [
    { ...t.services.study.services.studentInAustralia, key: 'studentInAustralia' },
    { ...t.services.study.services.highSchoolStudent, key: 'highSchoolStudent' },
    { ...t.services.study.services.studentOverseas, key: 'studentOverseas' },
    { ...t.services.study.services.touristVisa, key: 'touristVisa' },
    { ...t.services.study.services.parentServices, key: 'parentServices' }
  ]

  const migrationServices = [
    { ...t.services.migration.services.temporaryResidency, key: 'temporaryResidency' },
    { ...t.services.migration.services.employerSponsorship, key: 'employerSponsorship' },
    { ...t.services.migration.services.partnerFamilyVisa, key: 'partnerFamilyVisa' },
    { ...t.services.migration.services.businessInvestmentVisa, key: 'businessInvestmentVisa' }
  ]

  const visaIssues = [
    { ...t.services.visaIssues.services.visaProblems, key: 'visaProblems' },
    { ...t.services.visaIssues.services.reportedToImmigration, key: 'reportedToImmigration' },
    { ...t.services.visaIssues.services.visaExpiring, key: 'visaExpiring' }
  ]

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1>{t.services.hero.title}</h1>
          <p>{t.services.hero.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <section className="service-section">
          <h2 className="section-title">{t.services.study.title}</h2>
          <div className="services-grid">
            {studyServices.map((service, index) => (
              <div key={index} className="service-item card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${servicePaths[service.key]}`} className="btn btn-primary">
                  {t.services.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section">
          <h2 className="section-title">{t.services.migration.title}</h2>
          <div className="services-grid">
            {migrationServices.map((service, index) => (
              <div key={index} className="service-item card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${servicePaths[service.key]}`} className="btn btn-primary">
                  {t.services.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section">
          <h2 className="section-title">{t.services.visaIssues.title}</h2>
          <div className="services-grid">
            {visaIssues.map((service, index) => (
              <div key={index} className="service-item card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${servicePaths[service.key]}`} className="btn btn-primary">
                  {t.services.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
