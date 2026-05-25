import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/StatsSection'
import { CoursesGrid } from '@/components/sections/CoursesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TeachersSection } from '@/components/sections/TeachersSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { LocalSEOBlock } from '@/components/sections/LocalSEOBlock'
import { CTASection } from '@/components/sections/CTASection'
import { courses } from '@/data/courses'
import { teachers } from '@/data/teachers'
import { testimonials } from '@/data/testimonials'
import { homeFaqs } from '@/data/faqs'
import { generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Quran Center UK | Premium Quran Classes Manchester & Online UK',
  description:
    'Learn Quran online or in Manchester with certified teachers. Tajweed, Hifz, Noorani Qaida & Islamic Studies for all ages. Book your FREE trial class today!',
  keywords: [
    'Quran Classes Manchester',
    'Online Quran Classes UK',
    'Quran Academy UK',
    'Quran Teacher Manchester',
    'Tajweed Classes Online',
    'Hifz Classes Manchester',
    'Islamic Studies UK',
  ],
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
}

export default function HomePage() {
  const faqSchema = generateFAQSchema(homeFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <StatsSection />
      <CoursesGrid
        courses={courses}
        title="Our Islamic Education Courses"
        subtitle="Choose from our comprehensive range of Quran and Islamic Studies courses — designed for all ages and experience levels."
      />
      <WhyChooseUs />
      <TeachersSection teachers={teachers} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={homeFaqs} />
      <LocalSEOBlock />
      <CTASection />
    </>
  )
}
