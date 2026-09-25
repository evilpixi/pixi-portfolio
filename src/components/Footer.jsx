import { Link } from 'react-router-dom'
import { useLanguage, localizePath } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'
import BrandLogo from './BrandLogo.jsx'
import './footer.css'

function Footer() {
  const { language, t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <BrandLogo />
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer-col">
          <h3>{t.footer.navTitle}</h3>
          <Link to={localizePath('/about', language)}>{t.nav.about}</Link>
          <Link to={localizePath('/work', language)}>{t.nav.work}</Link>
          <Link to={localizePath('/contact', language)}>{t.nav.contact}</Link>
        </div>

        <div className="footer-col">
          <h3>{t.footer.socialTitle}</h3>
          {site.socials.map((social) => (
            <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-legal">
        <p>
          © {year} {site.owner}. {t.footer.rights}
        </p>
        <p>{t.footer.privacy}</p>
        <Link to={localizePath('/legal', language)}>{t.nav.legal}</Link>
      </div>
    </footer>
  )
}

export default Footer
