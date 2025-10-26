'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import data from '@/data/data.json'

import 'swiper/css'
import 'swiper/css/navigation'

export default function MisServicios() {
  const { misServicios } = data

  return (
    <section id="servicios" className="section bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">MIS SERVICIOS</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Soluciones profesionales para tus proyectos digitales
          </p>
        </motion.div>

        <div className="relative px-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.servicios-button-next',
              prevEl: '.servicios-button-prev',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="servicios-swiper"
          >
            {misServicios.map((servicio) => (
              <SwiperSlide key={servicio.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full p-8 bg-gray-50 dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-800"
                >
                  <div className="text-6xl mb-6 text-center">{servicio.icono}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
                    {servicio.titulo}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                    {servicio.descripcion}
                  </p>

                  <ul className="space-y-2">
                    {servicio.caracteristicas.map((caracteristica, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400">✓</span>
                        <span>{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="servicios-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="servicios-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}