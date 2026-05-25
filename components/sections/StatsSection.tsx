'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, BookOpen, Award, Star } from 'lucide-react'

const stats = [
  { value: '1,200+', label: 'Students Enrolled', icon: Users, color: 'text-primary-600' },
  { value: '8+', label: 'Expert Courses', icon: BookOpen, color: 'text-gold' },
  { value: '10+', label: 'Years Experience', icon: Award, color: 'text-primary-600' },
  { value: '4.9/5', label: 'Average Rating', icon: Star, color: 'text-gold' },
]

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white dark:bg-dark/60" aria-label="Statistics">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 card-hover"
            >
              <div className={`w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="font-heading font-bold text-3xl text-dark dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
