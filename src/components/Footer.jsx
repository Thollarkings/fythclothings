import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Register', path: '/register' },
    ],
  }

  return (
    <footer className="bg-[#090d16] text-gray-400 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
             <div className="flex items-center gap-2 mb-4">
               <img src="/logo.jpg" alt="Fyth Clothings" className="w-8 h-8 rounded-full object-cover" />
               <span className="text-white font-bold text-lg">FythClothings</span>
             </div>
            <p className="text-sm text-gray-400 mb-4">
              Sew • Style • Shine
            </p>
            <p className="text-sm text-gray-400">
              Creating beautifully crafted, quality garments and sharing
              practical fashion knowledge.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-pink transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink hover:bg-white/10 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink hover:bg-white/10 transition-colors">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink hover:bg-white/10 transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-6">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <span className="font-medium text-gray-300">Contact:</span>{' '}
              founded by Ronke Faith Oyeniyi
            </div>
            <div>
              <span className="font-medium text-gray-300">Email:</span>{' '}
              info@fythclothings.com
            </div>
            <div>
              <span className="font-medium text-gray-300">Phone/WhatsApp:</span>{' '}
              +234 800 FYTHCLOTH
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} FYTHCLOTHINGS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
