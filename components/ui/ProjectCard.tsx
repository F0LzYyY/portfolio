'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

const ease = [0.16, 1, 0.3, 1] as const

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/projects/${project.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease, delay: index * 0.08 }}
        className="relative group rounded-sm overflow-hidden h-full"
        style={{ backgroundColor: project.color || '#0A0A0F' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        {/* Placeholder gradient – replace with real <Image> when photos are added */}
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${project.color || '#0A0A0F'} 0%, #1a1a2e 100%)`,
          }}
        />

        {/* Grid overlay (wireframe feel) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,146,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,146,42,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Browser chrome mockup */}
        <div className="absolute inset-4 rounded-sm overflow-hidden"
          style={{ background: 'rgba(245,240,232,0.06)', border: '1px solid rgba(245,240,232,0.1)' }}>
          <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid rgba(245,240,232,0.08)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(245,240,232,0.15)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(245,240,232,0.15)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(245,240,232,0.15)' }} />
            <div className="ml-3 rounded-sm px-4 py-0.5 text-xs" style={{ background: 'rgba(245,240,232,0.08)', color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-dm-mono)' }}>
              {project.title.toLowerCase().replace(/\s+/g, '')}.ru
            </div>
          </div>
          {/* Mock content lines */}
          <div className="p-4 flex flex-col gap-2">
            <div className="h-3 rounded-full w-3/4" style={{ background: 'rgba(245,240,232,0.08)' }} />
            <div className="h-2 rounded-full w-1/2" style={{ background: 'rgba(245,240,232,0.05)' }} />
            <div className="h-2 rounded-full w-5/6" style={{ background: 'rgba(245,240,232,0.05)' }} />
            <div className="mt-2 h-6 rounded-sm w-24" style={{ background: 'rgba(200,146,42,0.25)' }} />
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'rgba(10,10,15,0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-ivory font-inter font-medium text-sm tracking-wide flex items-center gap-2">
            Смотреть кейс
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5 md:p-6">
        <span className="tag block mb-2">{project.industry}</span>
        <h3 className="font-playfair text-display-s text-ivory leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-mist leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>


      {/* Bottom hover reveal */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        style={{ transformOrigin: 'left' }}
      />
      </motion.div>
    </Link>
  )
}
