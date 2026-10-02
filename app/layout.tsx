import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import MobileBottomNav from './components/MobileBottomNav'
import Script from 'next/script'

const poppins = Poppins({ 
  weight: ['500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  weight: ['400', '500', '600'], 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RO Service Center Bangalore | 60 Min Doorstep Repair',
  description: 'Bangalore\'s most trusted RO service. Same-day repair, filter change, and installation by certified technicians. 60-minute response. Call 08050291180.',
  keywords: ['RO service Bangalore', 'RO repair near me', 'Water purifier service Bangalore'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-gray-900 pb-20 md:pb-0 overflow-x-hidden">
        
        {/* Google Ads Base Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18441661483"
          strategy="afterInteractive"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18441661483');
          `}
        </Script>

        <Navbar />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  )
}