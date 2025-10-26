'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import data from '@/data/data.json'

export default function SobreMi() {
  const { sobreMi } = data

  return (
    <section id="sobre-mi" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">{sobreMi.titulo}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-800">
                <Image
                  src={sobreMi.imagen}
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 dark:bg-blue-600 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 dark:bg-purple-600 rounded-full blur-xl opacity-50"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {sobreMi.bio}
            </p>

            <div className="space-y-3">
              {sobreMi.detalles.map((detalle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">{detalle.split(' ')[0]}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {detalle.substring(detalle.indexOf(' ') + 1)}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#contacto" className="inline-block btn-primary mt-4">
                Contactame
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}