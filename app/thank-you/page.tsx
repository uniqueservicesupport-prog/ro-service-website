'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'

export default function ThankYou() {
  const searchParams = useSearchParams()
  const [backUrl, setBackUrl] = useState('/')
  const [backLabel, setBackLabel] = useState('Back to Home')

  useEffect(() => {
    const from = searchParams.get('from')
    
    const brandMap: { [key: string]: string } = {
      'kent': '/kent-service',
      'havells': '/havells-service',
      'pureit': '/pureit-service',
      'aquaguard': '/aquaguard-service',
      'livpure': '/livpure-service',
      'lg': '/lg-service',
      'vguard': '/vguard-service',
      'aosmith': '/aosmith-service',
    }

    if (from && brandMap[from]) {
      setBackUrl(brandMap[from])
      setBackLabel(`Back to ${from.charAt(0).toUpperCase() + from.slice(1)}`)
    }
  }, [searchParams])

  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18441661483"
        strategy="afterInteractive"
      />
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18441661483');
          gtag('event', 'conversion', {'send_to': 'AW-18441661483/HiSqC0ryyo0dEKvY1d1E'});
        `}
      </Script>

      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100">
          
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 text-green-600">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Booking Successful!
          </h1>
          <p className="text-gray-600 font-inter text-lg mb-8">
            Thank you for choosing our RO service. Our team will contact you shortly on the number you provided.
          </p>

          <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-poppins font-bold text-gray-900 mb-3">What happens next?</h3>
            <ul className="space-y-3 text-sm font-inter text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Our team will call you within 10 minutes to confirm your booking.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>A certified technician will be assigned to your area.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Your technician will arrive at your doorstep within 60 minutes.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:08050291180" className="bg-primary hover:bg-blue-800 text-white font-poppins font-semibold px-8 py-4 rounded-lg transition">
              📞 Call Now
            </a>
            <Link href={backUrl} className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-poppins font-semibold px-8 py-4 rounded-lg transition">
              ← {backLabel}
            </Link>
          </div>

          <p className="text-xs text-gray-400 font-inter mt-8">
            For urgent assistance, call us at <a href="tel:08050291180" className="text-primary font-semibold">08050291180</a>
          </p>

        </div>
      </div>
    </>
  )
}