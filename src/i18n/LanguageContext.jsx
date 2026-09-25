import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import en from './en.js'
import es from './es.js'

const DICTIONARIES = { en, es }

export function getLanguageFromPath(pathname) {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en'
}

function stripLangPrefix(pathname) {
  if (pathname === '/en' || pathname === '/es') return '/'
  if (pathname.startsWith('/en/') || pathname.startsWith('/es/')) return pathname.slice(3)
  return pathname
}

export function localizePath(path, language) {
  return path === '/' ? `/${language}` : `/${language}${path}`
}

export function getAlternatePath(pathname) {
  const language = getLanguageFromPath(pathname)
  const target = language === 'en' ? 'es' : 'en'
  return localizePath(stripLangPrefix(pathname), target)
}

export function useLanguage() {
  const { pathname } = useLocation()
  const language = getLanguageFromPath(pathname)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return { language, t: DICTIONARIES[language] }
}
