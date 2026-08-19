import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ navLinks }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('mousedown', handleClick)
      document.addEventListener('keydown', handleKey)
    }
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <div className="md:hidden" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white focus:outline-none"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className="block w-6 h-0.5 bg-white mb-1 transition-all"></span>
        <span className="block w-6 h-0.5 bg-white mb-1 transition-all"></span>
        <span className="block w-6 h-0.5 bg-white transition-all"></span>
      </button>

      {open && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg py-3 flex flex-col gap-2 border border-blue-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block px-6 py-3 text-sm uppercase tracking-wide font-medium transition-colors ${
                  isActive
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/register"
            onClick={handleNavClick}
            className="block mx-6 mt-2 bg-pink text-white font-bold py-2.5 px-4 rounded text-center hover:bg-pink/90 transition-colors"
          >
            Register Now
          </NavLink>
        </nav>
      )}
    </div>
  )
}

export default MobileMenu
