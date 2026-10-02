export default function SEOKeywords() {
  const keywords = [
    'Kent RO Service Bangalore',
    'Havells RO Service Bangalore',
    'Pureit RO Service Bangalore',
    'Aquaguard RO Service Bangalore',
    'Livpure RO Service Bangalore',
    'LG RO Service Bangalore',
    'V-Guard RO Service Bangalore',
    'A.O. Smith RO Service Bangalore',
    'RO Repair Service Bangalore',
    'RO Water Purifier Repair',
    'RO Filter Change Bangalore',
    'RO Installation Bangalore',
    'RO AMC Plans Bangalore',
    'RO Service Center Near Me',
    'RO Repair Near Me',
    'Water Purifier Service Bangalore',
    'RO Service Whitefield',
    'RO Service Koramangala',
    'RO Service HSR Layout',
    'RO Service Indiranagar',
    'RO Service Jayanagar',
    'RO Service Electronic City',
    'RO Service Marathahalli',
    'RO Service BTM Layout',
    'Best RO Service in Bangalore',
    'Doorstep RO Repair Bangalore',
    'Same Day RO Service Bangalore',
    '24x7 RO Service Bangalore',
    'RO Service Cost Bangalore',
    'RO Service 60 Minutes',
    'Emergency RO Repair Bangalore',
    'Certified RO Technician Bangalore',
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-3">
            RO Services We Provide in Bangalore
          </h2>
          <p 
            className="text-gray-600 text-sm md:text-base mb-6" 
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            We service all major RO water purifier brands in Bangalore
          </p>
        </div>

        {/* Keywords Paragraph (Justified) */}
        <p 
          className="text-gray-700 text-sm md:text-base leading-relaxed" 
          style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}
        >
          {keywords.join(' • ')}
        </p>

      </div>
    </section>
  )
}