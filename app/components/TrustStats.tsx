export default function TrustStats() {
  const stats = [
    { value: '4.9★', label: 'Average Rating' },
    { value: '10,000+', label: 'Happy Customers' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
              <p className="font-poppins text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-blue-50 text-xs md:text-sm font-inter uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}