import { useState } from 'react'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you! Your message has been sent. We will respond shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact FYTHCLOTHINGS. Founded by Ronke Faith Oyeniyi. Reach us at info@fythclothings.com or +234 800 FYTHCLOTH. We create beautifully crafted, quality garments and share practical fashion knowledge."
      />

      {/* Hero Banner */}
      <section className="relative bg-black text-white py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/contactpage.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gold font-light">
            We&rsquo;d love to hear from you. Reach out to start your creative
            journey.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Have questions about our programs, pricing, or schedule? Fill
                out the form or reach out using any of the methods below.
                We&rsquo;re here to help you Sew, Style, and Shine!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-gold flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 20.25H9m12-12.75v6.75c0 1.102-.897 2-2 2h-1.28a1.5 1.5 0 01-1.414-2.026l.564-.564a1.5 1.5 0 00-.427-2.332l-.52-.173a1.5 1.5 0 01-.427-2.332l.564-.564a1.5 1.5 0 00-2.026-1.414L9 9.75M9 9.75h.75m-.75 0v-.75a1.5 1.5 0 00-1.5-1.5H6a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V9.75m-3-6.75h.008m.008 0v.008A.75.75 0 0012 3.75a.75.75 0 00-.008 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">Address</p>
                    <p className="text-gray-600">
                      Founded by Ronke Faith Oyeniyi, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-gold flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 2.012 1.629 3.675 3.404 3.742V12c0 2.21-.55 4.373-1.636 6.27L.824 20.382c-.43.66-.334 1.512.215 1.976.52.44 1.292.41 1.717-.08.78-.855 1.93-1.7 3.218-2.428A12.039 12.039 0 0012 18.75c2.448 0 4.79.679 6.724 1.896.14.088.306.126.467.126.165 0 .318-.068.43-.206.36-.43.295-1.17-.153-1.576-.87-.866-1.772-1.67-2.822-2.166a12.003 12.003 0 01-6.526-5.556c-.308-.552-.556-1.118-.729-1.69.015-.004.029-.009.043-.029.122-1.372-.19-2.767-.99-3.808A9.016 9.016 0 0012 5.25c1.176 0 2.297.229 3.301.658 1.282.53 2.358 1.338 3.13 2.338.404.48.747.99 1.026 1.52.15.271.392.446.69.446.27 0 .52-.148.65-.404a.748.748 0 00-.376-1.01C16.56 7.622 14.398 6.75 12 6.75c-1.155 0-2.249.228-3.257.643-.872.35-1.686.84-2.402 1.458-.045.041-.079.084-.117.13-.24-.727-.384-1.49-.384-2.289 0-.91.176-1.795.498-2.638A8.662 8.662 0 0012 3.75c1.983 0 3.833.61 5.378 1.748 1.51.983 2.83 2.303 3.79 3.878 1.215 2.025 1.882 4.328 1.882 6.682C22.25 18.645 19.99 21 16.605 22.51c-.017.009-.032.023-.032.044v-2.548a.75.75 0 00-.75-.75c-.355 0-.69-.103-1.001-.338-1.35-.989-2.527-2.242-3.453-3.694-.049-.084-.104-.164-.155-.243a9 9 0 01-.022-11.77 9 9 0 012.937-2.318c.612-.242 1.233-.446 1.861-.61.63-.163 1.261-.3 1.89-.41.525-.086 1.046-.153 1.564-.202a5.25 5.25 0 00-6.724-4.64z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">Email</p>
                    <p className="text-gray-600">info@fythclothings.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-gold flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22.252 11.54A9.75 9.75 0 0112 21.75c-1.456 0-2.83-.253-4.093-.688-1.249 2.054-2.604 3.933-4.06 5.65 4.445 1.332 9.237 1.332 13.682 0 0 0 0 0 0 .001l-.001-.001c-.03.002-.062.003-.093.003A9.75 9.75 0 0112 2.25c1.09 0 2.125.175 3.095.497A9.75 9.75 0 0012 21.75c5.385 0 10-4.365 10-9.75 0-.84-.103-1.66-.29-2.445l.29 2.445c.004.014.006.028.002.015z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 12c0 .621-.086 1.225-.244 1.806-.555-.19-1.153-.306-1.756-.306-1.06 0-2.04.3-2.828.852.63 1.25 1.9 2.2 3.328 2.2 1.428 0 2.698-.56 3.632-1.447l-3.88-3.88A5.97 5.97 0 0112 9.75c.001 0 .001 0 0 0 .375 0 .734.038 1.083.11 0-1.25-.28-2.44-.75-3.515l.003.003.001.004.437.307a5.995 5.995 0 013.462 3.772z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black">Phone / WhatsApp</p>
                    <p className="text-gray-600">+234 800 FYTHCLOTH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink focus:outline-none text-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink focus:outline-none text-black"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink focus:outline-none text-black"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink focus:outline-none text-black"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink focus:outline-none resize-y"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink text-white font-bold py-3 px-6 rounded-full hover:bg-pink/90 transition shadow-lg shadow-pink/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
