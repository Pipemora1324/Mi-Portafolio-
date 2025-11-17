'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

interface HeroData {
  name: string
  profession: string
  phrase: string
  image: string
}

export default function Hero() {
  const { t } = useLanguage()
  const hero: HeroData = t.hero || { name: '', profession: '', phrase: '', image: '' }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 pt-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-lg"
            >
              Hola soy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold gradient-text leading-tight"
            >
              {hero.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold"
            >
              {hero.profession}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {hero.phrase}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
            <a 
            href="https://wa.me/qr/BE7FHCQLMIXQE1" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Contáctame
          </a>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-800">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 dark:bg-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-purple-500 dark:bg-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
