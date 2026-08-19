import { useEffect } from 'react'

const SEO = ({ title, description }) => {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | FYTHCLOTHINGS`
      : 'FYTHCLOTHINGS | Sew • Style • Shine'
    document.title = pageTitle

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])

  return null
}

export default SEO
