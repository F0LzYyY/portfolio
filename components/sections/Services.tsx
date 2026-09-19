'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

export default function Services() {
  return (
    <section id="services" className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 md:mb-16"
        >
          <span className="tag block mb-4">Услуги</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-playfair text-display-m text-carbon max-w-lg">
              Найдите свой{' '}
              <span className="italic text-slate">формат работы</span>
            </h2>
            <p className="text-sm text-slate max-w-xs md:text-right">
              Три ситуации — три решения. Ничего лишнего.
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className={`
                relative flex flex-col rounded-sm p-7 md:p-8
                ${service.highlighted
                  ? 'bg-obsidian'
                  : 'bg-bone border border-bone'}
              `}
            >
              {service.highlighted && (
                <div className="absolute top-4 right-4">
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm"
                    style={{ background: 'rgba(200,146,42,0.15)', color: '#C8922A' }}
                  >
                    Популярный
                  </span>
                </div>
              )}

              {/* Service name */}
              <p className="font-mono text-caption uppercase tracking-widest text-mist mb-3">
                {service.subtitle}
              </p>
              <h3 className={`font-playfair text-display-s mb-2 ${service.highlighted ? 'text-ivory' : 'text-carbon'}`}>
                {service.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-mono text-2xl font-medium"
                  style={{ color: '#C8922A' }}
                >
                  {service.price}
                </span>
              </div>

              {/* Duration */}
              <p className={`font-mono text-[11px] uppercase tracking-wider mb-5 ${service.highlighted ? 'text-mist' : 'text-slate'}`}>
                {service.duration}
              </p>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${service.highlighted ? 'text-slate' : 'text-slate'}`}>
                {service.description}
              </p>

              {/* Includes list */}
              <ul className="space-y-3 mb-8 flex-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                      style={{ background: '#C8922A' }}
                    />
                    <span className={`text-sm ${service.highlighted ? 'text-ivory/80' : 'text-carbon'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={service.highlighted ? 'btn-primary text-center' : 'btn-outline-dark text-center'}
                style={{ display: 'block', textAlign: 'center' }}
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate text-sm mt-10 md:mt-12"
        >
          Не уверены, что нужно?{' '}
          <a href="#contact" className="link-underline text-carbon font-medium">
            Бесплатная консультация 30 минут
          </a>
        </motion.p>
      </div>
    </section>
  )
}
