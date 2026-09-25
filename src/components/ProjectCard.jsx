import { useLanguage } from '../i18n/LanguageContext.jsx'

function ProjectCard({ project }) {
  const { t } = useLanguage()
  const { title, description, award } = t.work.projects[project.id]

  return (
    <article className="card project-card">
      <div className={`project-cover project-cover--${project.id}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            style={{ objectPosition: project.imagePosition }}
            className={project.pixelArt ? 'pixelated' : undefined}
          />
        ) : (
          <span aria-hidden="true">{title.charAt(0)}</span>
        )}
        {award && (
          <span className="project-award">
            <span aria-hidden="true">🏆</span> {award}
          </span>
        )}
      </div>
      <div className="project-body">
        <div className="project-meta">
          <h3>{title}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        <p>{description}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
          {t.work.viewProject} ↗
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
