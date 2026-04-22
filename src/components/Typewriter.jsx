import { useState, useEffect } from 'react'
import { ROLES } from '../data'

export default function Typewriter() {
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = ROLES[wordIdx]
    let t
    if (!deleting && charIdx < word.length)        t = setTimeout(() => setCharIdx(c => c + 1), 55)
    else if (!deleting && charIdx === word.length) t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && charIdx > 0)              t = setTimeout(() => setCharIdx(c => c - 1), 30)
    else { setDeleting(false); setWordIdx(i => (i + 1) % ROLES.length) }
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx])

  return (
    <span className="hero-typewriter">
      <span className="prefix">$</span>
      {ROLES[wordIdx].slice(0, charIdx)}
      <span className="hero-cursor" />
    </span>
  )
}
