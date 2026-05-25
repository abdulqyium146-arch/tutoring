'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Users } from 'lucide-react'
import { Teacher } from '@/types'

interface TeachersSectionProps {
  teachers: Teacher[]
}

export function TeachersSection({ teachers }: TeachersSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/40" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Our Teachers
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Learn from{' '}
            <span className="gradient-text">Certified Scholars</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our qualified teachers bring decades of experience in Quranic education, combining
            traditional Islamic scholarship with modern teaching methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-dark/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover"
            >
              {/* Avatar placeholder */}
              <div className="h-48 bg-teal-gradient flex items-center justify-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-3xl font-heading">
                  {teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
                  {teacher.gender === 'Female' ? '👩‍🏫' : '👨‍🏫'} {teacher.gender}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-dark dark:text-white text-base mb-1">
                  {teacher.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 text-xs font-medium mb-2">
                  {teacher.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                  {teacher.education}
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    {teacher.rating}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="w-3.5 h-3.5 text-primary-500" />
                    {teacher.students}+ students
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-500">
                    {teacher.experience}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
