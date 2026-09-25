import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'

const EMPTY_FORM = { name: '', email: '', message: '' }

function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // Sent through a form service (e.g. Formspree), so no address is exposed in the code
  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(site.contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error(response.statusText)
      setForm(EMPTY_FORM)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-header">
        <span className="eyebrow">{t.contact.eyebrow}</span>
        <h1>{t.contact.title}</h1>
        <p className="lead">{t.contact.description}</p>
      </section>

      <div className="contact-layout">
        {site.contactFormEndpoint && (
          <form className="card contact-form" onSubmit={handleSubmit}>
            <label>
              {t.contact.form.name}
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              {t.contact.form.email}
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              {t.contact.form.message}
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
            </button>
            {status === 'sent' && (
              <p className="form-status form-status--ok">{t.contact.form.sent}</p>
            )}
            {status === 'error' && (
              <p className="form-status form-status--error">{t.contact.form.error}</p>
            )}
          </form>
        )}

        <aside className="card contact-info">
          <h2>{t.contact.directTitle}</h2>
          <dl>
            <dt>{t.contact.locationLabel}</dt>
            <dd>{site.location}</dd>
            <dt>{t.contact.socialsLabel}</dt>
            <dd className="contact-socials">
              {site.socials.map((social) => (
                <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              ))}
            </dd>
          </dl>
        </aside>
      </div>
    </>
  )
}

export default Contact
