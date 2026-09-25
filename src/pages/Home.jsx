import { Link } from 'react-router-dom'
import { useLanguage, localizePath } from '../i18n/LanguageContext.jsx'
import { site, games, projects } from '../data/site.js'
import GameCard from '../components/GameCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import RotatingWord from '../components/RotatingWord.jsx'

function Home() {
  const { language, t } = useLanguage()

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            {t.home.greeting} <span className="gradient-text">{site.name}</span>
          </h1>
          <p className="aka">
            {t.home.aka} <span className="aka-name">{site.nickname}</span>
          </p>
          <p className="hero-role">
            {t.home.iAm}{' '}
            <span className="hero-role-word" aria-hidden="true">
              <RotatingWord words={t.home.roles} />
            </span>
            <span className="sr-only">{t.home.roles.join(', ')}</span>
          </p>
          <p className="hero-tagline">{t.home.tagline}</p>
          <div className="actions">
            <Link className="btn btn-primary" to={localizePath('/work', language)}>
              {t.home.ctaWork}
            </Link>
            <Link className="btn btn-secondary" to={localizePath('/contact', language)}>
              {t.home.ctaContact}
            </Link>
          </div>
        </div>
        <div className="avatar avatar-lg">
          <img src={site.avatar} alt={t.about.avatarAlt} />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>{t.home.gamesTitle}</h2>
        </div>
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>{t.home.featuredTitle}</h2>
          <Link to={localizePath('/work', language)}>{t.home.featuredLink}</Link>
        </div>
        <div className="grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
