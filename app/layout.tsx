import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import MobileBottomNav from './components/MobileBottomNav'

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
  description: 'Certified RO service in Bangalore. Same-day water purifier repair, filter change, installation. 60-min response. Call 08050291180.',
  keywords: ['RO service Bangalore', 'RO repair near me', 'Water purifier service Bangalore'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RRXBDKS3Z8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RRXBDKS3Z8');
          `}
        </Script>
      </head>
      <body className="font-inter bg-white text-gray-900 pb-20 md:pb-0 overflow-x-hidden">
        <Navbar />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  )
}