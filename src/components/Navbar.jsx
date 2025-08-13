import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 sm:space-x-3 text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors" onClick={closeMobileMenu}>
            <span className="text-2xl sm:text-3xl text-blue-600">⚡</span>
            <span>Jagadeesh PowerFactor</span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2 pt-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
                end
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMobileMenu}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-200' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
