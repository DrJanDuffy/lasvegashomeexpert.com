import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="text-9xl font-bold text-primary-600 mb-8">404</div>
        
        {/* Main Message */}
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          The page you're looking for doesn't exist. But don't worry! Dr. Jan Duffy is still here to help you find your dream home in Las Vegas.
        </p>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Luxury Homes</h3>
            <div className="space-y-2">
              <Link href="/luxury-homes-for-sale-las-vegas" className="block text-primary-600 hover:text-primary-700">
                Luxury Homes for Sale
              </Link>
              <Link href="/luxury-realtor-las-vegas" className="block text-primary-600 hover:text-primary-700">
                Luxury Realtor Services
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Neighborhoods</h3>
            <div className="space-y-2">
              <Link href="/neighborhoods/red-rock-country-club-homes" className="block text-primary-600 hover:text-primary-700">
                Red Rock Country Club
              </Link>
              <Link href="/neighborhoods/the-ridges-summerlin-homes" className="block text-primary-600 hover:text-primary-700">
                The Ridges Summerlin
              </Link>
              <Link href="/neighborhoods/summerlin-homes" className="block text-primary-600 hover:text-primary-700">
                Summerlin
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Services</h3>
            <div className="space-y-2">
              <Link href="/buying-guide-las-vegas" className="block text-primary-600 hover:text-primary-700">
                Buying Guide
              </Link>
              <Link href="/selling-guide-las-vegas" className="block text-primary-600 hover:text-primary-700">
                Selling Guide
              </Link>
              <Link href="/contact" className="block text-primary-600 hover:text-primary-700">
                Contact Dr. Jan
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="btn-accent-buyer text-lg px-8 py-4"
          >
            Go to Homepage
          </Link>
          <Link 
            href="/contact"
            className="btn-secondary text-lg px-8 py-4"
          >
            Contact Dr. Jan Duffy
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Looking for something specific?
          </h3>
          <p className="text-slate-600 mb-4">
            If you're looking for a particular service or neighborhood, try our main navigation or contact Dr. Jan Duffy directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:text-primary-700">
              About Dr. Jan Duffy
            </Link>
            <Link href="/best-realtor-las-vegas-reviews" className="text-primary-600 hover:text-primary-700">
              Client Reviews
            </Link>
            <Link href="/las-vegas-luxury-home-market-report" className="text-primary-600 hover:text-primary-700">
              Market Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
