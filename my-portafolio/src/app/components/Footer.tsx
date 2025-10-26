'use client'

import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Mi Portafolio</h3>
            <p className="text-gray-400 mb-6">Desarrollador apasionado por crear experiencias digitales increibles</p>
            
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:tu@email.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                <span>tu@email.com</span>
              </a>
              <a href="tel:+573001234567" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                <span>+57 300 123 4567</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Colombia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Enlaces Rapidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#capacidades" className="hover:text-blue-400 transition-colors">Capacidades</a></li>
              <li><a href="#sobre-mi" className="hover:text-blue-400 transition-colors">Sobre Mi</a></li>
              <li><a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">2025 Mi Portafolio. Todos los derechos reservados.</p>
            <p className="text-gray-400 text-sm">Hecho con amor</p>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50">
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}