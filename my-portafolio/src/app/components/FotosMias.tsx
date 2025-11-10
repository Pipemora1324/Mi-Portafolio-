'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import data from '@/data/data.json'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function FotosMias() {
  const { fotosMias } = data

  return (
    <section id="fotos-mias" className="section bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">FOTOS MÍAS</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Momentos que capturan mi esencia
          </p>
        </motion.div>

        <div className="relative px-16">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.fotos-button-next',
              prevEl: '.fotos-button-prev',
            }}
            loop={true}
            className="fotos-swiper"
          >
            {fotosMias.map((foto, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={foto.url}
                    alt={foto.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="fotos-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="fotos-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700 transition-all">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}