export default function Contact() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-gray-600 font-inter mb-10">Have a question or need urgent RO service? Reach out to us anytime. We're available 24x7 for emergencies.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <a href="tel:08050291180" className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition">
          <h3 className="font-poppins font-bold text-xl mb-3 text-primary">📞 Call Us</h3>
          <p className="text-gray-800 font-inter font-semibold mb-1">08050291180</p>
          <p className="text-gray-500 text-sm">Available 24x7 for emergencies</p>
        </a>

        <a href="https://wa.me/918050291180" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition">
          <h3 className="font-poppins font-bold text-xl mb-3 text-green-600">💬 WhatsApp Us</h3>
          <p className="text-gray-800 font-inter font-semibold mb-1">Chat with us</p>
          <p className="text-gray-500 text-sm">Quick response within minutes</p>
        </a>

        <a href="mailto:support@roservicecenter.in" className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
          <h3 className="font-poppins font-bold text-xl mb-3 text-primary">✉️ Email Us</h3>
          <p className="text-gray-800 font-inter font-semibold mb-1">support@roservicecenter.in</p>
          <p className="text-gray-500 text-sm">We reply within 2 hours</p>
        </a>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h3 className="font-poppins font-bold text-xl mb-3 text-primary">📍 Service Area</h3>
          <p className="text-gray-800 font-inter font-semibold mb-1">Bangalore, Karnataka</p>
          <p className="text-gray-500 text-sm">Whitefield, Koramangala, HSR, Indiranagar & more</p>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-2xl text-center">
        <h3 className="font-poppins font-bold text-2xl mb-3">Need Urgent RO Service?</h3>
        <p className="text-blue-100 font-inter mb-6">Book online and get a technician at your doorstep in 60 minutes.</p>
        <a href="/#book" className="inline-block bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Book Service Now →
        </a>
      </div>
    </div>
  )
}