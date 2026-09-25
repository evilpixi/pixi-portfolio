import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage, localizePath, getAlternatePath } from '../i18n/LanguageContext.jsx'
import BrandLogo from './BrandLogo.jsx'
import Flag from './Flag.jsx'
import './navbar.css'

function Navbar() {
  const { language, t } = useLanguage()
  const { pathname } = useLocation()

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <BrandLogo />

        <nav className="navbar-links">
          <NavLink to={localizePath('/', language)} end>
            {t.nav.home}
          </NavLink>
          <NavLink to={localizePath('/about', language)}>{t.nav.about}</NavLink>
          <NavLink to={localizePath('/work', language)}>{t.nav.work}</NavLink>
          <NavLink to={localizePath('/contact', language)}>{t.nav.contact}</NavLink>
        </nav>

        <a className="lang-switch" href={getAlternatePath(pathname)}>
          <span className="flags">
            {(language === 'en' ? ['es', 'ar'] : ['us', 'gb']).map((code) => (
              <Flag key={code} code={code} />
            ))}
          </span>
          {t.settings.switchLink}
        </a>
      </div>
    </header>
  )
}

export default Navbar
