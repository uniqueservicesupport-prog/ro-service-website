export default function About() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-6">About Us</h1>
      
      <p className="text-gray-600 font-inter mb-4 leading-relaxed">
        Welcome to RO Service Center, Bangalore's trusted independent RO service provider. We are a team of certified technicians offering fast, reliable, and affordable water purifier repair and maintenance services at your doorstep.
      </p>
      
      <p className="text-gray-600 font-inter mb-4 leading-relaxed">
        With over 10,000+ satisfied customers, we specialize in RO repair, filter replacement, new installation, and Annual Maintenance Contracts (AMC). We use high-quality compatible spare parts to ensure the longevity of your water purifier.
      </p>

      <h2 className="font-poppins text-2xl font-bold mt-8 mb-4 text-gray-900">Our Services</h2>
      <ul className="list-disc pl-6 text-gray-600 font-inter mb-6 space-y-2 leading-relaxed">
        <li>RO Service & Repair (All Brands)</li>
        <li>Filter Replacement</li>
        <li>AMC Maintenance Plans</li>
        <li>Installation & Relocation</li>
        <li>Water Leak Fix & Deep Cleaning</li>
      </ul>

      <h2 className="font-poppins text-2xl font-bold mt-8 mb-4 text-gray-900">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-600 font-inter mb-6 space-y-2 leading-relaxed">
        <li>60-Minute Doorstep Response</li>
        <li>Certified & Experienced Technicians</li>
        <li>90-Day Warranty on Repairs</li>
        <li>Transparent Pricing - No Hidden Charges</li>
        <li>Available 24x7 for Emergencies</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <p className="text-gray-800 font-inter leading-relaxed">
          <strong>Please Note:</strong> RO Service Center is an independent service provider. We are not an authorized dealer, distributor, or official service partner of any water purifier brand. We service all major brands including Livpure, Aquaguard, Kent, Pureit, and others as an independent third-party service provider.
        </p>
      </div>

      <p className="text-gray-600 font-inter leading-relaxed">
        Our mission is simple: to ensure every home in Bangalore has access to clean and safe drinking water without any hassle.
      </p>
    </div>
  )
}