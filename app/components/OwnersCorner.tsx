'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OwnersCorner() {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState('RO Service & Repair')
  const [formData, setFormData] = useState({
    name: '', pincode: '', mobile: '', address: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const accessKey = "1d5d47df-4a9a-4f20-ba78-7aa07022894e"

    const formPayload = new FormData()
    formPayload.append("access_key", accessKey)
    formPayload.append("Name", formData.name)
    formPayload.append("Pincode", formData.pincode)
    formPayload.append("Mobile", formData.mobile)
    formPayload.append("Address", formData.address)
    formPayload.append("Service", selectedService)
    formPayload.append("subject", `New Service Request from Website`)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      })
      const data = await response.json()
      if (data.success) {
        router.push('/thank-you')
      } else {
        alert("Kuch error aaya. Dobara try karein.")
        setIsSubmitting(false)
      }
    } catch (error) {
      alert("Network error. Dobara try karein.")
      setIsSubmitting(false)
    }
  }

  return (
    <section id="book-section" className="bg-gradient-to-b from-blue-50 to-white pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
          <img 
            src="/ro-banner.png" 
            alt="RO Water Purifier Service Banner" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Book RO Repair Service Heading */}
        <div className="text-center mb-10">
          <h2 className="font-inter text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Book RO Repair Service
          </h2>
          <p 
            className="text-gray-700 text-sm md:text-base leading-relaxed" 
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            We provide exclusive doorstep RO repair service in Bangalore within 60 minutes. Book on call <a href="tel:08050291180" className="text-orange-500 font-semibold">08050291180</a> or fill the form below.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-12 max-w-2xl mx-auto">
          
          {/* Service Request Heading */}
          <h3 className="font-poppins text-2xl font-bold text-primary mb-6 text-center">
            Service Request
          </h3>

          {/* Service Dropdown Box */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 mb-6">
            <label className="block text-xs text-gray-500 font-inter mb-2 uppercase tracking-wide">
              Select Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-transparent text-gray-800 font-inter text-base outline-none cursor-pointer"
            >
              <option>RO Service & Repair</option>
              <option>Filter Replacement</option>
              <option>AMC Maintenance Plans</option>
              <option>Installation & Relocation</option>
            </select>
          </div>

          {/* Book Now Button */}
          {!showForm && (
            <div className="text-center">
              <button 
                type="button"
                onClick={() => setShowForm(true)}
                className="inline-block bg-primary hover:bg-blue-800 text-white font-poppins font-semibold px-10 py-3 rounded-full transition duration-300 cursor-pointer touch-manipulation shadow-lg shadow-blue-500/30"
              >
                Book Now
              </button>
            </div>
          )}

          {/* Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" placeholder="Enter your full name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Pincode</label>
                <input type="text" inputMode="numeric" name="pincode" required pattern="[0-9]{6}" value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" placeholder="6-digit pincode" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Mobile Number</label>
                <input type="tel" inputMode="numeric" name="mobile" required pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" placeholder="10-digit mobile number" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Address</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" placeholder="Flat, Building, Area" />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={isSubmitting} className="flex-1 bg-primary hover:bg-blue-800 disabled:bg-gray-400 text-white font-poppins font-semibold px-6 py-3 rounded-full transition duration-300 cursor-pointer touch-manipulation">
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-poppins font-semibold hover:bg-gray-100 transition cursor-pointer touch-manipulation">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Ladki ki Photo */}
        <div>
          <h3 className="font-poppins text-2xl font-bold text-primary mb-6 text-center">
            Register Service Request
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-xl mx-auto">
            <img src="/customer-care.png" alt="Customer Care Service Representative" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>

      </div>
    </section>
  )
}