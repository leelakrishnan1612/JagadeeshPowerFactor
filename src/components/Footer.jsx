export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='%23ffffff' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-lg sm:text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">Jagadeesh</h3>
                <h4 className="text-sm sm:text-base font-bold text-blue-300">PowerFactor</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
              Your trusted partner for comprehensive electrical solutions. 
              Specializing in HT/LT panels, transformers, and maintenance services.
            </p>
            <div className="flex gap-2">
              <a href="#" className="group w-8 h-8 sm:w-9 sm:h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 hover:scale-110 transition-all duration-300 shadow-lg" title="Facebook">
                <span className="text-sm group-hover:scale-110 transition-transform duration-300">📘</span>
              </a>
              <a href="#" className="group w-8 h-8 sm:w-9 sm:h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 hover:scale-110 transition-all duration-300 shadow-lg" title="LinkedIn">
                <span className="text-sm group-hover:scale-110 transition-transform duration-300">💼</span>
              </a>
              <a href="#" className="group w-8 h-8 sm:w-9 sm:h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:scale-110 transition-all duration-300 shadow-lg" title="WhatsApp">
                <span className="text-sm group-hover:scale-110 transition-transform duration-300">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <div className="mb-3">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Quick Links</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full group-hover:w-10 transition-all duration-300"></div>
            </div>
            <div className="space-y-1">
              <a href="/" className="group/link block text-xs sm:text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2 group-hover/link:scale-150 transition-transform duration-300"></span>
                Home
              </a>
              <a href="/about" className="group/link block text-xs sm:text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2 group-hover/link:scale-150 transition-transform duration-300"></span>
                About Us
              </a>
              <a href="/gallery" className="group/link block text-xs sm:text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2 group-hover/link:scale-150 transition-transform duration-300"></span>
                Gallery
              </a>
              <a href="/contact" className="group/link block text-xs sm:text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2 group-hover/link:scale-150 transition-transform duration-300"></span>
                Contact
              </a>
              <a href="/services" className="group/link block text-xs sm:text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2 group-hover/link:scale-150 transition-transform duration-300"></span>
                Services
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="group">
            <div className="mb-3">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Contact Info</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full group-hover:w-10 transition-all duration-300"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 group/item">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <span className="text-xs">📍</span>
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium">Address</p>
                  <p className="text-xs text-gray-400">123 Industrial Zone, Electrical Street</p>
                </div>
              </div>
              <div className="flex items-start gap-2 group/item">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <span className="text-xs">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium">Phone</p>
                  <p className="text-xs text-gray-400">+91 893 962 0577</p>
                </div>
              </div>
              <div className="flex items-start gap-2 group/item">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <span className="text-xs">✉️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium">Email</p>
                  <p className="text-xs text-gray-400">info@jagadeeshpowerfactor.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2 group/item">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <span className="text-xs">🕒</span>
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium">Working Hours</p>
                  <p className="text-xs text-gray-400">Mon-Sat: 8AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/20 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <p className="text-xs sm:text-sm text-white font-medium">Jagadeesh PowerFactor</p>
            </div>
            <div className="flex gap-3 text-xs text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-1">© {new Date().getFullYear()} Jagadeesh PowerFactor. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              Certified Electrical Contractors
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              ISO 9001:2015
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
              Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}


