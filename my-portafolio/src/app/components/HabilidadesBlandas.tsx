'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import data from '@/data/data.json'

import 'swiper/css'
import 'swiper/css/navigation'

export default function HabilidadesBlandas() {
  const { habilidadesBlandas } = data

  return (
    <section id="habilidades-blandas" className="section bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">HABILIDADES BLANDAS</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Cualidades que hacen la diferencia en cada proyecto
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-12 md:px-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.habilidades-button-next',
              prevEl: '.habilidades-button-prev',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="habilidades-swiper"
          >
            {habilidadesBlandas.map((habilidad) => (
              <SwiperSlide key={habilidad.id}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="h-full min-h-[300px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-900 dark:to-dark-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700 flex flex-col justify-center"
                >
                  <div className="text-5xl mb-4 text-center">
                    {habilidad.icono}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center break-words px-2">
                    {habilidad.titulo}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed break-words px-2">
                    {habilidad.descripcion}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="habilidades-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="habilidades-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}