'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import data from '@/data/data.json'

export default function Hero() {
  const { hero } = data

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Hola soy</p>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              {hero.name}
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
              {hero.profession}
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              {hero.phrase}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-800">
   <Image
  src="/images/perfil.jpg"
  alt="Mi foto"
  fill
  className="object-cover"
  priority
/>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 dark:bg-blue-600 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500 dark:bg-purple-600 rounded-full blur-2xl opacity-50"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}