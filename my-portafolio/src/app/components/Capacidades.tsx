'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useLanguage } from './LanguageProvider'

interface Tecnologia {
  name: string
  icon: string
  color: string
}

export default function Capacidades() {
  const { t } = useLanguage()
  const capacidades: Tecnologia[] = t.capacidades || []

  return (
    <section id="capacidades" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">
            {t.navbar?.capacidades?.toUpperCase() || 'TECNOLOGÍAS'}
          </h2>
        </motion.div>

        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-capacidades',
              prevEl: '.swiper-button-prev-capacidades',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="py-12"
          >
            {capacidades.map((tech: Tecnologia, index: number) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-700 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-600"
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <span className="text-3xl sm:text-4xl" style={{ color: tech.color }}>
                      {tech.icon === 'html' && '🌐'}
                      {tech.icon === 'css' && '🎨'}
                      {tech.icon === 'javascript' && '⚡'}
                      {tech.icon === 'typescript' && '📘'}
                      {tech.icon === 'react' && '⚛️'}
                      {tech.icon === 'nextjs' && '▲'}
                      {tech.icon === 'python' && '🐍'}
                      {tech.icon === 'java' && '☕'}
                      {tech.icon === 'nodejs' && '🟢'}
                      {tech.icon === 'tailwind' && '💨'}
                    </span>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-center break-words px-2"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas personalizadas AFUERA */}
          <div className="swiper-button-prev-capacidades absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg transition-all">
            ←
          </div>
          <div className="swiper-button-next-capacidades absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg transition-all">
            →
          </div>
        </div>
      </div>
    </section>
  )
}
