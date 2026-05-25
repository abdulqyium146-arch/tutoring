import { Metadata } from 'next'
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { testimonials } from '@/data/testimonials'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Online Quran Classes London | Quran Center UK',
  description:
    'Premium online Quran classes for London students. Expert certified teachers for Tajweed, Hifz, Quran Reading & Islamic Studies. Book your FREE trial class now!',
  keywords: [
    'Online Quran Classes London',
    'Quran Classes London',
    'Quran Teacher London',
    'Online Islamic Education London',
    'Tajweed Classes London',
    'Hifz Classes London',
    'Learn Quran London',
  ],
  path: '/online-quran-classes-london',
})

export default function LondonPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Online Quran Classes London', url: `${BUSINESS_INFO.website}/online-quran-classes-london` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium">London, United Kingdom</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Online Quran Classes{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">London</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of London Muslim families learning Quran online with Quran Center UK.
            Certified teachers, flexible schedules, premium quality education from home.
          </p>
          <a
            href={FREE_TRIAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
          >
            Book FREE Trial — London
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-6">
            Premium Online Quran Classes for London Muslims
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Quran Center UK delivers world-class <strong>online Quran classes for London</strong> students,
            with expert certified teachers available via live Zoom sessions. Our London students benefit
            from the same exceptional teaching quality as our in-person Manchester classes — without
            the commute.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            From East London to West London, North to South — our <strong>online Quran teachers</strong>
            serve students across all London boroughs including Tower Hamlets, Newham, Hackney,
            Waltham Forest, Brent, Harrow, and beyond. All ages, all levels, all courses available.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Live interactive Zoom sessions',
              'Same certified teachers as our Manchester centre',
              'One-to-one and small group options',
              'Male & female Quran teachers',
              'All ages from 4 to adult',
              'FREE trial with no obligation',
            ].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials.filter(t => t.location.includes('London') || t.location.includes('Online'))} />
      <CTASection
        title="London&apos;s Choice for Online Quran Education"
        subtitle="Book your FREE online trial class and experience the Quran Center UK difference."
      />
    </>
  )
}
