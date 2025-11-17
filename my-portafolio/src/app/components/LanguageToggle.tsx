'use client'

import { useLanguage } from './LanguageProvider'
import { Globe } from 'lucide-react'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="p-2 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 border border-white/20 dark:border-white/10"
      aria-label="Cambiar idioma"
    >
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </div>
    </button>
  )
}
