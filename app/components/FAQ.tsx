'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { q: 'How long does the service take?', a: 'Our technicians aim to resolve most issues within 60 minutes of arriving at your doorstep. For major repairs, it might take a little longer, but we will inform you beforehand.' },
    { q: 'Do you provide a warranty on repairs?', a: 'Yes, we provide a 90-day warranty on all repairs and replaced parts. We only use genuine compatible spare parts.' },
    { q: 'How do I make the payment?', a: 'You can pay via Cash, UPI (GPay, PhonePe, Paytm), or Card after the service is completed. No advance payment required.' },
    { q: 'Which areas in Bangalore do you cover?', a: 'We cover all major areas in Bangalore including Whitefield, Koramangala, HSR Layout, Indiranagar, Jayanagar, Electronic City, and more.' },
    { q: 'Do you use genuine spare parts?', a: 'Absolutely. We use high-quality compatible spare parts that meet manufacturer specifications to ensure the longevity of your RO.' }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p 
            className="text-gray-600 text-sm md:text-base" 
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Find answers to common questions about our RO services
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition cursor-pointer"
              >
                <span 
                  className="text-gray-900 text-sm md:text-base font-semibold pr-4" 
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {faq.q}
                </span>
                <span className={`text-xl text-primary transition-transform duration-300 font-bold ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`px-4 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-60 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p 
                  className="text-gray-700 text-sm md:text-base leading-relaxed" 
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}