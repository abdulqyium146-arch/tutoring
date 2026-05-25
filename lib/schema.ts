import { BUSINESS_INFO } from './utils'

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${BUSINESS_INFO.website}/#organization`,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    image: `${BUSINESS_INFO.website}/images/og-image.jpg`,
    logo: `${BUSINESS_INFO.website}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: 'Greater Manchester',
      postalCode: BUSINESS_INFO.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.lat,
      longitude: BUSINESS_INFO.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Quran & Islamic Education Courses',
      itemListElement: [
        'Noorani Qaida',
        'Quran Reading',
        'Tajweed Classes',
        'Hifz ul Quran',
        'Islamic Studies',
        'Kids Quran Classes',
        'Adults Quran Classes',
        'One-to-One Classes',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name,
          provider: {
            '@type': 'EducationalOrganization',
            name: BUSINESS_INFO.name,
          },
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.youtube,
    ],
    areaServed: [
      { '@type': 'City', name: 'Manchester' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'London' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    keywords: 'Quran Classes Manchester, Online Quran Classes UK, Tajweed Classes, Hifz Programme, Islamic Education',
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateCourseSchema(course: {
  name: string
  description: string
  provider: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: course.provider,
      url: BUSINESS_INFO.website,
    },
    url: course.url,
    offers: {
      '@type': 'Offer',
      category: 'Islamic Education',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateArticleSchema(post: {
  title: string
  excerpt: string
  author: string
  publishedAt: string
  url: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS_INFO.website}/images/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    image: `${BUSINESS_INFO.website}${post.image}`,
    url: post.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  }
}
