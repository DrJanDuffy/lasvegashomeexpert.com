import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';
import InteractiveToolSection from '@/components/sections/InteractiveToolSection';
import LuxuryServicesSection from '@/components/sections/LuxuryServicesSection';
import ObjectionHandlingSection from '@/components/sections/ObjectionHandlingSection';
import PainPointSection from '@/components/sections/PainPointSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Suspense } from 'react';

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

      {/* Luxury Services Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <LuxuryServicesSection />
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
  );
}
