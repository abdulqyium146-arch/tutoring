import { FAQ } from '@/types'

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I get started with Quran Center UK?',
    answer: 'Getting started is simple! Click "Book Free Trial Class" on our website, fill in your details, and we\'ll contact you within 24 hours to schedule your free trial lesson. No commitment required — try before you enrol.',
    category: 'Getting Started',
  },
  {
    id: '2',
    question: 'Do you offer online Quran classes?',
    answer: 'Yes! We offer fully online Quran classes via Zoom and other video platforms. Our online classes are just as effective as in-person sessions, with the same qualified teachers, interactive tools, and personalised attention. Students from across the UK and worldwide join our online classes.',
    category: 'Online Learning',
  },
  {
    id: '3',
    question: 'Are there female teachers available for sisters?',
    answer: 'Absolutely. We have qualified and experienced female Quran teachers (Ustadhas) available for sisters of all ages. We understand the importance of this for many Muslim families and ensure female students are taught by female teachers whenever requested.',
    category: 'Teachers',
  },
  {
    id: '4',
    question: 'What age groups do you teach?',
    answer: 'We teach students of all ages — from children as young as 4 years old right through to adults of any age. We have specialist teachers for each age group, ensuring the teaching style and curriculum is appropriate and engaging for every learner.',
    category: 'Age Groups',
  },
  {
    id: '5',
    question: 'How long does it take to complete the Hifz programme?',
    answer: 'The duration of Hifz varies based on the student\'s dedication, age, and time commitment. On average, students who attend regularly complete the Hifz in 3-5 years. Some motivated students with strong foundations complete it faster. We provide a structured plan and regular assessments to keep students on track.',
    category: 'Courses',
  },
  {
    id: '6',
    question: 'What qualifications do your teachers have?',
    answer: 'All our teachers are fully qualified and experienced. They hold certifications from reputable Islamic institutions including Sanad in Tajweed, Hifz certificates, and Alima degrees. Many have experience teaching in the UK and understand the local Muslim community\'s needs.',
    category: 'Teachers',
  },
  {
    id: '7',
    question: 'How much do classes cost?',
    answer: 'Our classes start from £20/month, with various pricing options depending on the course, frequency, and whether classes are online or in-person. We believe quality Islamic education should be accessible. Contact us for a personalised quote — we offer family discounts and flexible payment options.',
    category: 'Pricing',
  },
  {
    id: '8',
    question: 'Can my child join if they have no prior knowledge of Arabic?',
    answer: 'Yes, of course! We welcome complete beginners. Our Noorani Qaida programme is specifically designed for students with zero prior knowledge. Our teachers are experienced at teaching the Arabic alphabet from scratch in an engaging, age-appropriate way.',
    category: 'Getting Started',
  },
  {
    id: '9',
    question: 'What technology do I need for online classes?',
    answer: 'For online classes you just need a device (laptop, tablet, or smartphone) with a stable internet connection, a camera, and a microphone. We primarily use Zoom which is free to download. We\'ll guide you through everything before your first session.',
    category: 'Online Learning',
  },
  {
    id: '10',
    question: 'Do you offer a free trial class?',
    answer: 'Yes! We offer a completely free trial class with no obligation to continue. This allows you to experience our teaching quality, meet your teacher, and decide if we\'re the right fit for your family. Book your free trial today through our website or WhatsApp.',
    category: 'Getting Started',
  },
]

export const homeFaqs = faqs.slice(0, 6)
