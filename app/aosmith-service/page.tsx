import Footer from '../components/Footer'

export const metadata = {
  title: 'A.O. Smith RO Service Bangalore | Water Purifier Repair',
  description: 'Expert A.O. Smith RO service in Bangalore. Repair A.O. Smith water purifiers. Same-day doorstep service. Call 08050291180.',
}

export default function AOSmithService() {
  return (
    <main id="top">
      <section id="book-section" className="bg-gradient-to-b from-green-50 to-white pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="/aosmith-banner.png" 
              alt="A.O. Smith RO Water Purifier Service" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-center mb-10">
            <h2 className="font-inter text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Book A.O. Smith RO Repair Service
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              We provide exclusive doorstep A.O. Smith RO repair service in Bangalore within 60 minutes. Book on call <a href="tel:08050291180" className="text-[#00A651] font-semibold">08050291180</a> or fill the form below.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-12 max-w-2xl mx-auto">
            <h3 className="font-poppins text-2xl font-bold text-[#00A651] mb-6 text-center">
              Service Request
            </h3>

            <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 mb-6">
              <label className="block text-xs text-gray-500 font-inter mb-2 uppercase tracking-wide">
                Select Service
              </label>
              <select name="service" form="aosmith-form" className="w-full bg-transparent text-gray-800 font-inter text-base outline-none cursor-pointer">
                <option>A.O. Smith RO Service & Repair</option>
                <option>A.O. Smith Filter Replacement</option>
                <option>A.O. Smith AMC Maintenance Plans</option>
                <option>A.O. Smith Installation & Relocation</option>
              </select>
            </div>

            <details className="group">
              <summary className="list-none cursor-pointer text-center">
                <span className="inline-block bg-[#00A651] hover:bg-[#008f45] text-white font-poppins font-semibold px-10 py-3 rounded-full transition duration-300 shadow-lg shadow-[#00A651]/30 group-open:hidden">
                  Book Now
                </span>
              </summary>

              <form id="aosmith-form" action="https://api.web3forms.com/submit" method="POST" className="space-y-4 mt-6">
                <input type="hidden" name="access_key" value="1d5d47df-4a9a-4f20-ba78-7aa07022894e" />
                <input type="hidden" name="redirect" value="https://roservicecentre24x7.in/thank-you?from=aosmith" />
                <input type="hidden" name="subject" value="New A.O. Smith Service Request" />
                <input type="hidden" name="from_name" value="RO Service Center Website" />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-green-100 outline-none transition bg-white" placeholder="Enter your full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Pincode</label>
                  <input type="text" name="pincode" required pattern="[0-9]{6}" inputMode="numeric" className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-green-100 outline-none transition bg-white" placeholder="6-digit pincode" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Mobile Number</label>
                  <input type="tel" name="mobile" required pattern="[0-9]{10}" inputMode="numeric" className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-green-100 outline-none transition bg-white" placeholder="10-digit mobile number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Address</label>
                  <input type="text" name="address" required className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00A651] focus:ring-2 focus:ring-green-100 outline-none transition bg-white" placeholder="Flat, Building, Area" />
                </div>

                <button type="submit" className="w-full bg-[#00A651] hover:bg-[#008f45] text-white font-poppins font-semibold px-6 py-4 rounded-full transition duration-300 cursor-pointer mt-4">
                  Submit Request
                </button>
              </form>
            </details>
          </div>

          <div>
            <h3 className="font-poppins text-2xl font-bold text-[#00A651] mb-6 text-center">
              Register A.O. Smith Service Request
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-xl mx-auto">
              <img src="/customer-care.png" alt="Customer Care" className="w-full h-64 md:h-80 object-cover" />
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gradient-to-br from-[#00A651] to-[#006E36] py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '4.9★', label: 'Average Rating' },
              { value: '10,000+', label: 'Happy Customers' },
              { value: '98%', label: 'Success Rate' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
                <p className="font-poppins text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-green-100 text-xs md:text-sm font-inter uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
            A.O. Smith RO Repair Service In Bangalore
          </h2>
          <div className="text-gray-800 text-sm md:text-base leading-relaxed space-y-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
            <p>Most of us are using an A.O. Smith RO water purifier to get potable drinking water. A.O. Smith RO filters have become one of the most popular water filtration systems in both industries, institutes, as well as homes. However, unless you get a regular repair done for the same, you cannot be guaranteed pure drinking water.</p>
            <p>If you wish to keep your family safe from water-borne diseases, opting for A.O. Smith RO repair service Bangalore is important. One of the most popular names when it comes to A.O. Smith water purifier repair service Bangalore is <span className="text-[#00A651] font-semibold">RO Service Center</span>. Irrespective of the brand name, we provide repair, services, and installation of all types of A.O. Smith RO filters.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 text-center mb-10">
            Our A.O. Smith Services
          </h2>

          <div className="mb-12">
            <h3 className="font-inter text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">A.O. Smith Service and Repair</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
              We at RO Service Center provide you the Regular A.O. Smith RO service as well as A.O. Smith RO Repair services to allow you drink safe and purest water that is rich in freshness, energy, and required nutrients. Our comprehensive and reliable services stand as the testimonial and ensure you about the amazing quality of our work.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-inter text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">A.O. Smith Installation & Re-Installation</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
              If you are in Bangalore and seeking help in A.O. Smith RO installation at your premises, then you have reached the right destination. RO Service Center provides the installation and re-installation of the A.O. Smith RO system, whether new or used, at your doorstep. Our services extend to the residential, commercial and industrial areas in and around the Bangalore locality.
            </p>
          </div>

          <div>
            <h3 className="font-inter text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">A.O. Smith AMC</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
              If you are checking out preventive measure for your A.O. Smith RO system then, you need to check out our A.O. Smith annual maintenance contract (A.O. Smith AMC plans) where you can find various options to settle down all kinds of water purifier breakdown and prevention. Check out what we offer under our A.O. Smith AMC services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 text-center mb-12">4 Steps to Repair A.O. Smith RO Service</h2>
          <div className="space-y-10">
            {[
              { title: 'BOOK APPOINTMENT', desc: 'RO Service Center first carefully listens to specific client\'s requirement with an open mind to understand exactly what they need. We never offer one-size-fits-all services but customized solutions.' },
              { title: 'GET A TECHNICIAN', desc: 'It is not sure that all people have same problems regarding their purification systems. Hence, we choose the most helpful way that resolves our client\'s issue related to A.O. Smith RO system repair and services.' },
              { title: 'SERVICE COMPLETED', desc: 'Our specialized and experienced team works in collaboration using the advanced technologies to make sure that your A.O. Smith RO system work efficiently and provide pure healthy water free from all water bacteria.' },
              { title: 'YOUR FEEDBACK', desc: 'After delivering you the desired A.O. Smith RO services, we take into an account your feedback to ensure that all your requirements get fulfilled with complete satisfaction by calling you back.' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <h3 className="font-inter text-lg md:text-xl font-bold text-gray-900 uppercase mb-4 tracking-wide">{step.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Trusted by over 10,000+ customers in Bangalore</p>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Rahul Sharma', location: 'Whitefield, Bangalore', text: 'My A.O. Smith RO was leaking and I called them. The technician arrived within 45 minutes and fixed it quickly. Very professional service.', initials: 'RS' },
              { name: 'Priya Nair', location: 'Koramangala, Bangalore', text: 'Got my A.O. Smith RO filter changed. They used good quality parts and also gave warranty. Pricing was transparent, no hidden charges.', initials: 'PN' },
              { name: 'Amit Verma', location: 'HSR Layout, Bangalore', text: 'Called them for new A.O. Smith RO installation. Work was done neatly and professionally. Highly recommended for A.O. Smith RO services in Bangalore.', initials: 'AV' },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-yellow-500 text-lg">★★★★★</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-white px-2 py-1 rounded-full border border-gray-100">
                    <span className="text-blue-500 font-bold">G</span> Verified
                  </div>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>"{review.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                  <div className="w-10 h-10 bg-[#00A651] text-white rounded-full flex items-center justify-center font-bold text-sm">{review.initials}</div>
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

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-3">A.O. Smith RO Service FAQs</h2>
            <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Find answers to common questions about A.O. Smith RO services</p>
          </div>
          <div className="space-y-3">
            {[
              { q: 'How long does A.O. Smith RO service take?', a: 'Our technicians aim to resolve most A.O. Smith RO issues within 60 minutes of arriving at your doorstep. For major repairs, it might take a little longer, but we will inform you beforehand.' },
              { q: 'Do you provide a warranty on A.O. Smith RO repairs?', a: 'Yes, we provide a 90-day warranty on all A.O. Smith RO repairs and replaced parts. We only use genuine compatible spare parts.' },
              { q: 'How do I make the payment for A.O. Smith RO service?', a: 'You can pay via Cash, UPI (GPay, PhonePe, Paytm), or Card after the A.O. Smith RO service is completed. No advance payment required.' },
              { q: 'Which areas in Bangalore do you cover for A.O. Smith RO service?', a: 'We cover all major areas in Bangalore including Whitefield, Koramangala, HSR Layout, Indiranagar, Jayanagar, Electronic City, and more.' },
              { q: 'Do you service old A.O. Smith models?', a: 'Yes, we service all A.O. Smith models — old and new, including discontinued ones.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-inter font-semibold text-gray-900 text-sm md:text-base mb-2">{faq.q}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-3">A.O. Smith RO Services We Provide in Bangalore</h2>
            <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>We service all A.O. Smith RO water purifier models in Bangalore</p>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
            {['A.O. Smith RO Service Bangalore', 'A.O. Smith Water Purifier Repair', 'A.O. Smith Service Center Near Me', 'A.O. Smith RO Repair', 'A.O. Smith Filter Change', 'A.O. Smith RO Installation Bangalore', 'A.O. Smith RO AMC Plans', 'A.O. Smith RO Motor Repair', 'A.O. Smith RO Leakage Fix', 'A.O. Smith Water Purifier Service Center', 'A.O. Smith RO Service Cost', 'A.O. Smith RO Repair Near Me', 'A.O. Smith RO Technician Bangalore', 'A.O. Smith RO Service Whitefield', 'A.O. Smith RO Service Koramangala', 'A.O. Smith RO Service HSR Layout', 'A.O. Smith RO Service Indiranagar', 'A.O. Smith RO Service Jayanagar', 'A.O. Smith RO Service Electronic City', 'A.O. Smith Water Purifier Service', 'A.O. Smith RO Service Same Day', 'A.O. Smith RO Service 24x7', 'A.O. Smith RO Deep Cleaning', 'A.O. Smith RO UV Lamp Replacement', 'A.O. Smith RO Membrane Change', 'A.O. Smith RO Service Doorstep', 'A.O. Smith RO Filter Price Bangalore'].join(' • ')}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}