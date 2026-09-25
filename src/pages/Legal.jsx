import { useLanguage } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'

function fillPlaceholders(text) {
  return text.replaceAll('{owner}', site.owner)
}

function Legal() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-header">
        <h1>{t.legal.title}</h1>
        <p className="muted">{t.legal.updated}</p>
      </section>

      <div className="legal">
        {t.legal.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{fillPlaceholders(section.body)}</p>
          </section>
        ))}
      </div>
    </>
  )
}

export default Legal
