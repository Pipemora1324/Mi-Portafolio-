'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { useLanguage } from './LanguageProvider'

interface Foto {
  url: string
  alt: string
}

export default function FotosMias() {
  const { t } = useLanguage()
  const fotosMias: Foto[] = t.fotosMias || []

  return (
    <section id="fotos" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">GALERÍA PERSONAL</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Un vistazo a mi vida más allá del código
          </p>
        </motion.div>

        <div className="relative px-12">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation]}
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
            navigation={{
              nextEl: '.swiper-button-next-fotos',
              prevEl: '.swiper-button-prev-fotos',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="py-12"
          >
            {fotosMias.map((foto: Foto, index: number) => (
              <SwiperSlide key={index} className="!w-[300px] md:!w-[400px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={foto.url}
                    alt={foto.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas AFUERA */}
          <div className="swiper-button-prev-fotos absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg">
            ←
          </div>
          <div className="swiper-button-next-fotos absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer text-white shadow-lg">
            →
          </div>
        </div>
      </div>
    </section>
  )
}
