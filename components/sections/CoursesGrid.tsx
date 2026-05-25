'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen, Book, Music, Heart, Star, Users, GraduationCap, UserCheck, ArrowRight, Clock, Award
} from 'lucide-react'
import { Course } from '@/types'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Book, Music, Heart, Star, Users, GraduationCap, UserCheck,
}

interface CoursesGridProps {
  courses: Course[]
  title?: string
  subtitle?: string
  showAll?: boolean
}

export function CoursesGrid({ courses, title, subtitle, showAll = false }: CoursesGridProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const displayed = showAll ? courses : courses.slice(0, 6)

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/40" ref={ref}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((course, i) => {
            const Icon = iconMap[course.icon] || BookOpen
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={`/courses#${course.slug}`} className="block h-full">
                  <div
                    className={cn(
                      'relative h-full bg-white dark:bg-dark/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10 card-hover overflow-hidden group',
                      course.popular && 'border-primary-200 dark:border-primary-800'
                    )}
                  >
                    {course.popular && (
                      <div className="absolute top-4 right-4 bg-gold text-dark text-xs font-bold px-2.5 py-1 rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>

                    {/* Arabic title */}
                    {course.arabicTitle && (
                      <p className="font-arabic text-right text-gold/70 text-base mb-1">
                        {course.arabicTitle}
                      </p>
                    )}

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg text-dark dark:text-white mb-2">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        {course.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {course.ageGroup}
                      </span>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                        {course.price}
                      </span>
                      <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-teal-gradient text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
            >
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
