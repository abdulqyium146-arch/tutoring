'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Testimonial } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/60 overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Student Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            What Our{' '}
            <span className="gradient-text">Families Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real reviews from our students and parents across the UK
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-dark/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10 h-full flex flex-col shadow-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary-100 dark:text-primary-900" />
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/10">
                    <div className="w-10 h-10 rounded-full bg-teal-gradient flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-dark dark:text-white text-sm">{t.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs">
                        {t.role} • {t.location}
                      </div>
                    </div>
                    {t.course && (
                      <div className="ml-auto">
                        <span className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full">
                          {t.course}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center mt-10 gap-3"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <span className="font-bold text-dark dark:text-white">4.9/5</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">from 247 reviews on Google</span>
        </motion.div>
      </div>
    </section>
  )
}
