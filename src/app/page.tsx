import { Suspense } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import PainPointSection from '@/components/sections/PainPointSection'
import SolutionSection from '@/components/sections/SolutionSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import InteractiveToolSection from '@/components/sections/InteractiveToolSection'
import ObjectionHandlingSection from '@/components/sections/ObjectionHandlingSection'
import CTASection from '@/components/sections/CTASection'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      {/* Pain Point Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <PainPointSection />
      </Suspense>
      
      {/* Solution Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <SolutionSection />
      </Suspense>
      
      {/* Social Proof Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <SocialProofSection />
      </Suspense>
      
      {/* Interactive Tool Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <InteractiveToolSection />
      </Suspense>
      
      {/* Objection Handling Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <ObjectionHandlingSection />
      </Suspense>
      
      {/* Clear CTA Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>
      
      <Footer />
    </main>
  )
}
