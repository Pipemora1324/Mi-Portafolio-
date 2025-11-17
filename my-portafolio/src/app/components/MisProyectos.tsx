'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import data from '@/data/data.json'

export default function MisProyectos() {
  const { misProyectos } = data

  return (
    <section id="proyectos" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">MIS PROYECTOS</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Proyectos en los que he trabajado con pasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {misProyectos.map((proyecto, index) => (
            <a
              key={proyecto.id ?? index}
              href={proyecto.enlaceDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer block"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {proyecto.destacado && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Destacado
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {proyecto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
