'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function BookingForm() {
  const router = useRouter()
  const pathname = usePathname()

  // URL ke hisaab se brand detect karo
  let brandName = 'RO'
  if (pathname?.startsWith('/kent-service')) brandName = 'Kent'
  else if (pathname?.startsWith('/havells-service')) brandName = 'Havells'
  else if (pathname?.startsWith('/pureit-service')) brandName = 'Pureit'
  else if (pathname?.startsWith('/aquaguard-service')) brandName = 'Aquaguard'
  else if (pathname?.startsWith('/livpure-service')) brandName = 'Livpure'
  else if (pathname?.startsWith('/lg-service')) brandName = 'LG'
  else if (pathname?.startsWith('/vguard-service')) brandName = 'V-Guard'

  const [formData, setFormData] = useState({
    name: '', mobile: '', pincode: '', service: 'RO Service & Repair'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const accessKey = "1d5d47df-4a9a-4f20-ba78-7aa07022894e"

    const formPayload = new FormData()
    formPayload.append("access_key", accessKey)
    formPayload.append("Name", formData.name)
    formPayload.append("Mobile", formData.mobile)
    formPayload.append("Pincode", formData.pincode)
    formPayload.append("Service", formData.service)
    formPayload.append("Brand", brandName)
    formPayload.append("subject", `New ${brandName} RO Service Request from ${formData.name}`)

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
    <section id="book" className="py-12 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gray-50 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
          
          {/* Simple Heading */}
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Book Your Appointment Today
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" 
                placeholder="Enter your full name" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Mobile Number</label>
              <input 
                type="tel" 
                inputMode="numeric"
                name="mobile" 
                required 
                pattern="[0-9]{10}" 
                value={formData.mobile} 
                onChange={handleChange} 
                className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" 
                placeholder="10-digit number" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Pincode</label>
              <input 
                type="text" 
                inputMode="numeric"
                name="pincode" 
                required 
                pattern="[0-9]{6}" 
                value={formData.pincode} 
                onChange={handleChange} 
                className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white" 
                placeholder="6-digit pincode" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">Service Type</label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition bg-white"
              >
                <option>RO Service & Repair</option>
                <option>Filter Replacement</option>
                <option>AMC Maintenance Plans</option>
                <option>Installation & Relocation</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-accent hover:bg-orange-600 disabled:bg-gray-400 text-white font-poppins font-bold py-4 rounded-lg text-base md:text-lg transition duration-300 mt-4 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
            >
              {isSubmitting ? 'Booking...' : `Book ${brandName} Service Now →`}
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}