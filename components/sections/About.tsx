'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { about, siteConfig } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

export default function About() {
  const [photoHovered, setPhotoHovered] = useState(false)

  return (
    <section id="about" className="section-padding bg-bone">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5"
          >
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '3/4' }}
              onMouseEnter={() => setPhotoHovered(true)}
              onMouseLeave={() => setPhotoHovered(false)}
            >
              {/* Photo placeholder */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #D4C5B0 0%, #C4B49F 100%)' }}
              >
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full mb-4 mx-auto flex items-center justify-center"
                    style={{ background: 'rgba(10,10,15,0.1)' }}
                  >
                    <span className="font-playfair text-2xl font-medium" style={{ color: 'rgba(10,10,15,0.4)' }}>
                      ИШ
                    </span>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wider" style={{ color: 'rgba(10,10,15,0.3)' }}>
                    Ваше фото
                  </p>
                </div>
              </div>

              {/* Amber hover tint */}
              <motion.div
                className="absolute inset-0"
                style={{ background: 'rgba(200,146,42,0.15)', mixBlendMode: 'multiply' }}
                animate={{ opacity: photoHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Caption under photo */}
            <p className="font-mono text-caption text-mist mt-4 uppercase tracking-wider">
              {siteConfig.location}
            </p>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="tag block mb-6">Об авторе</span>

            <h2 className="font-playfair text-display-m text-carbon mb-6">
              {about.name}
            </h2>

            {/* Intro */}
            <p className="text-body-l font-medium text-carbon mb-6 leading-relaxed">
              {about.intro}
            </p>

            {/* Body paragraphs */}
            {about.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-body-m text-slate mb-5 leading-relaxed">
                {para}
              </p>
            ))}



          </motion.div>
        </div>
      </div>
    </section>
  )
}
