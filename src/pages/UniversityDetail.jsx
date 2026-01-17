import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './UniversityDetail.css'

const UniversityDetail = () => {
  const { universityId } = useParams()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [universityId])

  const university = t.institutions.universities.list[universityId]
  
  if (!university) {
    return (
      <div className="university-detail-page">
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

  const universityName = language === 'zh' ? university.name : university.nameEn
  const universityDescription = language === 'zh' ? university.description : university.descriptionEn

  return (
    <div className="university-detail-page">
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">{t.nav.home}</Link>
            <span> / </span>
            <Link to="/institutions">{t.nav.institutions}</Link>
            <span> / </span>
            <span>{t.institutions.categories.universities.title}</span>
            <span> / </span>
            <span>{universityName}</span>
          </nav>
          <h1>{universityName}</h1>
          <p>{universityDescription}</p>
        </div>
      </div>

      <div className="container">
        <div className="university-content">
          <div className="university-main">
            <div className="content-section">
              <h2>{language === 'zh' ? '大学简介' : 'University Overview'}</h2>
              <p>{universityDescription}</p>
              
              <h3>{language === 'zh' ? '为什么选择这所大学？' : 'Why Choose This University?'}</h3>
              <ul className="features-list">
                <li>{language === 'zh' ? '世界一流的学术声誉' : 'World-class academic reputation'}</li>
                <li>{language === 'zh' ? '优秀的研究设施和资源' : 'Excellent research facilities and resources'}</li>
                <li>{language === 'zh' ? '广泛的国际合作机会' : 'Extensive international cooperation opportunities'}</li>
                <li>{language === 'zh' ? '优秀的就业前景' : 'Excellent employment prospects'}</li>
                <li>{language === 'zh' ? '多元化的学习环境' : 'Diverse learning environment'}</li>
              </ul>

              <h3>{language === 'zh' ? '申请信息' : 'Application Information'}</h3>
              <p>{language === 'zh' ? '我们与这所大学建立了长期合作关系，可以为学生提供专业的申请指导和咨询服务。我们的顾问团队了解最新的申请要求和流程，可以帮助您提高申请成功率。' : 'We have established a long-term partnership with this university and can provide professional application guidance and consultation services for students. Our consultant team understands the latest application requirements and processes, and can help improve your application success rate.'}</p>
            </div>

            <div className="cta-section">
              <h3>{language === 'zh' ? '想要申请？' : 'Want to Apply?'}</h3>
              <p>{language === 'zh' ? '联系我们的专业顾问，获取免费咨询和申请指导' : 'Contact our professional consultants for free consultation and application guidance'}</p>
              <Link to="/contact" className="btn btn-primary">
                {t.contact.hero.title}
              </Link>
            </div>
          </div>

          <div className="university-sidebar">
            <div className="sidebar-card">
              <h3>{t.institutions.categories.universities.title}</h3>
              <ul className="related-universities">
                {Object.entries(t.institutions.universities.list).map(([key, uni]) => {
                  if (key === universityId) return null
                  const uniName = language === 'zh' ? uni.name : uni.nameEn
                  return (
                    <li key={key}>
                      <Link to={`/institutions/university/${key}`}>
                        {uniName}
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

export default UniversityDetail
