'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Testimonios() {
  const { t } = useLanguage()
  const testimonios = t.testimonios || []

  return (
    <section id="testimonios" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">TESTIMONIOS</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Lo que dicen quienes han trabajado conmigo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600">
                  <Image
                    src={testimonio.avatar}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {testimonio.nombre}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonio.cargo}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {testimonio.empresa}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{testimonio.comentario}"
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                <span className="text-6xl text-blue-600 dark:text-blue-400 opacity-20">
                  ❝
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
