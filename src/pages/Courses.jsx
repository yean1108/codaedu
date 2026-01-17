import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Courses.css'

const Courses = () => {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const courseCategories = [
    { ...t.courses.categories.migration, key: 'migration' },
    { ...t.courses.categories.professional, key: 'professional' },
    { ...t.courses.categories.popular, key: 'popular' }
  ]

  return (
    <div className="courses-page">
      <div className="page-hero">
        <div className="container">
          <h1>{t.courses.hero.title}</h1>
          <p>{t.courses.hero.subtitle}</p>
        </div>
      </div>

      <div className="container">
        {courseCategories.map((category, index) => (
          <section key={index} className="course-category-section">
            <h2 className="section-title">{category.title}</h2>
            <p className="section-subtitle">{category.description}</p>
            <div className="courses-grid">
              {Object.entries(category.courses).map(([courseKey, course]) => {
                const courseName = language === 'zh' ? course.name : course.nameEn
                return (
                  <div key={courseKey} className="course-card card">
                    <h3>{courseName}</h3>
                    <p>{t.courses.learnMore.replace('{course}', courseName)}</p>
                    <Link to={`/courses/${category.key}/${courseKey}`} className="btn btn-primary">
                      {t.courses.viewCourse}
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Courses
