import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Bespoke', path: '/bespoke' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1200px]">
      <div className={`glass rounded-full px-8 py-3 flex items-center justify-between transition-shadow duration-300 ${scrolled ? 'shadow-xl shadow-black/20' : ''}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo variant="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[13px] font-medium transition-colors uppercase tracking-wide ${
                  isActive
                    ? 'text-slate-600'
                    : 'text-slate-900 hover:text-blue-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right side: CTA + Search */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/register"
            className="bg-gradient-to-r from-pink to-[#9d174d] text-white font-bold py-2 px-5 rounded-full text-xs uppercase tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-pink/30"
          >
            Register Now
          </Link>
          <button
            className="p-2 text-slate-600 hover:text-pink transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  )
}

export default Header
