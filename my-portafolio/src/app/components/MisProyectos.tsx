'use client'

import Image from 'next/image'
import data from '@/data/data.json'

export default function MisProyectos() {
  const misProyectos = data.misProyectos

  return (
    <section className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <h2 className="section-title gradient-text">MIS PROYECTOS</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Proyectos en los que he trabajado con pasión
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {misProyectos.map((proyecto) => (
            <a
              key={proyecto.id}
              href={proyecto.enlaceDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {proyecto.descripcion}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
