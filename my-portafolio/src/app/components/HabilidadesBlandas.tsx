'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useLanguage } from './LanguageProvider'

interface Habilidad {
  id: number
  titulo: string
  descripcion: string
  icono: string
  nivel: number
}

export default function HabilidadesBlandas() {
  const { t } = useLanguage()
  const habilidadesBlandas: Habilidad[] = t.habilidadesBlandas || []

  return (
    <section id="habilidades-blandas" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">HABILIDADES BLANDAS</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Competencias que complementan mi expertise técnico
          </p>
        </motion.div>

        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-habilidades',
              prevEl: '.swiper-button-prev-habilidades',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 6 },
            }}
            className="py-8"
          >
            {habilidadesBlandas.map((habilidad: Habilidad, index: number) => (
              <SwiperSlide key={habilidad.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-700 dark:to-dark-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-500 h-full"
                >
                  <div className="text-4xl sm:text-5xl mb-4 text-center">{habilidad.icono}</div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center break-words px-2">
                    {habilidad.titulo}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center break-words px-2">
                    {habilidad.descripcion}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas personalizadas AFUERA */}
          <div className="swiper-button-prev-habilidades absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg transition-all">
            ←
          </div>
          <div className="swiper-button-next-habilidades absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg transition-all">
            →
          </div>
        </div>
      </div>
    </section>
  )
}
