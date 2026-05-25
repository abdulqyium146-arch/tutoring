import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10 text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
          <BookOpen className="w-10 h-10 text-gold" />
        </div>
        <h1 className="font-heading text-8xl font-bold text-white/20 mb-4">404</h1>
        <h2 className="font-heading text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="font-arabic text-gold text-xl mb-2">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let us help you find what you need.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-teal-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
