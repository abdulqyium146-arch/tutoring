import { Metadata } from 'next'
import { BookOpen, Book, Music, Heart, Star, Users, GraduationCap, UserCheck, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/sections/CTASection'
import { courses } from '@/data/courses'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateCourseSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Quran & Islamic Studies Courses',
  description:
    'Explore our comprehensive range of Quran courses — Noorani Qaida, Tajweed, Hifz, Islamic Studies, Kids & Adults classes. Certified teachers, flexible schedules. Book free trial!',
  keywords: [
    'Quran Courses UK',
    'Tajweed Classes Online',
    'Hifz Programme UK',
    'Noorani Qaida Classes',
    'Islamic Studies Manchester',
    'Kids Quran Classes',
    'Adults Quran Classes',
  ],
  path: '/courses',
})

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Book, Music, Heart, Star, Users, GraduationCap, UserCheck,
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Intermediate: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Advanced: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'All Levels': 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
}

export default function CoursesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Courses', url: `${BUSINESS_INFO.website}/courses` },
  ])

  const courseSchemas = courses.map((c) =>
    generateCourseSchema({
      name: c.title,
      description: c.longDescription,
      provider: BUSINESS_INFO.name,
      url: `${BUSINESS_INFO.website}/courses#${c.slug}`,
    })
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, ...courseSchemas]) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Courses</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Our Quran &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">
              Islamic Education Courses
            </span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            From complete beginners to advanced Hifz — we have a course for every student.
            All courses available online and in-person in Manchester.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom space-y-12">
          {courses.map((course, i) => {
            const Icon = iconMap[course.icon] || BookOpen
            const isEven = i % 2 === 0

            return (
              <div
                key={course.id}
                id={course.slug}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:order-2' : ''}>
                  {course.popular && (
                    <span className="inline-block bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  {course.arabicTitle && (
                    <p className="font-arabic text-right text-gold/80 text-lg mb-2">
                      {course.arabicTitle}
                    </p>
                  )}
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark dark:text-white mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {course.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                      <Clock className="w-4 h-4 text-primary-500" />
                      {course.duration}
                    </span>
                    <span className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full ${levelColors[course.level]}`}>
                      <Award className="w-4 h-4" />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                      <Users className="w-4 h-4 text-primary-500" />
                      {course.ageGroup}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {course.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={FREE_TRIAL_WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-teal-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
                    >
                      Book Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <div className="text-primary-600 dark:text-primary-400 font-semibold">
                      {course.price}
                    </div>
                  </div>
                </div>

                {/* Visual card */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="bg-white dark:bg-dark/60 rounded-3xl p-8 border border-gray-100 dark:border-white/10 shadow-card">
                    <div className="w-16 h-16 rounded-2xl bg-teal-gradient flex items-center justify-center mb-6 shadow-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-dark dark:text-white mb-3">
                      What You&apos;ll Achieve
                    </h3>
                    <ul className="space-y-3">
                      {course.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection
        title="Find the Right Course for You"
        subtitle="Not sure which course to start with? Contact us for a free consultation and we'll recommend the perfect programme."
      />
    </>
  )
}
