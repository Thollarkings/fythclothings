import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn about FYTHCLOTHINGS, founded by Ronke Faith Oyeniyi. Our mission is to create beautifully crafted, quality garments and share practical fashion knowledge."
      />

      {/* Hero Banner */}
      <section className="relative bg-black text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/fythclothings%20about3.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About FYTHCLOTHINGS
          </h1>
          <p className="text-2xl text-gold font-light">
            Sew • Style • Shine
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Founded by <strong className="text-gold">Ronke Faith Oyeniyi</strong>,
                FYTHCLOTHINGS is more than a fashion school — it is a creative
                sanctuary where aspiring designers and sewing enthusiasts come
                together to learn, grow, and build meaningful careers in fashion.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our founder began her journey in fashion with a deep love for
                transforming fabric into art. Through years of hands-on
                experience in garment construction, pattern drafting, and
                styling, she developed a teaching methodology that blends
                technical precision with creative freedom — a philosophy she now
                shares with every student.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We create beautifully crafted, quality garments and share
                practical fashion knowledge that helps aspiring designers and
                sewing enthusiasts develop their skills, express their
                creativity, and turn their passion into purposeful
                opportunities.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                To build a community where creativity is nurtured, skills are
                empowered and every individual has the confidence to Sew,
                Style and Shine.
              </p>
              <div className="pt-4">
                <Link
                  to="/register"
                  className="inline-block bg-pink text-white font-bold py-3 px-8 rounded-full hover:bg-pink/90 transition-transform hover:scale-105"
                >
                  Start Learning
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-50 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-6xl font-bold text-gold">RF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About FYTHCLOTHINGS
              </h2>
              <div className="w-16 h-1 bg-pink rounded-full mb-6" />
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Founder FYTHClothings is a wholly Nigerian indigenous company
                registered with the corporate affairs commission. We are a
                creative fashion brand that specializes in bespoke tailoring,
                fashion design, ready-to-wear collections, and fashion
                consultations. Our team is committed to delivering designs that
                blend modern trends with timeless tailoring and craftsmanship.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Our quality commitment is unparalleled in delivering and
                upholding quality consciousness to start quality, our quality
                firmly established.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-md">
                <div className="text-pink text-6xl font-serif mb-4">"</div>
                <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">
                  Fashion designer, visionary, and entrepreneur whose work
                  embodies elegance, innovation, and cultural pride. With an
                  eye for detail and a passion for creating, she transforms
                  ideas into stunning wearable art.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center">
                    <span className="text-gold font-bold">JB</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Jon Bada</p>
                    <p className="text-sm text-gray-400">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gold mb-3">
                Creativity First
              </h3>
              <p className="text-gray-700">
                We nurture every student&rsquo;s unique creative voice while
                teaching proven technical foundations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gold mb-3">
                Skill Empowerment
              </h3>
              <p className="text-gray-700">
                Our structured curriculum builds confidence from beginner to
                advanced levels through hands-on practice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gold mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We foster a supportive environment where students inspire and
                learn from each other.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gold mb-3">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Every technique we teach meets the highest standards of garment
                construction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gold mb-3">
                Purposeful Growth
              </h3>
              <p className="text-gray-700">
                We help students turn their passion into purposeful
                opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gold mb-3">
                Integrity
              </h3>
              <p className="text-gray-700">
                We operate with honesty, transparency, and respect in all
                interactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
