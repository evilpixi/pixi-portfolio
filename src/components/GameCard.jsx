import { useLanguage } from '../i18n/LanguageContext.jsx'

function GameCard({ game }) {
  const { t } = useLanguage()
  const { title, description } = t.work.games[game.id]

  return (
    <article className="card game-card">
      <div className="game-poster">
        <img src={game.image} alt={title} loading="lazy" />
      </div>
      <div className="game-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {game.tags.map((tag) => (
            <li key={tag} className="tag tag-secondary">
              {tag}
            </li>
          ))}
        </ul>
        <a className="project-link" href={game.url} target="_blank" rel="noopener noreferrer">
          {t.work.viewGame} ↗
        </a>
      </div>
    </article>
  )
}

export default GameCard
