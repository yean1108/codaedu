import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './CourseDetail.css'

const CourseDetail = () => {
  const { categoryId, courseId } = useParams()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId, courseId])

  const categoryMap = {
    'migration': 'migration',
    'professional': 'professional',
    'popular': 'popular'
  }

  const categoryKey = categoryMap[categoryId]
  const category = categoryKey ? t.courses.categories[categoryKey] : null
  const course = category?.courses?.[courseId]
  
  if (!category || !course) {
    return (
      <div className="course-detail-page">
        <div className="container">
          <div className="error-message">
            <h1>{language === 'zh' ? '页面未找到' : 'Page Not Found'}</h1>
            <Link to="/courses" className="btn btn-primary">
              {language === 'zh' ? '返回课程页面' : 'Back to Courses'}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const courseName = language === 'zh' ? course.name : course.nameEn
  const courseDescription = language === 'zh' ? course.description : course.descriptionEn

  return (
    <div className="course-detail-page">
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">{t.nav.home}</Link>
            <span> / </span>
            <Link to="/courses">{t.nav.courses}</Link>
            <span> / </span>
            <span>{category.title}</span>
            <span> / </span>
            <span>{courseName}</span>
          </nav>
          <h1>{courseName}</h1>
          <p>{courseDescription}</p>
        </div>
      </div>

      <div className="container">
        <div className="course-content">
          <div className="course-main">
            <div className="content-section">
              <h2>{t.courses.courseDetail.overview}</h2>
              <p>{courseDescription}</p>
              
              <h3>{t.courses.courseDetail.duration}</h3>
              <p>{language === 'zh' ? '根据课程级别和类型，学制通常为1-4年不等。' : 'Duration typically ranges from 1-4 years depending on course level and type.'}</p>

              <h3>{t.courses.courseDetail.entryRequirements}</h3>
              <ul className="requirements-list">
                <li>{language === 'zh' ? '完成高中或同等学历' : 'Completion of high school or equivalent'}</li>
                <li>{language === 'zh' ? '满足英语语言要求（如IELTS、TOEFL）' : 'Meet English language requirements (e.g., IELTS, TOEFL)'}</li>
                <li>{language === 'zh' ? '部分课程可能需要相关背景或工作经验' : 'Some courses may require relevant background or work experience'}</li>
              </ul>

              <h3>{t.courses.courseDetail.careerProspects}</h3>
              <p>{language === 'zh' ? '完成该课程后，毕业生可以在相关领域找到就业机会。澳洲的就业市场对这些专业人才需求量大，就业前景良好。' : 'Upon completion of this course, graduates can find employment opportunities in related fields. Australia\'s job market has high demand for these professionals with excellent employment prospects.'}</p>

              <h3>{t.courses.courseDetail.institutions}</h3>
              <p>{language === 'zh' ? '我们与多所提供该课程的澳洲院校建立了合作关系，可以根据您的需求推荐最适合的院校。' : 'We have partnerships with multiple Australian institutions offering this course and can recommend the most suitable institution based on your needs.'}</p>
            </div>

            <div className="cta-section">
              <h3>{language === 'zh' ? '想要了解更多？' : 'Want to Know More?'}</h3>
              <p>{language === 'zh' ? '联系我们的专业顾问，获取详细的课程信息和申请指导' : 'Contact our professional consultants for detailed course information and application guidance'}</p>
              <Link to="/contact" className="btn btn-primary">
                {t.contact.hero.title}
              </Link>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="sidebar-card">
              <h3>{category.title}</h3>
              <ul className="related-courses">
                {Object.entries(category.courses).map(([key, crs]) => {
                  if (key === courseId) return null
                  const crsName = language === 'zh' ? crs.name : crs.nameEn
                  return (
                    <li key={key}>
                      <Link to={`/courses/${categoryId}/${key}`}>
                        {crsName}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>{language === 'zh' ? '其他课程分类' : 'Other Course Categories'}</h3>
              <ul className="other-categories">
                {Object.entries(t.courses.categories).map(([key, cat]) => {
                  if (key === categoryKey) return null
                  return (
                    <li key={key}>
                      <Link to="/courses">{cat.title}</Link>
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

export default CourseDetail
