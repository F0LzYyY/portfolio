'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-obsidian relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(200,146,42,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="tag block mb-8"
          >
            Начнём?
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="font-playfair text-display-l text-ivory mb-6"
          >
            Готовы обсудить
            <br />
            <span style={{ color: '#C8922A' }}>ваш проект?</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="text-body-l text-slate mb-10 max-w-xl mx-auto"
          >
            Расскажите о задаче — я отвечу в течение 24 часов
            и предложу, с чего начать.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Написать в Telegram →
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-ghost"
            >
              Отправить письмо →
            </a>
          </motion.div>

          {/* Email as text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3"
          >
            <p className="font-mono text-sm text-mist">
              {siteConfig.email}
            </p>

            {/* Availability */}
            <div className="flex items-center justify-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#4ade80' }}
              />
              <p className="font-mono text-caption text-mist uppercase tracking-wider">
                {siteConfig.availability} · {siteConfig.responseTime}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
