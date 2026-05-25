'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const locations = [
  {
    city: 'Manchester',
    description: 'In-person & online classes serving Levenshulme, Gorton, Didsbury, Fallowfield and all Manchester areas.',
    href: '/quran-classes-manchester',
    badge: 'Main Centre',
  },
  {
    city: 'Birmingham',
    description: 'Online Quran classes available for students across Birmingham and the West Midlands.',
    href: '/quran-classes-birmingham',
    badge: 'Online',
  },
  {
    city: 'London',
    description: 'Join hundreds of London-based students learning Quran online with our expert teachers.',
    href: '/online-quran-classes-london',
    badge: 'Online',
  },
  {
    city: 'UK Wide',
    description: 'No matter where you are in the UK — our online platform brings quality Quran education to your home.',
    href: '/online-quran-classes',
    badge: 'Nationwide',
  },
]

export function LocalSEOBlock() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white dark:bg-dark" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Serving Students Across the UK
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Quran Classes Near You
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you&apos;re in Manchester, Birmingham, London or anywhere in the UK —
            Quran Center UK is here to serve you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={loc.href}
                className="block h-full bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 card-hover group"
              >
                <div className="flex items-center justify-between mb-3">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full font-medium">
                    {loc.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-dark dark:text-white text-lg mb-2">
                  {loc.city}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {loc.description}
                </p>
                <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                  View Classes <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Manchester local SEO paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800"
        >
          <h3 className="font-heading font-semibold text-dark dark:text-white mb-3 text-lg">
            Quran Classes in Manchester — Your Local Islamic Education Centre
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Based at <strong>41 Hemmons Rd, Levenshulme, Manchester M12 5TA</strong>, Quran Center UK
            has been serving the Muslim community of Greater Manchester for over 10 years. We provide
            in-person Quran classes for children and adults in Levenshulme, Gorton, Longsight,
            Fallowfield, Didsbury, Rusholme and surrounding areas. Our online Quran classes are
            available to students anywhere in the UK. Whether you&apos;re looking for{' '}
            <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline">
              Quran classes in Manchester
            </Link>
            ,{' '}
            <Link href="/tajweed-classes-uk" className="text-primary-600 dark:text-primary-400 underline">
              Tajweed classes UK
            </Link>
            , or{' '}
            <Link href="/online-quran-classes" className="text-primary-600 dark:text-primary-400 underline">
              online Quran classes
            </Link>
            , we have the perfect programme for your family.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
