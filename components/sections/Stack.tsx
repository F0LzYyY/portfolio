'use client'

import { motion } from 'framer-motion'
import { stack } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

const columns = [
  { key: 'frontend' as const, title: 'Frontend', items: stack.frontend },
  { key: 'backend' as const, title: 'Backend & Infra', items: stack.backend },
  { key: 'business' as const, title: 'Business Tools', items: stack.business },
]

export default function Stack() {
  return (
    <section id="stack" className="section-padding bg-bone">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 md:mb-16"
        >
          <span className="tag block mb-4">Инструменты</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-playfair text-display-m text-carbon max-w-lg">
              Используемый стек
            </h2>
            <p className="text-sm text-slate font-inter max-w-xs md:text-right">
              Выбираю инструменты под задачу, а не под моду.
            </p>
          </div>
        </motion.div>

        {/* Stack columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-16">
          {columns.map((col, colIdx) => (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: colIdx * 0.12 }}
            >
              {/* Column title */}
              <p className="font-mono text-caption uppercase tracking-wider text-mist mb-6 pb-3 border-b border-bone">
                {col.title}
              </p>

              {/* Items */}
              <ul className="space-y-5">
                {col.items.map((item, itemIdx) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease, delay: colIdx * 0.1 + itemIdx * 0.05 }}
                    className="flex gap-3 group"
                  >
                    {/* Amber bullet */}
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                      style={{ background: '#C8922A' }}
                    />
                    <div>
                      <p className="font-inter font-medium text-carbon text-[15px] group-hover:text-amber transition-colors duration-200">
                        {item.name}
                      </p>
                      <p className="text-slate text-sm leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 md:mt-16 pt-8 border-t border-bone text-center"
        >
          <p className="font-mono text-caption uppercase tracking-widest text-slate">
            Работаю с клиентами на: Русском · English · Deutsch
          </p>
        </motion.div>
      </div>
    </section>
  )
}
