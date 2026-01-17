import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Contact.css'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData)
    alert(t.contact.form.successMessage)
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>{t.contact.hero.title}</h1>
          <p>{t.contact.hero.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>{t.contact.info.title}</h2>
            <div className="info-item">
              <h3>{t.contact.info.address.title}</h3>
              <p>{t.contact.info.address.content.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}</p>
            </div>
            <div className="info-item">
              <h3>{t.contact.info.phone.title}</h3>
              <p>{t.contact.info.phone.content}</p>
            </div>
            <div className="info-item">
              <h3>{t.contact.info.email.title}</h3>
              <p>{t.contact.info.email.content}</p>
            </div>
            <div className="info-item">
              <h3>{t.contact.info.hours.title}</h3>
              <p>{t.contact.info.hours.content.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>{t.contact.form.title}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t.contact.form.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">{t.contact.form.serviceType}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">{t.contact.form.selectService}</option>
                  <option value="study">{t.contact.form.options.study}</option>
                  <option value="migration">{t.contact.form.options.migration}</option>
                  <option value="visa-issues">{t.contact.form.options.visaIssues}</option>
                  <option value="other">{t.contact.form.options.other}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message} *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
