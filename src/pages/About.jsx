import { useLanguage } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.role + item.company} className="timeline-item card">
          <div className="timeline-head">
            <span className="company-mark" aria-hidden="true">
              {item.company.charAt(0)}
            </span>
            <div>
              <h3>{item.company}</h3>
              <span className="timeline-role">{item.role}</span>
            </div>
            {item.period && <span className="timeline-period">{item.period}</span>}
          </div>
          {item.description && <p>{item.description}</p>}
          {item.stack && (
            <ul className="tags">
              {item.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

function About() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-header about-header">
        <div className="avatar">
          <img src={site.avatar} alt={t.about.avatarAlt} />
        </div>
        <div>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1>{t.about.title}</h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-text">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="lead">
              {paragraph}
            </p>
          ))}
        </div>
        <figure className="about-figure">
          <img src="/about.jpg" alt={t.about.imageAlt} />
        </figure>
      </section>

      <section className="section">
        <h2>{t.about.skillsTitle}</h2>
        <div className="skill-groups">
          {t.about.skillGroups.map((group) => (
            <div key={group.title} className="card skill-group">
              <h3>{group.title}</h3>
              <ul className="tags tags-lg">
                {group.items.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.about.experienceTitle}</h2>
        <Timeline items={t.about.experience} />
      </section>

      <section className="section">
        <h2>{t.about.educationTitle}</h2>
        <Timeline items={t.about.education} />
      </section>

      <div className="section about-columns">
        <section className="card info-card">
          <h2>{t.about.certificationsTitle}</h2>
          <ul className="info-list">
            {t.about.certifications.map((cert) => (
              <li key={cert.name}>
                <strong>{cert.name}</strong>
                <span>
                  {cert.issuer} · {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card info-card">
          <h2>{t.about.languagesTitle}</h2>
          <ul className="info-list">
            {t.about.languages.map((language) => (
              <li key={language.name}>
                <strong>{language.name}</strong>
                <span>{language.level}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export default About
