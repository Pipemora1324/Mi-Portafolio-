'use client'

import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'
import data from '@/data/data.json'

export default function Hero() {
  const { hero } = data

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Hola soy</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-7xl font-bold mb-6 gradient-text"
          >
            {hero.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8"
          >
            {hero.profession}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            {hero.phrase}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <button className="btn-primary flex items-center gap-2">
              <Eye size={20} />
              Ver Proyectos
            </button>
            <a href="/cv.pdf" className="btn-secondary flex items-center gap-2">
              <Download size={20} />
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}