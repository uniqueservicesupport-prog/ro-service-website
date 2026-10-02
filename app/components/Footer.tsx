export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center"><span className="text-white font-bold">R</span></div>
              <h3 className="font-poppins font-bold text-white text-lg">RO Service Center</h3>
            </div>
            <p className="text-sm text-gray-400 font-inter leading-relaxed mb-4">Bangalore's trusted independent RO service provider. Doorstep repair, installation, and AMC.</p>
            <p className="text-xs text-gray-500 font-inter">We are an independent service provider and not affiliated with any brand.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/#services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Legal (Ye wapas add kiya hai) */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="/cookie-policy" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-white transition">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm font-inter">
              <li className="flex items-start gap-2"><span className="text-primary">📞</span><a href="tel:08050291180" className="hover:text-white transition">08050291180</a></li>
              <li className="flex items-start gap-2"><span className="text-primary">✉️</span><a href="mailto:support@roservicecenter.in" className="hover:text-white transition">support@roservicecenter.in</a></li>
              <li className="flex items-start gap-2"><span className="text-primary">📍</span><span>Bangalore, Karnataka, India</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-inter">© 2026 RO Service Center. All rights reserved.</p>
          <p className="text-xs text-gray-500 font-inter">Independent RO Service Provider in Bangalore.</p>
        </div>
      </div>
    </footer>
  )
}