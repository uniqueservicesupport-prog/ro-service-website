export default function HowItWorks() {
  const steps = [
    {
      title: 'BOOK APPOINTMENT',
      desc: 'RO Service Center first carefully listens to specific client\'s requirement with an open mind to understand exactly what they need. We never offer one-size-fits-all services but customized solutions.'
    },
    {
      title: 'GET A TECHNICIAN',
      desc: 'It is not sure that all people have same problems regarding their purification systems. Hence, we choose the most helpful way that resolves our client\'s issue related to RO system repair and services.'
    },
    {
      title: 'SERVICE COMPLETED',
      desc: 'Our specialized and experienced team works in collaboration using the advanced technologies to make sure that your RO system work efficiently and provide pure healthy water free from all water bacteria.'
    },
    {
      title: 'YOUR FEEDBACK',
      desc: 'After delivering you the desired RO services, we take into an account your feedback to ensure that all your requirements get fulfilled with complete satisfaction by calling you back.'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 text-center mb-12">
          4 Steps to Repair RO Service
        </h2>

        {/* Steps */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              
              {/* Title */}
              <h3 className="font-inter text-lg md:text-xl font-bold text-gray-900 uppercase mb-4 tracking-wide">
                {step.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-gray-700 text-sm md:text-base leading-relaxed" 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}
              >
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}