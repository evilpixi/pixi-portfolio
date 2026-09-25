import { Link } from 'react-router-dom'
import { useLanguage, localizePath } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'

// Every few seconds a light sweeps across the letters (see navbar.css)
function BrandLogo() {
  const { language } = useLanguage()

  return (
    <Link className="brand" to={localizePath('/', language)} aria-label={site.brand}>
      <img className="brand-mark" src="/favicon.png" alt="" width="32" height="32" />
      <span className="brand-letters" aria-hidden="true">
        {[...site.brand].map((letter, index) => (
          <span key={index} className="brand-letter" style={{ '--i': index }}>
            {letter}
          </span>
        ))}
      </span>
    </Link>
  )
}

export default BrandLogo
