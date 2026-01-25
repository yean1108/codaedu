import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  
  const isServicesPage = location.pathname.startsWith('/services')

  // 移动端菜单打开时禁止body滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const servicesMenu = [
    { 
      title: t.servicesMenu.study.title, 
      items: [
        { name: t.servicesMenu.study.items.studentInAustralia, path: '/services/student-in-australia' },
        { name: t.servicesMenu.study.items.highSchoolStudent, path: '/services/high-school-student' },
        { name: t.servicesMenu.study.items.studentOverseas, path: '/services/student-overseas' },
        { name: t.servicesMenu.study.items.touristVisa, path: '/services/tourist-visa' },
        { name: t.servicesMenu.study.items.parentServices, path: '/services/parent-services' }
      ]
    },
    { 
      title: t.servicesMenu.migration.title, 
      items: [
        { name: t.servicesMenu.migration.items.temporaryResidency, path: '/services/temporary-residency' },
        { name: t.servicesMenu.migration.items.employerSponsorship, path: '/services/employer-sponsorship' },
        { name: t.servicesMenu.migration.items.partnerFamilyVisa, path: '/services/partner-family-visa' },
        { name: t.servicesMenu.migration.items.businessInvestmentVisa, path: '/services/business-investment-visa' }
      ]
    },
    { 
      title: t.servicesMenu.visaIssues.title, 
      items: [
        { name: t.servicesMenu.visaIssues.items.visaProblems, path: '/services/visa-problems' },
        { name: t.servicesMenu.visaIssues.items.reportedToImmigration, path: '/services/reported-to-immigration' },
        { name: t.servicesMenu.visaIssues.items.visaExpiring, path: '/services/visa-expiring' }
      ]
    }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-contact">
              <span>+61 2 9286 3799</span>
              <span>info@codaedu.com.au</span>
            </div>
            <div className="header-languages">
              <button 
                className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
                onClick={() => setLanguage('zh')}
              >
                中文
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                Eng
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="header-nav">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <span className="logo-text">CodaEdu</span>
              <span className="logo-tagline">{t.nav.tagline}</span>
            </Link>
            
            <div className="mobile-header-actions">
              <div className="mobile-lang-switcher-inline">
                <button 
                  className={`lang-btn-inline ${language === 'zh' ? 'active' : ''}`}
                  onClick={() => setLanguage('zh')}
                  aria-label="切换到中文"
                >
                  中
                </button>
                <button 
                  className={`lang-btn-inline ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>
              <button 
                className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={language === 'zh' ? '切换菜单' : 'Toggle Menu'}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            {isMenuOpen && (
              <div 
                className="menu-overlay"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            )}
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.home}
                </Link>
              </li>
              <li 
                className={`nav-item-dropdown ${isServicesPage ? 'on-services-page' : ''}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setActiveDropdown('services')
                  }
                }}
                onMouseLeave={() => {
                  // 在services页面时，不要自动关闭菜单
                  if (!isServicesPage && window.innerWidth > 768) {
                    // 延迟关闭，给鼠标移动到下拉菜单的时间
                    setTimeout(() => {
                      const dropdown = document.querySelector('.dropdown-menu')
                      if (!dropdown || !dropdown.matches(':hover')) {
                        setActiveDropdown(null)
                      }
                    }, 200)
                  }
                }}
              >
                <Link 
                  to="/services" 
                  className={isServicesPage ? 'active' : ''}
                  onClick={(e) => {
                    // 移动端或已在services页面时，点击切换菜单
                    if (window.innerWidth <= 768 || isServicesPage) {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveDropdown(activeDropdown === 'services' ? null : 'services')
                    }
                  }}
                >
                  {t.nav.services}
                  <span className="dropdown-indicator">
                    {activeDropdown === 'services' ? '▲' : '▼'}
                  </span>
                </Link>
                {activeDropdown === 'services' && (
                  <div 
                    className="dropdown-menu"
                    onMouseEnter={() => {
                      if (window.innerWidth > 768) {
                        setActiveDropdown('services')
                      }
                    }}
                    onMouseLeave={() => {
                      // 在services页面时，不要自动关闭菜单
                      if (!isServicesPage && window.innerWidth > 768) {
                        setTimeout(() => {
                          const navItem = document.querySelector('.nav-item-dropdown')
                          if (!navItem || !navItem.matches(':hover')) {
                            setActiveDropdown(null)
                          }
                        }, 200)
                      }
                    }}
                  >
                    {servicesMenu.map((section, idx) => (
                      <div key={idx} className="dropdown-section">
                        <h4>{section.title}</h4>
                        <ul>
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link 
                                to={item.path}
                                onClick={() => {
                                  // 点击子菜单项后关闭菜单
                                  setActiveDropdown(null)
                                  setIsMenuOpen(false)
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link 
                  to="/institutions" 
                  className={isActive('/institutions') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.institutions}
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className={isActive('/courses') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.courses}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
