'use client'

import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.footer?.titulo || 'Mi Portafolio'}
            </h3>
            <p className="text-gray-400 mb-6">
              {t.footer?.descripcion || 'Desarrollador apasionado por crear experiencias digitales increibles'}
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.instagram.com/juanfelipem_r" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/juan-felipe-mora-revelo-9416a7272" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Pipemora1324" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              {t.footer?.tituloContacto || 'Contacto'}
            </h4>
            <div className="space-y-3">
              <a href="mailto:JUANFELIPEMORAREVELO@gmail.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                <span>JUANFELIPEMORAREVELO@gmail.com</span>
              </a>
              <a href="tel:+573152332963" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                <span>+57 315 23 2963</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Colombia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              {t.footer?.tituloEnlaces || 'Enlaces Rápidos'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">{t.navbar?.inicio || 'Inicio'}</a></li>
              <li><a href="#capacidades" className="hover:text-blue-400 transition-colors">{t.navbar?.capacidades || 'Capacidades'}</a></li>
              <li><a href="#sobre-mi" className="hover:text-blue-400 transition-colors">{t.navbar?.sobreMi || 'Sobre Mí'}</a></li>
              <li><a href="#proyectos" className="hover:text-blue-400 transition-colors">{t.navbar?.proyectos || 'Proyectos'}</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">{t.navbar?.servicios || 'Servicios'}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t.footer?.añoActual || 2025} {t.footer?.titulo || 'Mi Portafolio'}. {t.footer?.derechosAutor || 'Todos los derechos reservados'}.
            </p>
            <p className="text-gray-400 text-sm">{t.footer?.mensajeAdicional || 'Hecho con amor'}</p>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50">
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}
