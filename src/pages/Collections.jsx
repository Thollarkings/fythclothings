import SEO from '../components/SEO'

const Collections = () => {
  return (
    <>
      <SEO
        title="Collections"
        description="Explore FYTHCLOTHINGS collections. Coming soon."
      />

      <section className="relative bg-black text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/collectionspage.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#c9a227] to-black drop-shadow-md">
            Collections
          </h1>
          <p className="text-xl md:text-2xl text-gold font-light">
            Coming Soon
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <span className="text-5xl">✨</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Something Special is on the Way
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are crafting a stunning collection of ready-to-wear pieces and
            bespoke designs that blend modern trends with timeless tailoring.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Availability is <span className="font-semibold text-slate-800">currently pending</span>.
            Please check back soon for the official launch.
          </p>

          <div className="inline-flex items-center gap-3 text-gold font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse delay-100" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse delay-200" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Collections
