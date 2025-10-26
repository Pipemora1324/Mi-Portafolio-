'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import data from '@/data/data.json'

// Importar estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'

export default function Capacidades() {
  const { capacidades } = data

  return (
    <section id="capacidades" className="section bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">CAPACIDADES</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Tecnologías y herramientas que domino
          </p>
        </motion.div>

        <div className="relative px-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="capacidades-swiper"
          >
            {capacidades.map((tech, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-800"
                >
                  <div 
                    className="w-16 h-16 mb-4 flex items-center justify-center text-4xl"
                    style={{ color: tech.color }}
                  >
                    {getIconForTech(tech.name)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {tech.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas personalizadas FUERA */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function getIconForTech(name: string) {
  const icons: Record<string, string> = {
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '⚡',
    'TypeScript': '📘',
    'React': '⚛️',
    'Next.js': '▲',
    'Python': '🐍',
    'Java': '☕',
    'Node.js': '🟢',
    'Tailwind CSS': '💨',
  }
  return icons[name] || '💻'
}