'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 md:mb-16"
        >
          <span className="tag block mb-4">Что говорят клиенты</span>
          <h2 className="font-playfair text-display-m text-carbon max-w-xl">
            Слова тех,{' '}
            <span className="italic text-slate">кто уже вырос</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="amber-line flex flex-col justify-between p-0"
            >
              {/* Quote */}
              <blockquote className="font-playfair italic text-xl text-carbon leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: '#E8E2D6' }}
                >
                  <span className="font-playfair font-medium text-slate text-sm">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-carbon text-sm">
                    {item.name}
                  </p>
                  <p className="font-inter text-slate text-sm">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-mono text-caption text-mist mt-12 md:mt-16 uppercase tracking-wider"
        >
          28+ отзывов в Яндексе и Google
        </motion.p>
      </div>
    </section>
  )
}
