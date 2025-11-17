'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useLanguage } from './LanguageProvider'

interface Servicio {
  id: number
  titulo: string
  descripcion: string
  icono: string
  caracteristicas: string[]
}

export default function MisServicios() {
  const { t } = useLanguage()
  const misServicios: Servicio[] = t.misServicios || []

  return (
    <section id="servicios" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">
            {t.navbar?.servicios?.toUpperCase() || 'MIS SERVICIOS'}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            {t.serviciosSubtitle || 'Soluciones tecnológicas adaptadas a tus necesidades'}
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-8 md:px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-servicios',
              prevEl: '.swiper-button-prev-servicios',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-8"
          >
            {misServicios.map((servicio: Servicio) => (
              <SwiperSlide key={servicio.id} className="h-auto">
                <div className="bg-white dark:bg-dark-700 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-600 flex flex-col h-full">
                  <div className="text-3xl sm:text-4xl mb-4">{servicio.icono}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 break-words">
                    {servicio.titulo}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {servicio.descripcion}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {servicio.caracteristicas.map((caracteristica: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">✓</span>
                        <span className="break-words">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Flechas */}
          <div className="swiper-button-prev-servicios absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg transition-all">
            ←
          </div>
          <div className="swiper-button-next-servicios absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg transition-all">
            →
          </div>
        </div>
      </div>
    </section>
  )
}
