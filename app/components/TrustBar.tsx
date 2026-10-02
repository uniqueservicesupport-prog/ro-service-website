export default function TrustBar() {
  const items = [
    { icon: '🛡️', text: '90-Day Warranty' },
    { icon: '⚡', text: '60-Min Response' },
    { icon: '👨‍🔧', text: 'Certified Technicians' },
    { icon: '✅', text: 'Genuine Parts' },
  ]

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-poppins font-semibold text-gray-800 text-sm md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}