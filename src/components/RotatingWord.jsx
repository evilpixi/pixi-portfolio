import { useEffect, useState } from 'react'

const TYPE_SPEED = 70
const DELETE_SPEED = 35
const HOLD_TIME = 1800
const REDUCED_HOLD_TIME = 2500

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

// Types each word, holds it, deletes it and moves on to the next one
function RotatingWord({ words }) {
  const [reduced] = useState(prefersReducedMotion)
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const word = words[index % words.length]

  useEffect(() => {
    if (reduced) {
      const timer = setTimeout(() => setIndex((i) => (i + 1) % words.length), REDUCED_HOLD_TIME)
      return () => clearTimeout(timer)
    }

    let delay = deleting ? DELETE_SPEED : TYPE_SPEED
    if (!deleting && length === word.length) delay = HOLD_TIME

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true)
      } else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setLength((l) => l + (deleting ? -1 : 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [reduced, deleting, length, word, words.length])

  return (
    <span className={`rotating-word rotating-word--${index % 2 ? 'secondary' : 'primary'}`}>
      {reduced ? word : word.slice(0, length)}
      <span className="caret" />
    </span>
  )
}

export default RotatingWord
