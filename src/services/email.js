import { init, send } from '@emailjs/browser'

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export const sendAdminNotification = async (formData) => {
  return send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    { formData },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
}

export const sendUserConfirmation = async (formData) => {
  return send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    { formData },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
}
