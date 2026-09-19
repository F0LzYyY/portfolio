'use client'

import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ease = [0.16, 1, 0.3, 1] as const

// ─────────────────────────────────────────────────────────────────────────────
// 01 — ЧИСТОПРО · INDUSTRIAL BOLD
// Философия: агрессивная точность, тёмный металл, красный акцент
// Типографика: Inter Bold ALL CAPS, огромные цифры-декор, минимум засечек
// ─────────────────────────────────────────────────────────────────────────────
function ChistoproSite() {
  const services = [
    { n: '01', title: 'Химчистка', desc: 'Салон и кузов. Любая сложность, полное восстановление.', price: 'от 4 000 ₽' },
    { n: '02', title: 'Полировка кузова', desc: 'Царапины, потёртости, голограммы — устраняем всё.', price: 'от 8 000 ₽' },
    { n: '03', title: 'Нанокерамика', desc: 'Защита на 2–5 лет. Гидрофоб, UV, мелкие царапины.', price: 'от 18 000 ₽' },
    { n: '04', title: 'Детейлинг салона', desc: 'Глубокая чистка всех поверхностей + озонирование.', price: 'от 6 000 ₽' },
    { n: '05', title: 'Антидождь', desc: 'Гидрофобное покрытие стёкол. Вода скатывается от 40 км/ч.', price: 'от 1 500 ₽' },
    { n: '06', title: 'Локальный ремонт', desc: 'Вмятины без покраски, полировка царапин до грунта.', price: 'от 2 000 ₽' },
  ]

  return (
    <div style={{ background: '#0C0D10', minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(12,13,16,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(217,79,43,0.2)' }}>
        <span className="font-mono text-sm font-medium tracking-[0.2em] uppercase" style={{ color: '#D94F2B' }}>ЧистоПро</span>
        <div className="hidden md:flex gap-8">
          {['Услуги','Галерея','О нас','Контакты'].map((l,i) => (
            <a key={l} href={`#${['services','gallery','features','contact'][i]}`}
              className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100"
              style={{ color: 'rgba(238,233,226,0.4)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-colors hover:bg-red-600 hover:border-red-600"
            style={{ color: '#D94F2B', borderColor: '#D94F2B' }}>Записаться</a>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-30 hover:opacity-60 transition-opacity" style={{ color: '#EEE9E2' }}>← Портфолио</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 pt-32 px-6 md:px-16 overflow-hidden">
        {/* Huge BG number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          style={{ fontSize: '40vw', fontFamily: 'var(--font-inter)', fontWeight: 900, color: 'rgba(217,79,43,0.04)', lineHeight: 1 }}>01</div>
        {/* Red vertical stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: '#D94F2B' }} />

        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#D94F2B' }}>Детейлинг-центр · Иннополис</p>
          <h1 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(48px,8vw,120px)', lineHeight: 0.92, letterSpacing: '-0.04em', color: '#EEE9E2', textTransform: 'uppercase' }}>
            Ваш<br />
            <span style={{ color: '#D94F2B' }}>автомобиль</span><br />
            заслуживает<br />большего.
          </h1>
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="#contact" className="font-mono text-sm uppercase tracking-widest px-8 py-4 transition-colors"
              style={{ background: '#D94F2B', color: '#EEE9E2' }}>Записаться онлайн →</a>
            <a href="#services" className="font-mono text-sm uppercase tracking-widest px-8 py-4 border transition-colors hover:border-white"
              style={{ color: 'rgba(238,233,226,0.5)', borderColor: 'rgba(238,233,226,0.2)' }}>Услуги и цены</a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: '#0E0F13', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <div className="flex items-end justify-between mb-16 border-b pb-8" style={{ borderColor: 'rgba(217,79,43,0.2)' }}>
            <h2 style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', color: '#EEE9E2', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Услуги</h2>
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(238,233,226,0.3)' }}>06 позиций</p>
          </div>
          <div>
            {services.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                className="flex items-start gap-8 py-6 border-b group cursor-default"
                style={{ borderColor: 'rgba(238,233,226,0.08)' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', color: '#D94F2B', fontSize: '13px', minWidth: '28px', paddingTop: '3px' }}>{s.n}</span>
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '20px', color: '#EEE9E2', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '4px' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(238,233,226,0.45)', fontSize: '14px' }}>{s.desc}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-dm-mono)', color: '#D94F2B', fontSize: '14px', whiteSpace: 'nowrap', paddingTop: '3px' }}>{s.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ background: '#0C0D10', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', color: '#EEE9E2', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>Работы</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group relative overflow-hidden"
                style={{ aspectRatio: i === 0 ? '16/9' : '4/3', gridColumn: i === 0 ? 'span 2' : 'span 1', background: '#141519', border: '1px solid rgba(217,79,43,0.15)' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(217,79,43,0.15)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontFamily: 'var(--font-dm-mono)', color: 'rgba(217,79,43,0.3)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Фото {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#D94F2B', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 'clamp(40px,5vw,72px)', color: '#0C0D10', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
              Запись<br />онлайн.
            </h2>
            <div className="space-y-4">
              {[['Адрес','Иннополис, ул. Университетская, 7'],['Телефон','+7 (999) 000-00-00'],['Режим','Пн–Вс: 9:00–21:00']].map(([l,v]) => (
                <div key={l}>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(12,13,16,0.5)', marginBottom: '2px' }}>{l}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#0C0D10' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-3.5 font-inter text-sm outline-none"
                style={{ background: 'rgba(12,13,16,0.15)', border: '1px solid rgba(12,13,16,0.2)', color: '#0C0D10' }} />
            ))}
            <textarea placeholder="Комментарий" rows={3} className="w-full px-4 py-3.5 font-inter text-sm outline-none resize-none"
              style={{ background: 'rgba(12,13,16,0.15)', border: '1px solid rgba(12,13,16,0.2)', color: '#0C0D10' }} />
            <button className="w-full py-4 font-inter font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ background: '#0C0D10', color: '#D94F2B' }}>Отправить заявку</button>
          </form>
        </div>
      </section>

      <footer className="py-5 px-6 md:px-16 flex justify-between items-center" style={{ background: '#0A0B0E', borderTop: '1px solid rgba(238,233,226,0.06)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(238,233,226,0.3)' }}>© 2024 ЧистоПро</span>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(238,233,226,0.3)' }} className="hover:opacity-80 transition-opacity">Сайт разработан Ильёй Шкариным →</Link>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 02 — БОТАНИКА · EDITORIAL ORGANIC
// Философия: журнальная эстетика, воздух, Playfair как главный инструмент
// Типографика: Playfair Display italic dominant, Inter light для тела
// ─────────────────────────────────────────────────────────────────────────────
function BotanikaSite() {
  const services = [
    { title: 'Сезонные букеты', desc: 'Из того, что в расцвете прямо сейчас.', price: 'от 1 500 ₽', tag: 'Хит' },
    { title: 'Монобукеты', desc: 'Строгая красота одного цветка.', price: 'от 2 000 ₽', tag: null },
    { title: 'Коробки и шляпницы', desc: 'Цветочные композиции в стильной упаковке.', price: 'от 3 500 ₽', tag: 'Подарок' },
    { title: 'Свадебная флористика', desc: 'Букет, зал, бутоньерки. Выезд на консультацию.', price: 'по запросу', tag: null },
    { title: 'Подписка на цветы', desc: 'Еженедельно. Скидка 15% по подписке.', price: 'от 4 000 ₽/мес', tag: 'Новинка' },
    { title: 'Срочная доставка', desc: 'Соберём и доставим за 2 часа.', price: '+ 300 ₽', tag: null },
  ]

  return (
    <div style={{ background: '#F3F0EB', minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(243,240,235,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(11,20,16,0.08)' }}>
        <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontSize: '22px', color: '#0B1410', letterSpacing: '-0.02em' }}>Ботаника</span>
        <div className="hidden md:flex gap-8">
          {['Каталог','Галерея','Доставка','Контакты'].map((l,i) => (
            <a key={l} href={`#${['services','gallery','features','contact'][i]}`}
              className="font-inter text-sm transition-opacity hover:opacity-100"
              style={{ color: 'rgba(11,20,16,0.45)', letterSpacing: '0.01em' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="font-inter text-sm px-5 py-2 rounded-full transition-colors hover:bg-green-800"
            style={{ background: '#0B1410', color: '#EBE8E2' }}>Заказать</a>
          <Link href="/" className="font-inter text-xs opacity-30 hover:opacity-60 transition-opacity" style={{ color: '#0B1410' }}>← Портфолио</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20" style={{ background: '#0B1410' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="lg:col-span-6">
            <p className="font-inter text-xs uppercase tracking-[0.25em] mb-10" style={{ color: 'rgba(125,191,110,0.7)' }}>Цветочный бутик · Иннополис</p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(52px,7vw,100px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#EBE8E2' }}>
              Живые<br />эмоции,<br /><span style={{ color: '#7DBF6E' }}>живые цветы.</span>
            </h1>
            <p className="mt-8 mb-10 max-w-md" style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '18px', color: 'rgba(235,232,226,0.55)', lineHeight: 1.7 }}>
              Авторские букеты и свадебная флористика. Доставка в день заказа по Иннополису.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="font-inter font-medium text-sm px-7 py-3.5 rounded-full"
                style={{ background: '#7DBF6E', color: '#0B1410' }}>Выбрать букет</a>
              <a href="#contact" className="font-inter font-medium text-sm px-7 py-3.5 rounded-full border"
                style={{ borderColor: 'rgba(235,232,226,0.2)', color: 'rgba(235,232,226,0.7)' }}>Доставка сегодня</a>
            </div>
          </motion.div>

          {/* Botanical SVG */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.3 }}
            className="lg:col-span-5 lg:col-start-8 h-96 lg:h-[560px] hidden md:flex items-center justify-center">
            <motion.svg viewBox="0 0 400 400" fill="none" className="w-full h-full max-w-md"
              animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
              <ellipse cx="200" cy="120" rx="50" ry="100" stroke="#7DBF6E" strokeWidth="1" strokeOpacity="0.6" fill="#7DBF6E" fillOpacity="0.04" transform="rotate(-30 200 120)" />
              <ellipse cx="260" cy="190" rx="50" ry="100" stroke="#7DBF6E" strokeWidth="1" strokeOpacity="0.4" fill="none" transform="rotate(30 260 190)" />
              <ellipse cx="140" cy="200" rx="50" ry="100" stroke="#7DBF6E" strokeWidth="1" strokeOpacity="0.4" fill="none" transform="rotate(-90 140 200)" />
              <ellipse cx="200" cy="290" rx="50" ry="100" stroke="#7DBF6E" strokeWidth="0.8" strokeOpacity="0.3" fill="none" transform="rotate(160 200 290)" />
              <path d="M200 80 Q210 190 200 360" stroke="#7DBF6E" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <circle cx="200" cy="200" r="18" stroke="#7DBF6E" strokeWidth="1.5" strokeOpacity="0.5" fill="#7DBF6E" fillOpacity="0.08" />
              <circle cx="200" cy="200" r="5" fill="#7DBF6E" fillOpacity="0.8" />
              {[0,60,120,180,240,300].map((deg,i) => (
                <circle key={i} cx={200+70*Math.cos(deg*Math.PI/180)} cy={200+70*Math.sin(deg*Math.PI/180)} r="3" fill="#7DBF6E" fillOpacity="0.5" />
              ))}
              <circle cx="200" cy="200" r="130" stroke="#7DBF6E" strokeOpacity="0.07" strokeWidth="1" fill="none" strokeDasharray="4 12" />
            </motion.svg>
          </motion.div>
        </div>
      </section>

      {/* SERVICES — editorial magazine grid */}
      <section id="services" style={{ background: '#F3F0EB', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <div className="flex items-baseline justify-between mb-14">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,60px)', color: '#0B1410', letterSpacing: '-0.02em' }}>
              Что мы делаем
            </h2>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: '#7DBF6E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>06 услуг</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(11,20,16,0.1)' }}>
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-8 flex flex-col justify-between" style={{ background: '#F3F0EB', minHeight: '220px' }}>
                <div>
                  {s.tag && (
                    <span className="inline-block px-3 py-1 rounded-full mb-4 font-inter text-xs"
                      style={{ background: '#7DBF6E', color: '#0B1410' }}>{s.tag}</span>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontSize: '22px', color: '#0B1410', marginBottom: '8px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '14px', color: 'rgba(11,20,16,0.55)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#7DBF6E', marginTop: '16px' }}>{s.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ background: '#0B1410', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,60px)', color: '#EBE8E2', letterSpacing: '-0.02em' }}>Наши работы</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-sm overflow-hidden flex items-center justify-center"
                style={{ aspectRatio: i === 2 ? '3/4' : '4/3', background: ['#111A12','#0E1A10','#162018','#0B1410','#111A12','#0E1A10'][i], border: '1px solid rgba(125,191,110,0.1)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '12px', color: 'rgba(125,191,110,0.3)' }}>Фото {i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#F3F0EB', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(40px,5vw,72px)', color: '#0B1410', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '32px' }}>
              Закажите<br />свой букет.
            </h2>
            {[['Адрес','Иннополис, ул. Спортивная, 14'],['Телефон','+7 (999) 000-00-00'],['Часы','Пн–Вс: 8:00–22:00']].map(([l,v]) => (
              <div key={l} className="mb-5">
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(11,20,16,0.4)', marginBottom: '3px' }}>{l}</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#0B1410' }}>{v}</p>
              </div>
            ))}
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.1 }} className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон или Telegram'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none rounded-sm"
                style={{ background: '#fff', border: '1px solid rgba(11,20,16,0.12)', color: '#0B1410' }} />
            ))}
            <textarea placeholder="Пожелания (повод, цвет, бюджет)" rows={3} className="w-full px-4 py-4 font-inter text-sm outline-none resize-none rounded-sm"
              style={{ background: '#fff', border: '1px solid rgba(11,20,16,0.12)', color: '#0B1410' }} />
            <button className="w-full py-4 font-inter font-medium text-sm rounded-full transition-opacity hover:opacity-85"
              style={{ background: '#0B1410', color: '#EBE8E2' }}>Заказать букет</button>
          </motion.form>
        </div>
      </section>

      <footer className="py-5" style={{ background: '#0B1410', borderTop: '1px solid rgba(235,232,226,0.06)' }}>
        <div className="container-wide flex justify-between items-center">
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(235,232,226,0.3)' }}>© 2024 Ботаника</span>
          <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(235,232,226,0.3)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
        </div>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 03 — КЛИНИКА УЛЫБКИ · CLEAN CLINICAL
// Философия: медицинская чистота, доверие через структуру, светлый и открытый
// Типографика: Inter только, геометрический и чёткий, таблично
// ─────────────────────────────────────────────────────────────────────────────
function UlibkaSite() {
  const services = [
    { title: 'Лечение кариеса', price: 'от 2 500 ₽', duration: '60 мин' },
    { title: 'Профессиональная чистка', price: 'от 3 500 ₽', duration: '90 мин' },
    { title: 'Отбеливание Zoom 4', price: 'от 15 000 ₽', duration: '120 мин' },
    { title: 'Имплантация', price: 'от 45 000 ₽', duration: 'Несколько визитов' },
    { title: 'Ортодонтия / элайнеры', price: 'от 60 000 ₽', duration: 'Курс лечения' },
    { title: 'Виниры и люминиры', price: 'от 8 000 ₽', duration: '2 визита' },
  ]

  return (
    <div style={{ background: '#EFF4F7', minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(239,244,247,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(9,15,26,0.08)' }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#3FAFC8' }}>
            <span className="font-inter font-bold text-xs" style={{ color: '#fff' }}>К</span>
          </div>
          <span className="font-inter font-semibold text-base" style={{ color: '#090F1A' }}>Клиника Улыбки</span>
        </div>
        <div className="hidden md:flex gap-8">
          {['Услуги','Врачи','Цены','Контакты'].map((l,i) => (
            <a key={l} href={`#${['services','features','services','contact'][i]}`}
              className="font-inter text-sm transition-opacity hover:opacity-100"
              style={{ color: 'rgba(9,15,26,0.45)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="font-inter font-medium text-sm px-5 py-2.5 rounded-sm transition-opacity hover:opacity-85"
            style={{ background: '#3FAFC8', color: '#fff' }}>Записаться на приём</a>
          <Link href="/" className="font-inter text-xs opacity-30 hover:opacity-60 transition-opacity" style={{ color: '#090F1A' }}>← Портфолио</Link>
        </div>
      </nav>

      {/* HERO — centered, clean */}
      <section className="min-h-screen flex items-center pt-20" style={{ background: '#090F1A' }}>
        <div className="container-wide text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10" style={{ background: 'rgba(63,175,200,0.12)', border: '1px solid rgba(63,175,200,0.25)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-inter text-xs tracking-wider" style={{ color: '#3FAFC8' }}>Ведётся запись на этой неделе</span>
            </div>
            <h1 className="max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(44px,6vw,88px)', color: '#E8EFF4', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
              Стоматология,<br />которая не пугает.
            </h1>
            <p className="max-w-xl mx-auto mt-6 mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '18px', color: 'rgba(232,239,244,0.5)', lineHeight: 1.65 }}>
              Безболезненное лечение, имплантация и эстетика. Онлайн-запись к удобному врачу за 30 секунд.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <a href="#contact" className="font-inter font-semibold text-sm px-8 py-4 rounded-sm transition-opacity hover:opacity-85"
                style={{ background: '#3FAFC8', color: '#fff' }}>Записаться на приём</a>
              <a href="#services" className="font-inter font-medium text-sm px-8 py-4 rounded-sm border transition-colors"
                style={{ borderColor: 'rgba(232,239,244,0.15)', color: 'rgba(232,239,244,0.6)' }}>Смотреть цены</a>
            </div>
          </motion.div>
          {/* Arc decoration */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.4 }}
            className="mt-16 flex justify-center">
            <svg width="320" height="80" viewBox="0 0 320 80" fill="none">
              <path d="M20 60 Q160 -10 300 60" stroke="#3FAFC8" strokeWidth="1.5" strokeOpacity="0.6" fill="none" strokeLinecap="round"/>
              <path d="M40 65 Q160 10 280 65" stroke="#3FAFC8" strokeWidth="0.8" strokeOpacity="0.25" fill="none" strokeLinecap="round"/>
              <circle cx="160" cy="22" r="4" fill="#3FAFC8" fillOpacity="0.8"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* SERVICES — clean table */}
      <section id="services" style={{ background: '#EFF4F7', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-2" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#090F1A', letterSpacing: '-0.03em' }}>Услуги и цены</h2>
          <p className="mb-12" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'rgba(9,15,26,0.45)' }}>Все цены — окончательные. Смета до начала лечения.</p>
          <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(9,15,26,0.1)' }}>
            <div className="grid grid-cols-3 px-6 py-3" style={{ background: 'rgba(9,15,26,0.04)', borderBottom: '1px solid rgba(9,15,26,0.08)' }}>
              {['Услуга','Длительность','Стоимость'].map(h => (
                <span key={h} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(9,15,26,0.4)' }}>{h}</span>
              ))}
            </div>
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-3 px-6 py-4 items-center"
                style={{ borderBottom: i < services.length-1 ? '1px solid rgba(9,15,26,0.06)' : 'none', background: i%2===0 ? '#fff' : '#EFF4F7' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '15px', color: '#090F1A' }}>{s.title}</span>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(9,15,26,0.4)' }}>{s.duration}</span>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#3FAFC8', fontWeight: 500 }}>{s.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="features" style={{ background: '#090F1A', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-12" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#E8EFF4', letterSpacing: '-0.03em' }}>Наши врачи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Врач-терапевт', exp: '10 лет опыта', spec: 'Терапия, эстетика, реставрация' },
              { name: 'Хирург-имплантолог', exp: '14 лет опыта', spec: 'Имплантация, костная пластика, синуслифтинг' },
              { name: 'Ортодонт', exp: '8 лет опыта', spec: 'Брекеты, элайнеры, ретейнеры' },
              { name: 'Пародонтолог', exp: '12 лет опыта', spec: 'Лечение дёсен, профессиональная чистка' },
            ].map((d, i) => (
              <motion.div key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.08 }}
                className="flex gap-5 p-6 rounded-sm" style={{ background: '#0F1828', border: '1px solid rgba(63,175,200,0.1)' }}>
                <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-inter font-semibold"
                  style={{ background: 'rgba(63,175,200,0.12)', color: '#3FAFC8' }}>{d.name[0]}</div>
                <div>
                  <p className="font-inter font-semibold text-base mb-1" style={{ color: '#E8EFF4' }}>{d.name}</p>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: '#3FAFC8', marginBottom: '6px' }}>{d.exp}</p>
                  <p className="font-inter text-sm" style={{ color: 'rgba(232,239,244,0.45)' }}>{d.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#EFF4F7', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 'clamp(36px,4vw,60px)', color: '#090F1A', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Запись на приём
            </h2>
            {[['Адрес','Иннополис, ул. Технологическая, 3'],['Телефон','+7 (999) 000-00-00'],['Режим','Пн–Пт: 9–20, Сб: 10–18']].map(([l,v]) => (
              <div key={l} className="flex gap-4 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(9,15,26,0.08)' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3FAFC8', minWidth: '70px', paddingTop: '1px' }}>{l}</span>
                <span className="font-inter text-sm" style={{ color: '#090F1A' }}>{v}</span>
              </div>
            ))}
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none rounded-sm"
                style={{ background: '#fff', border: '1px solid rgba(9,15,26,0.1)', color: '#090F1A' }} />
            ))}
            <select className="w-full px-4 py-4 font-inter text-sm outline-none rounded-sm appearance-none"
              style={{ background: '#fff', border: '1px solid rgba(9,15,26,0.1)', color: 'rgba(9,15,26,0.5)' }}>
              <option value="">Выберите услугу</option>
              {services.map(s => <option key={s.title}>{s.title}</option>)}
            </select>
            <button className="w-full py-4 font-inter font-semibold text-sm rounded-sm transition-opacity hover:opacity-85"
              style={{ background: '#3FAFC8', color: '#fff' }}>Записаться онлайн</button>
          </form>
        </div>
      </section>

      <footer className="py-5" style={{ background: '#090F1A', borderTop: '1px solid rgba(232,239,244,0.06)' }}>
        <div className="container-wide flex justify-between items-center">
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(232,239,244,0.3)' }}>© 2024 Клиника Улыбки</span>
          <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(232,239,244,0.3)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
        </div>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 04 — СВОЯ ВЫПЕЧКА · WARM ARTISAN
// Философия: ремесленная теплота, уютный артизан, натуральность
// Типографика: Playfair italic + Inter Light — мягко и по-домашнему
// ─────────────────────────────────────────────────────────────────────────────
function VypechkaSite() {
  const menu = [
    { title: 'Хлеб на закваске', desc: 'Пшеничный, ржаной, цельнозерновой. 24 часа ферментации.', price: 'от 180 ₽', emoji: '🍞' },
    { title: 'Круассаны', desc: 'Из французского слоёного теста. Классика и с начинкой.', price: 'от 120 ₽', emoji: '🥐' },
    { title: 'Торты на заказ', desc: 'Медовик, Наполеон, бенто-торты. Заказ за 2 дня.', price: 'от 1 800 ₽', emoji: '🎂' },
    { title: 'Пирожные', desc: 'Эклеры, макарун, тарталетки. Ежедневно свежие.', price: 'от 90 ₽', emoji: '🍮' },
    { title: 'Пироги', desc: 'С яблоками, вишней, капустой, мясом. По рецептам бабушки.', price: 'от 350 ₽', emoji: '🥧' },
    { title: 'Кофе', desc: 'Эспрессо, капучино, флэт уайт. Зерно местной обжарки.', price: 'от 100 ₽', emoji: '☕' },
  ]

  return (
    <div style={{ background: '#F7F1E8', minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(247,241,232,0.94)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(23,16,10,0.08)' }}>
        <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontStyle: 'italic', fontSize: '22px', color: '#17100A', letterSpacing: '-0.01em' }}>Своя выпечка</span>
        <div className="hidden md:flex gap-8">
          {['Меню','Галерея','О нас','Контакты'].map((l,i) => (
            <a key={l} href={`#${['services','gallery','features','contact'][i]}`}
              className="font-inter font-light text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(23,16,10,0.45)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#services" className="font-inter font-medium text-sm px-5 py-2 rounded-full transition-colors hover:opacity-85"
            style={{ background: '#D4943A', color: '#F7F1E8' }}>Смотреть меню</a>
          <Link href="/" className="font-inter text-xs opacity-30 hover:opacity-60 transition-opacity" style={{ color: '#17100A' }}>← Портфолио</Link>
        </div>
      </nav>

      {/* HERO — warm, centered */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 text-center px-6" style={{ background: '#17100A' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8" style={{ color: 'rgba(212,148,58,0.7)' }}>Пекарня · Иннополис</p>
          {/* Warm circle decoration */}
          <div className="relative inline-block mb-8">
            <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-48 h-48 rounded-full flex items-center justify-center mx-auto"
              style={{ background: 'radial-gradient(circle, rgba(212,148,58,0.15) 0%, transparent 70%)', border: '1px solid rgba(212,148,58,0.2)' }}>
              <span style={{ fontSize: '72px' }}>🍞</span>
            </motion.div>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(52px,7vw,96px)', color: '#F0E8DC', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
            Из печи —<br /><span style={{ color: '#D4943A' }}>прямо к вам.</span>
          </h1>
          <p className="max-w-md mx-auto mt-6 mb-10" style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '17px', color: 'rgba(240,232,220,0.5)', lineHeight: 1.7 }}>
            Свежая выпечка каждый день. Смотрите сегодняшнее меню и делайте предзаказ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#services" className="font-inter font-medium text-sm px-7 py-3.5 rounded-full"
              style={{ background: '#D4943A', color: '#17100A' }}>Смотреть меню</a>
            <a href="#contact" className="font-inter font-light text-sm px-7 py-3.5 rounded-full border"
              style={{ borderColor: 'rgba(240,232,220,0.2)', color: 'rgba(240,232,220,0.6)' }}>Предзаказ на завтра</a>
          </div>
        </motion.div>
      </section>

      {/* MENU */}
      <section id="services" style={{ background: '#F7F1E8', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,56px)', color: '#17100A', letterSpacing: '-0.02em' }}>Сегодняшнее меню</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '14px', color: 'rgba(23,16,10,0.45)', marginTop: '8px' }}>Обновляется каждое утро в 7:00</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {menu.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i*0.07 }}
                className="p-6 rounded-xl flex flex-col" style={{ background: '#fff', boxShadow: '0 2px 20px rgba(23,16,10,0.06)', border: '1px solid rgba(23,16,10,0.06)' }}>
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, fontSize: '20px', color: '#17100A', marginBottom: '6px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '14px', color: 'rgba(23,16,10,0.5)', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid rgba(23,16,10,0.06)' }}>
                  <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#D4943A' }}>{item.price}</span>
                  <button className="font-inter text-sm px-4 py-1.5 rounded-full transition-colors hover:opacity-85"
                    style={{ background: 'rgba(212,148,58,0.1)', color: '#D4943A' }}>Заказать</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ background: '#211508', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,56px)', color: '#F0E8DC', letterSpacing: '-0.02em' }}>Свежая выпечка</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden flex items-center justify-center"
                style={{ aspectRatio: i===0?'16/9':'4/3', gridColumn: i===0?'span 2':'span 1', background: ['#251808','#1E1208','#2E200A','#221408','#251808','#2E200A'][i], border: '1px solid rgba(212,148,58,0.12)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 300, color: 'rgba(212,148,58,0.3)' }}>Фото {i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#F7F1E8', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(40px,5vw,68px)', color: '#17100A', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '32px' }}>
              Сделаем<br />предзаказ?
            </h2>
            <div className="space-y-5">
              {[['Адрес','Иннополис, ул. Центральная, 2'],['Телефон','+7 (999) 000-00-00'],['Часы','Пн–Вс: 7:00–21:00'],['Предзаказ','Принимаем до 20:00']].map(([l,v]) => (
                <div key={l} className="flex gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider mt-0.5 flex-shrink-0" style={{ color: '#D4943A', minWidth: '80px' }}>{l}</span>
                  <span className="font-inter text-sm" style={{ color: '#17100A', fontWeight: 300 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 font-inter text-sm outline-none rounded-xl"
                style={{ background: '#fff', border: '1px solid rgba(23,16,10,0.1)', color: '#17100A', fontWeight: 300 }} />
            ))}
            <textarea placeholder="Что хотите заказать?" rows={3} className="w-full px-4 py-4 font-inter text-sm outline-none resize-none rounded-xl"
              style={{ background: '#fff', border: '1px solid rgba(23,16,10,0.1)', color: '#17100A', fontWeight: 300 }} />
            <button className="w-full py-4 font-inter font-medium text-sm rounded-full transition-opacity hover:opacity-85"
              style={{ background: '#D4943A', color: '#17100A' }}>Оформить предзаказ</button>
          </form>
        </div>
      </section>

      <footer className="py-5" style={{ background: '#17100A', borderTop: '1px solid rgba(240,232,220,0.06)' }}>
        <div className="container-wide flex justify-between items-center">
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,232,220,0.3)' }}>© 2024 Своя выпечка</span>
          <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,232,220,0.3)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
        </div>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 05 — ФОРМА · SHARP EDITORIAL
// Философия: брутальная минималистичность, editorial proportions, мужской код
// Типографика: Огромный Playfair + DM Mono для деталей, почти ничего лишнего
// ─────────────────────────────────────────────────────────────────────────────
function FormaSite() {
  const services = [
    { title: 'Мужская стрижка', price: 'от 900 ₽' },
    { title: 'Стрижка + борода', price: 'от 1 400 ₽' },
    { title: 'Оформление бороды', price: 'от 700 ₽' },
    { title: 'Классическое бритьё', price: 'от 1 200 ₽' },
    { title: 'Тонирование', price: 'от 600 ₽' },
    { title: 'Детская стрижка', price: 'от 700 ₽' },
  ]
  const masters = [
    { name: 'Артём', spec: 'Фейды, текстура', years: '6 лет' },
    { name: 'Максим', spec: 'Классика, борода', years: '5 лет' },
    { name: 'Денис', spec: 'Дети, сложные случаи', years: '4 года' },
  ]

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16"
        style={{ background: 'rgba(10,10,15,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(240,236,230,0.08)' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontWeight: 500, fontSize: '16px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0ECE6' }}>Форма</span>
        <div className="hidden md:flex gap-8">
          {['Услуги','Мастера','Галерея','Контакты'].map((l,i) => (
            <a key={l} href={`#${['services','masters','gallery','contact'][i]}`}
              className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100"
              style={{ color: 'rgba(240,236,230,0.3)' }}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-5 py-2.5 border-b-2 transition-colors"
            style={{ color: '#C8922A', borderColor: '#C8922A' }}>Записаться</a>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-25 hover:opacity-60" style={{ color: '#F0ECE6' }}>← Портфолио</Link>
        </div>
      </nav>

      {/* HERO — almost pure text, brutalist */}
      <section className="min-h-screen flex items-center px-6 md:px-16 pt-16 relative overflow-hidden">
        {/* Gold vertical line */}
        <div className="absolute left-16 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, #C8922A, transparent)' }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease }} className="pl-0 md:pl-24 max-w-5xl">
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '48px' }}>
            Барбершоп · Иннополис · 10:00–21:00
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(64px,11vw,160px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: '#F0ECE6' }}>
            Форма<br />
            <span style={{ fontStyle: 'italic', color: '#C8922A' }}>имеет</span><br />
            значение.
          </h1>
          <div className="flex items-center gap-8 mt-16">
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-8 py-4 border-b-2 transition-colors hover:border-white"
              style={{ color: '#F0ECE6', borderColor: '#C8922A' }}>Записаться к мастеру</a>
            <a href="#services" className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100"
              style={{ color: 'rgba(240,236,230,0.35)' }}>Смотреть услуги →</a>
          </div>
        </motion.div>

        {/* Large decorative number */}
        <div className="absolute right-0 bottom-0 select-none pointer-events-none"
          style={{ fontFamily: 'var(--font-playfair)', fontSize: '35vw', color: 'rgba(200,146,42,0.04)', lineHeight: 1, fontStyle: 'italic' }}>F</div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: '#0A0A0F', paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(240,236,230,0.08)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8922A', marginBottom: '16px' }}>Услуги</p>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(36px,4vw,52px)', color: '#F0ECE6', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Чётко.<br />Без лишнего.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {services.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i*0.06 }}
                  className="flex justify-between items-center py-5"
                  style={{ borderBottom: '1px solid rgba(240,236,230,0.07)' }}>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '17px', color: '#F0ECE6' }}>{s.title}</span>
                  <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#C8922A' }}>{s.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" style={{ background: '#111115', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <p className="mb-12" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8922A' }}>Мастера</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(240,236,230,0.06)' }}>
            {masters.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }}
                className="p-8" style={{ background: '#111115' }}>
                <div className="w-16 h-16 rounded-sm mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(200,146,42,0.08)', border: '1px solid rgba(200,146,42,0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontStyle: 'italic', color: '#C8922A', fontWeight: 700 }}>{m.name[0]}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '28px', color: '#F0ECE6', letterSpacing: '-0.02em', marginBottom: '8px' }}>{m.name}</h3>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C8922A', marginBottom: '12px' }}>{m.years} опыта</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '14px', color: 'rgba(240,236,230,0.45)' }}>{m.spec}</p>
                <a href="#contact" className="inline-block mt-6 font-mono text-[11px] uppercase tracking-widest border-b transition-colors hover:border-white pb-0.5"
                  style={{ color: '#C8922A', borderColor: '#C8922A' }}>Записаться →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ background: '#0A0A0F', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide">
          <p className="mb-10" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,236,230,0.3)' }}>Работы мастеров</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="group relative overflow-hidden"
                style={{ aspectRatio: i===0?'16/9':'1/1', gridColumn: i===0?'span 2':'span 1', background: '#141418', border: '1px solid rgba(200,146,42,0.08)' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(200,146,42,0.08)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(200,146,42,0.3)' }}>{i+1}/{6}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#F0ECE6', padding: 'var(--section-spacing) 0' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(44px,5vw,72px)', color: '#0A0A0F', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '40px' }}>
              Запись<br />к мастеру.
            </h2>
            {[['Адрес','Иннополис, ул. Молодёжная, 5'],['Телефон','+7 (999) 000-00-00'],['Часы','Пн–Вс: 10:00–21:00']].map(([l,v]) => (
              <div key={l} className="flex gap-6 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(10,10,15,0.08)' }}>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C8922A', minWidth: '70px', paddingTop: '2px' }}>{l}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#0A0A0F' }}>{v}</span>
              </div>
            ))}
          </div>
          <form className="space-y-3" onSubmit={e => e.preventDefault()}>
            {['Ваше имя','Телефон'].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-4 text-sm outline-none"
                style={{ fontFamily: 'var(--font-inter)', background: '#fff', border: '1px solid rgba(10,10,15,0.1)', color: '#0A0A0F' }} />
            ))}
            <select className="w-full px-4 py-4 text-sm outline-none appearance-none"
              style={{ fontFamily: 'var(--font-inter)', background: '#fff', border: '1px solid rgba(10,10,15,0.1)', color: 'rgba(10,10,15,0.5)' }}>
              <option value="">Выберите мастера</option>
              {masters.map(m => <option key={m.name}>{m.name} — {m.spec}</option>)}
            </select>
            <button className="w-full py-4 font-inter font-semibold text-sm tracking-wider transition-opacity hover:opacity-85"
              style={{ background: '#0A0A0F', color: '#F0ECE6' }}>Записаться онлайн</button>
          </form>
        </div>
      </section>

      <footer className="py-5" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(240,236,230,0.06)' }}>
        <div className="container-wide flex justify-between items-center">
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,236,230,0.3)' }}>© 2024 Форма · Барбершоп</span>
          <Link href="/" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(240,236,230,0.3)' }} className="hover:opacity-70">Сайт разработан Ильёй Шкариным →</Link>
        </div>
      </footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTER — отдаёт нужный сайт по id
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const params = useParams()
  const id = params?.id as string

  switch (id) {
    case 'chistopro':      return <ChistoproSite />
    case 'botanika':       return <BotanikaSite />
    case 'ulibka':         return <UlibkaSite />
    case 'svoya-vypechka': return <VypechkaSite />
    case 'forma':          return <FormaSite />
    default:               return notFound()
  }
}
