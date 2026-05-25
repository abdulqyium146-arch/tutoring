import { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { BUSINESS_INFO } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Contact Quran Center UK',
  description:
    'Get in touch with Quran Center UK. Book a FREE trial class, enquire about courses, or visit us at Levenshulme, Manchester. Call, WhatsApp or email us today.',
  keywords: [
    'Contact Quran Center UK',
    'Book Quran Class Manchester',
    'Quran Centre Manchester Contact',
    'Quran Classes Enquiry',
  ],
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Contact', url: `${BUSINESS_INFO.website}/contact` },
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
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Get in{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">Touch</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Ready to start? Book a FREE trial class, ask a question, or visit us in Manchester.
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
