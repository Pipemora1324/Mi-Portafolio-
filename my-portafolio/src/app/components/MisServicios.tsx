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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">
            {t.navbar?.servicios?.toUpperCase() || 'MIS SERVICIOS'}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Soluciones tecnológicas adaptadas a tus necesidades
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
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
          {misServicios.map((servicio: Servicio, index: number) => (
            <SwiperSlide key={servicio.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-dark-600"
              >
                <div className="text-6xl mb-4">{servicio.icono}</div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {servicio.titulo}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {servicio.descripcion}
                </p>

                <ul className="space-y-2">
                  {servicio.caracteristicas.map((caracteristica: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
