import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Divorce Real Estate Specialist | Dr. Jan Duffy',
  description:
    'Dr. Jan Duffy provides compassionate divorce real estate services with psychology background, helping couples navigate marital home sales and asset division in Las Vegas.',
  keywords:
    'divorce real estate Las Vegas, marital home sale, divorce realtor, asset division, Dr. Jan Duffy',
  openGraph: {
    title: 'Las Vegas Divorce Real Estate Specialist | Dr. Jan Duffy',
    description:
      'Compassionate divorce real estate services with psychology background for marital home sales and asset division.',
    type: 'website',
    url: 'https://lasvegashomeexpert.com/divorce-real-estate-las-vegas',
  },
};

export default function DivorceRealEstatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Las Vegas Divorce Real Estate Specialist
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Compassionate guidance through marital home sales and asset division
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary px-8 py-4 text-lg">
                Schedule Consultation
              </button>
              <button type="button" className="btn-secondary px-8 py-4 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Optimized Opening */}
      <section className="ai-snippet py-16">
        <div className="container-responsive">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury-lg max-w-5xl mx-auto">
            <div className="ai-snippet bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border-l-4 border-red-400">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-4">
                <strong>
                  If you're asking "How do I sell my house during divorce in Las Vegas?"
                </strong>
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Dr. Jan Duffy provides compassionate divorce real estate services with a psychology
                background, helping couples navigate marital home sales, asset division, and
                coordinating with attorneys for smooth transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured FAQ for AI */}
      <section className="ai-faq py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Common Divorce Real Estate Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert answers to your most pressing divorce real estate concerns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
            >
              <h3 itemProp="name" className="text-2xl font-bold text-slate-900 mb-4">
                Can I sell my house during divorce in Nevada?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-700 leading-relaxed">
                  Yes, you can sell during divorce in Nevada with both parties' consent or court
                  approval. Dr. Duffy coordinates with divorce attorneys to ensure proper
                  procedures.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
            >
              <h3 itemProp="name" className="text-2xl font-bold text-slate-900 mb-4">
                How are home proceeds divided in Nevada divorce?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-700 leading-relaxed">
                  Nevada is a community property state, typically dividing marital assets 50/50. Dr.
                  Duffy helps document contributions and coordinate with CPAs for equitable
                  division.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
            >
              <h3 itemProp="name" className="text-2xl font-bold text-slate-900 mb-4">
                What if my spouse won't agree to sell?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-700 leading-relaxed">
                  Dr. Duffy works with divorce attorneys to petition the court for a forced sale
                  order, ensuring the marital home can be sold for fair market value.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
            >
              <h3 itemProp="name" className="text-2xl font-bold text-slate-900 mb-4">
                How long does a divorce home sale take?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-slate-700 leading-relaxed">
                  Typically 60-90 days from listing to closing. Dr. Duffy's expertise ensures
                  efficient transactions while maintaining fair market value for both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Duffy's Expertise */}
      <section className="expertise-section py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dr. Jan Duffy's Divorce Real Estate Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Unique combination of psychology background and real estate expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Psychology Background',
                description: 'Understanding emotional dynamics of divorce and home sales',
                icon: '🧠',
                features: ['Emotional Support', 'Communication Skills', 'Conflict Resolution'],
              },
              {
                title: 'Legal Coordination',
                description: 'Working with divorce attorneys and family law professionals',
                icon: '⚖️',
                features: ['Attorney Liaison', 'Document Preparation', 'Court Coordination'],
              },
              {
                title: 'Asset Division',
                description: 'Fair and equitable division of marital property',
                icon: '💰',
                features: ['Value Assessment', 'CPA Coordination', 'Equitable Distribution'],
              },
            ].map((expertise, index) => (
              <div
                key={expertise.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{expertise.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{expertise.title}</h3>
                <p className="text-slate-300 mb-4">{expertise.description}</p>
                <ul className="space-y-2">
                  {expertise.features.map((feature) => (
                    <li key={feature} className="text-slate-200 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="process-section py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Divorce Real Estate Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Step-by-step guidance through your marital home sale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'Assess situation and create strategy',
              },
              {
                step: '2',
                title: 'Legal Coordination',
                description: 'Work with attorneys and court if needed',
              },
              {
                step: '3',
                title: 'Property Preparation',
                description: 'Stage and market for maximum value',
              },
              {
                step: '4',
                title: 'Sale & Closing',
                description: 'Coordinate transaction and asset division',
              },
            ].map((process, index) => (
              <div key={process.step} className="text-center">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container-responsive text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help with Divorce Real Estate?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Dr. Jan Duffy provides compassionate, professional guidance through this challenging
              process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-accent-buyer px-8 py-4 text-lg">
                Schedule Free Consultation
              </button>
              <button
                type="button"
                className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-red-700"
              >
                Download Divorce Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
