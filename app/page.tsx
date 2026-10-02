import OwnersCorner from './components/OwnersCorner'
import TrustStats from './components/TrustStats'
import OurServices from './components/OurServices'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import SEOKeywords from './components/SEOKeywords'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <OwnersCorner />
      <TrustStats />
      <OurServices />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <SEOKeywords />
      <Footer />
    </main>
  )
}