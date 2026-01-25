import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Footer.css'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t.footer.about.title}</h3>
            <ul>
              <li><Link to="/">{t.footer.about.home}</Link></li>
              <li><Link to="/about">{t.footer.about.about}</Link></li>
              <li><Link to="/about#team">{t.footer.about.team}</Link></li>
              <li><Link to="/contact">{t.footer.about.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.footer.study.title}</h3>
            <ul>
              <li><Link to="/courses">{t.footer.study.findCourses}</Link></li>
              <li><Link to="/institutions">{t.footer.study.findInstitutions}</Link></li>
              <li><Link to="/services">{t.footer.study.studentServices}</Link></li>
              <li><Link to="/about#success-stories">{t.footer.study.successStories}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.footer.contact.title}</h3>
            <div className="footer-contact">
              <p>Suite 101, 123 Education Street</p>
              <p>Melbourne VIC Australia 3000</p>
              <p>+61 2 1234 5678</p>
              <p>info@codaedu.com.au</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t.footer.online.title}</h3>
            <ul>
              <li><Link to="/contact">{t.footer.online.consultation}</Link></li>
              <li><Link to="/contact">{t.footer.online.payment}</Link></li>
            </ul>
            <div className="footer-certification">
              <p>{t.footer.certification.text}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <div className="footer-links">
            <Link to="/privacy">{t.footer.privacy}</Link>
            <span>|</span>
            <Link to="/disclaimer">{t.footer.disclaimer}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
