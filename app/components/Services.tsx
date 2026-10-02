export default function Services() {
  const services = [
    { icon: '🔧', title: 'RO Repair', desc: 'Motor, pump, aur leakage fix' },
    { icon: '💧', title: 'Filter Change', desc: 'Original Livpure filters' },
    { icon: '📦', title: 'New Installation', desc: 'Same-day installation' },
    { icon: '📅', title: 'AMC Plans', desc: 'Yearly maintenance' },
    { icon: '🚰', title: 'Water Leak Fix', desc: 'Urgent leak stoppage' },
    { icon: '✨', title: 'Deep Cleaning', desc: 'Full RO servicing' },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter text-sm md:text-base">
            Bangalore mein sabse fast aur trusted Livpure RO services
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
              <h3 className="font-poppins font-bold text-lg md:text-xl text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 font-inter flex-grow">
                {service.desc}
              </p>
              
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <a href="#book" className="block w-full text-center bg-blue-50 text-primary hover:bg-primary hover:text-white font-semibold py-2.5 rounded-lg transition">
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}