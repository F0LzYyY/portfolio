'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { processSteps } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

export default function Process() {
  const lineRef = useRef<SVGLineElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="process" ref={sectionRef} className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 md:mb-20"
        >
          <span className="tag block mb-4">Как я работаю</span>
          <h2 className="font-playfair text-display-m text-carbon max-w-xl">
            Предсказуемо. Прозрачно.{' '}
            <span className="italic text-slate">Без сюрпризов.</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* SVG connecting line */}
          <div className="relative mb-8 px-6">
            <svg height="2" className="w-full" preserveAspectRatio="none">
              <motion.line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="#C8922A"
                strokeWidth="1"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                animate={inView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 1.8, ease, delay: 0.3 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number + dot */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                    style={{ borderColor: '#C8922A', background: '#F5F0E8' }}
                  />
                  <span className="font-mono text-3xl font-medium text-carbon leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-inter font-semibold text-carbon text-lg mb-2">
                  {step.title}
                </h3>

                <p className="font-mono text-[11px] uppercase tracking-wider text-mist mb-3">
                  {step.duration}
                </p>

                <p className="text-sm text-slate leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Deliverable badge */}
                <span
                  className="inline-block text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm"
                  style={{ background: 'rgba(200,146,42,0.1)', color: '#C8922A' }}
                >
                  ↳ {step.deliverable}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="flex gap-6 pb-10 relative"
            >
              {/* Left: number + vertical line */}
              <div className="flex flex-col items-center flex-shrink-0 w-8">
                <div
                  className="w-3 h-3 rounded-full border-2 z-10 bg-ivory"
                  style={{ borderColor: '#C8922A' }}
                />
                {i < processSteps.length - 1 && (
                  <div className="flex-1 w-px mt-2" style={{ background: 'rgba(200,146,42,0.2)' }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-2xl font-medium text-carbon">{step.number}</span>
                  <h3 className="font-inter font-semibold text-carbon text-lg">{step.title}</h3>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mist mb-2">
                  {step.duration}
                </p>
                <p className="text-sm text-slate leading-relaxed mb-3">{step.description}</p>
                <span
                  className="inline-block text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm"
                  style={{ background: 'rgba(200,146,42,0.1)', color: '#C8922A' }}
                >
                  ↳ {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge to next section */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-slate font-inter"
        >
          Хотите понять, какими инструментами это сделано?{' '}
          <a href="#stack" className="link-underline text-carbon font-medium">
            Смотрите стек ↓
          </a>
        </motion.p>
      </div>
    </section>
  )
}
