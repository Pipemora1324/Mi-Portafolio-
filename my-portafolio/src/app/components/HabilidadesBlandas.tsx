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

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
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
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-700 dark:to-dark-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-500"
              >
                <div className="text-5xl mb-4 text-center">{habilidad.icono}</div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
                  {habilidad.titulo}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-4">
                  {habilidad.descripcion}
                </p>

                <div className="relative w-full h-2 bg-gray-200 dark:bg-dark-500 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${habilidad.nivel}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  ></motion.div>
                </div>
                
                <p className="text-center text-gray-700 dark:text-gray-300 font-semibold mt-2">
                  {habilidad.nivel}%
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
