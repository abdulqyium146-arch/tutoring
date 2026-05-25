import { Metadata } from 'next'
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { testimonials } from '@/data/testimonials'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Online Quran Classes Birmingham | Quran Center UK',
  description:
    'Online Quran classes for students in Birmingham. Learn Quran, Tajweed & Hifz with certified teachers from Quran Center UK. Book your FREE trial class today!',
  keywords: [
    'Quran Classes Birmingham',
    'Online Quran Teacher Birmingham',
    'Quran Academy Birmingham',
    'Tajweed Classes Birmingham',
    'Learn Quran Birmingham',
    'Islamic Education Birmingham',
  ],
  path: '/quran-classes-birmingham',
})

const birminghamAreas = [
  'Sparkhill', 'Sparkbrook', 'Small Heath', 'Alum Rock', 'Lozells',
  'Handsworth', 'Aston', 'Bordesley Green', 'Moseley', 'Balsall Heath',
]

export default function BirminghamPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Quran Classes Birmingham', url: `${BUSINESS_INFO.website}/quran-classes-birmingham` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium">Birmingham, West Midlands</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Online Quran Classes{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">Birmingham</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            Expert online Quran classes for students across Birmingham and the West Midlands.
            Learn from certified teachers at Quran Center UK — the UK&apos;s most trusted Quran academy.
          </p>
          <a
            href={FREE_TRIAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
          >
            Book FREE Trial — Birmingham
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-6">
            Online Quran Classes for Birmingham Students
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Quran Center UK provides premium <strong>online Quran classes for Birmingham</strong> students,
            delivered by the same certified teachers from our Manchester centre. Whether you are looking for
            Quran lessons for your child or yourself, our live interactive sessions via Zoom bring
            expert Islamic education directly to your home in Birmingham.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Our Birmingham online students enjoy the same high-quality curriculum and personalised
            attention as our in-person students — with the added flexibility of learning from home.
            We offer Noorani Qaida, Quran Reading, Tajweed, Hifz, Islamic Studies, Kids and Adults
            classes for all experience levels.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              'Live one-to-one online sessions',
              'Male & female teachers available',
              'Flexible scheduling — 7 days a week',
              'All courses for all levels',
              'Regular parent progress updates',
              'FREE trial class available',
            ].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800">
            <h3 className="font-heading font-semibold text-dark dark:text-white mb-3">
              Birmingham Areas We Serve Online
            </h3>
            <div className="flex flex-wrap gap-2">
              {birminghamAreas.map((area) => (
                <span
                  key={area}
                  className="bg-white dark:bg-white/10 text-primary-700 dark:text-primary-400 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials.filter(t => t.location.includes('Birmingham') || t.location.includes('Online'))} />
      <CTASection
        title="Start Learning Quran in Birmingham"
        subtitle="Join students across Birmingham learning Quran online with certified teachers. Book your FREE trial today."
      />
    </>
  )
}
