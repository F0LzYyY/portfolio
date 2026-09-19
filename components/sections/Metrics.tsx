'use client'

import { motion } from 'framer-motion'
import { metrics, clientLogos } from '@/lib/data'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const ease = [0.16, 1, 0.3, 1] as const

export default function Metrics() {
  return (
    <section id="metrics" className="section-padding bg-obsidian">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 md:mb-16 text-center"
        >
          <span className="tag block mb-4" style={{ color: '#C8922A' }}>Результаты</span>
          <h2 className="font-playfair text-display-m text-ivory">
            Цифры говорят{' '}
            <span className="italic" style={{ color: '#C8922A' }}>сами за себя</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-mono text-metric text-ivory mb-2 leading-none">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  duration={1400}
                />
              </div>
              <p className="font-inter font-medium text-ivory text-lg mb-1">
                {metric.label}
              </p>
              <p className="font-mono text-caption text-mist uppercase tracking-wider">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-10"
          style={{ background: 'rgba(245,240,232,0.06)' }}
        />

        {/* Client logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-caption text-mist uppercase tracking-widest text-center mb-8">
            Клиенты
          </p>
          <div className="marquee-container">
            <div className="marquee-track">
              {/* Duplicate for seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <span
                  key={i}
                  className="font-mono text-sm text-slate whitespace-nowrap"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {logo}
                  <span className="mx-4 opacity-30">·</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
