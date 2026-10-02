export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Simple Trust Badge */}
            <div className="inline-block bg-blue-50 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              ✓ Certified RO Specialists in Bangalore
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              RO Service & Repair
              <span className="block text-primary">at Your Doorstep</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 font-inter max-w-lg leading-relaxed">
              Bangalore's most trusted independent RO service. Expert repair, filter change, and installation by certified technicians. 60-minute response time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#book" className="bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition">
                Book Service Now →
              </a>
              <a href="tel:08050291180" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition">
                📞 08050291180
              </a>
            </div>

            {/* Trust Stats Row - Simple */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <div>
                <p className="font-poppins text-2xl font-bold text-gray-900">4.9★</p>
                <p className="text-gray-500 text-xs font-inter uppercase tracking-wide">Google Rating</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div>
                <p className="font-poppins text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-gray-500 text-xs font-inter uppercase tracking-wide">Happy Customers</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div>
                <p className="font-poppins text-2xl font-bold text-gray-900">60 Min</p>
                <p className="text-gray-500 text-xs font-inter uppercase tracking-wide">Response</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80" 
                alt="RO Water Purifier Service" 
                className="w-full h-80 md:h-96 object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}