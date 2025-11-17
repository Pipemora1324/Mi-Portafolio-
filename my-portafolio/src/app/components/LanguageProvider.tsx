'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('es')
  const [translations, setTranslations] = useState<any>(null)

  // Cargar las traducciones al iniciar
  useEffect(() => {
    const loadTranslations = async () => {
      const data = await import('@/data/data.json')
      setTranslations(data.default)
    }
    loadTranslations()
  }, [])

  // Cargar idioma guardado del localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Guardar idioma en localStorage cuando cambie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Obtener traducciones según el idioma actual
  const t = translations ? translations[language] : {}

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
