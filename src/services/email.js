import { init, send } from '@emailjs/browser'

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const formatFormData = (formData) => {
  const sections = [
    { title: 'PERSONAL INFORMATION', fields: ['fullName', 'phone', 'email', 'dateOfBirth', 'residentialAddress', 'occupation', 'emergencyContactName', 'emergencyContactPhone'] },
    { title: 'SEWING EXPERIENCE', fields: ['sewingExperience', 'sewingWhereLearned', 'currentLevel', 'currentSewingSkills'] },
    { title: 'TRAINING INTEREST', fields: ['trainingInterests', 'mainTrainingGoal'] },
    { title: 'TRAINING DETAILS', fields: ['trainingType', 'preferredDays', 'preferredTime', 'preferredDuration'] },
    { title: 'TOOLS & MATERIALS', fields: ['ownSewingMachine', 'basicSewingTools', 'canProvideMaterials'] },
    { title: 'PAYMENT INFORMATION', fields: ['trainingFee', 'amountPaid', 'balance', 'paymentDate', 'paymentMethod'] },
    { title: 'STUDENT DECLARATION', fields: ['studentName', 'declarationDate', 'studentSignature', 'declarationConsent'] },
    { title: 'ADMIN FIELDS', fields: ['registrationNumber', 'trainingStartDate', 'trainer', 'studentStatus', 'remarks'] },
  ]

  return sections
    .map(section => {
      const fields = section.fields
        .map(field => {
          const value = formData[field]
          if (Array.isArray(value)) return `  ${field}: ${value.join(', ')}`
          return `  ${field}: ${value || 'Not provided'}`
        })
        .join('\n')
      return `${section.title}\n${fields}`
    })
    .join('\n\n')
}

export const sendAdminNotification = async (formData) => {
  const formattedData = formatFormData(formData)

  try {
    const response = await send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
      {
        to_name: 'FYTHCLOTHINGS Admin',
        to_email: 'fythclothings@gmail.com',
        title: 'New Student Registration',
        fullName: formData.fullName,
        message: `A new student registration has been submitted.\n\n${formattedData}`,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    console.log('[EmailJS] Admin notification sent', response)
    return response
  } catch (error) {
    console.error('[EmailJS] Admin notification failed', error)
    throw error
  }
}

export const sendUserConfirmation = async (formData) => {
  try {
    const response = await send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_name: formData.fullName,
        fullName: formData.fullName,
        to_email: formData.email,
        subject: 'Registration Confirmation - FYTHCLOTHINGS',
        message: `Dear ${formData.fullName},\n\nThank you for registering with FYTHCLOTHINGS. We have received your registration and will contact you shortly.\n\nBest regards,\nFYTHCLOTHINGS Team`,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    console.log('[EmailJS] User confirmation sent', response)
    return response
  } catch (error) {
    console.error('[EmailJS] User confirmation failed', error)
    throw error
  }
}
