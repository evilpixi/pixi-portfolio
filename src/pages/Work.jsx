import { useLanguage } from '../i18n/LanguageContext.jsx'
import { games, projects } from '../data/site.js'
import GameCard from '../components/GameCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

function Work() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-header">
        <h1>{t.work.title}</h1>
      </section>

      <section>
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.work.personalTitle}</h2>
        <div className="grid section-intro">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Work
