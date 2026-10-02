export default function Testimonials() {
  const reviews = [
    {
      name: 'Rahul Sharma',
      location: 'Whitefield, Bangalore',
      text: 'My RO was leaking and I called them. The technician arrived within 45 minutes and fixed it quickly. Very professional service.',
      initials: 'RS'
    },
    {
      name: 'Priya Nair',
      location: 'Koramangala, Bangalore',
      text: 'Got my RO filter changed. They used good quality parts and also gave warranty. Pricing was transparent, no hidden charges.',
      initials: 'PN'
    },
    {
      name: 'Amit Verma',
      location: 'HSR Layout, Bangalore',
      text: 'Called them for new RO installation. Work was done neatly and professionally. Highly recommended for RO services in Bangalore.',
      initials: 'AV'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p 
            className="text-gray-600 text-sm md:text-base" 
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Trusted by over 10,000+ customers in Bangalore
          </p>
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              
              {/* Stars + Google Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-yellow-500 text-lg">★★★★★</div>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-white px-2 py-1 rounded-full border border-gray-100">
                  <span className="text-blue-500 font-bold">G</span> Verified
                </div>
              </div>

              {/* Review Text */}
              <p 
                className="text-gray-700 text-sm md:text-base leading-relaxed mb-4" 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}
              >
                "{review.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-inter font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}