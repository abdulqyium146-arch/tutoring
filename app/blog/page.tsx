import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts, getAllCategories } from '@/data/blog-posts'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { BUSINESS_INFO, formatDate } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Islamic Education Blog',
  description:
    'Expert articles on Quran learning, Tajweed, Hifz, Islamic Studies and tips for Muslim families in the UK. Read our latest insights from certified scholars.',
  keywords: [
    'Islamic Education Blog',
    'Quran Learning Tips',
    'Tajweed Guide',
    'Hifz Tips',
    'Muslim Parenting UK',
    'Islamic Studies Articles',
  ],
  path: '/blog',
})

export default function BlogPage() {
  const categories = getAllCategories()
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Blog', url: `${BUSINESS_INFO.website}/blog` },
  ])

  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured || p.slug !== featured?.slug)

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
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Islamic Education{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">Insights</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Expert articles on Quran learning, Tajweed, Hifz, and Islamic education tips
            for Muslim families across the UK.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom">
          {/* Categories filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary-600 text-white">
              All Articles
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-400 cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-10">
              <div className="bg-white dark:bg-dark/60 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-full bg-teal-gradient flex items-center justify-center relative">
                    <div className="text-center text-white px-8">
                      <p className="font-arabic text-4xl mb-2 text-gold/80">اقرأ</p>
                      <p className="text-white/60 text-sm">Featured Article</p>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium px-3 py-1 rounded-full">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-dark dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featured.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featured.readingTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="h-full bg-white dark:bg-dark/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover group">
                  <div className="h-44 bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center relative">
                    <p className="font-arabic text-3xl text-white/40">{post.category}</p>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-dark dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-white/10">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
