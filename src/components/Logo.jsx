const Logo = ({ className = '', variant = 'default' }) => {
  const isLight = variant === 'light'
  return (
    <div className={`inline-flex items-center gap-2 ${className} select-none`}>
      <img src="/logo.jpg" alt="Fyth Clothings logo" className="w-8 h-8 rounded-full object-cover" />
      <span
        className={`text-xl font-bold tracking-wide ${
          isLight ? 'text-white' : 'text-black'
        }`}
      >
        Fyth
      </span>
      <span
        className={`text-xl font-bold tracking-wide ${
          isLight ? 'text-pink' : 'text-gold'
        }`}
      >
        Clothings
      </span>
    </div>
  )
}

export default Logo
