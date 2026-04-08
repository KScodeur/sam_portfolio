import { useState, useEffect } from 'react'
import translations from '../translations'

export const useLanguage = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Get language from localStorage only
    const savedLanguage = localStorage.getItem('language') || 'en'
    if (['en', 'fr', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang) => {
    if (['en', 'fr', 'es'].includes(lang)) {
      setLanguage(lang)
      localStorage.setItem('language', lang)
      // Force a page reload to update translations
      window.location.reload()
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return { language, changeLanguage, t }
}
