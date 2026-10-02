export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: '10+ Years Experience',
      desc: 'Serving 10,000+ homes in Bangalore with trusted RO repair and maintenance.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'Certified Technicians',
      desc: 'Verified, background-checked, and trained experts for all RO brands.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M20 7h-9M14 17H5M9 12h12"/>
          <circle cx="17" cy="17" r="3"/>
          <circle cx="7" cy="7" r="3"/>
        </svg>
      ),
      title: '90-Day Warranty',
      desc: 'Every repair is backed by a 90-day service warranty for peace of mind.'
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Thousands Choose Us
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Bangalore's trusted independent RO service provider
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-6 md:gap-10">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}