const Logo = ({ className = '', variant = 'default' }) => {
  const isLight = variant === 'light'
  return (
    <div className={`inline-flex items-center gap-2 ${className} select-none`}>
      <img src="/logo.jpg" alt="Fyth Clothings logo" className="w-8 h-8 rounded-full object-cover" />
      <span
        className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#c9a227] to-black"
      >
        Fyth
      </span>
      <span
        className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-[#c9a227] to-black"
      >
        Clothings
      </span>
    </div>
  )
}

export default Logo
