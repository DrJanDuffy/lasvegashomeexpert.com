'use client'

import { motion } from 'framer-motion'
import { trackEvent } from '@/utils'

export default function SocialProofSection() {
  const testimonials = [
    {
      name: 'Sarah & Mike Johnson',
      role: 'First-time Homebuyers',
      content: 'The process was incredibly smooth. We found our dream home in just 3 weeks!',
      rating: 5,
      image: '👨‍👩‍👧‍👦'
    },
    {
      name: 'David Chen',
      role: 'Property Investor',
      content: 'Outstanding market insights and data accuracy. Made investment decisions much easier.',
      rating: 5,
      image: '🏠'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Home Seller',
      content: 'Sold my house above asking price in just 8 days. The technology is amazing!',
      rating: 5,
      image: '💰'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Families' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '15', label: 'Years Experience' },
    { number: '$2.5M+', label: 'Properties Sold' }
  ]

  return (
    <section id="social-proof" className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Trusted by Las Vegas Families
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-neutral-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="font-semibold text-primary-800">{testimonial.name}</div>
              <div className="text-sm text-neutral-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
