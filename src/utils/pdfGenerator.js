import jsPDF from 'jspdf'

export const generateRegistrationPDF = (formData) => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  let y = 20

  const addText = (text, fontSize = 10, fontWeight = 'normal') => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', fontWeight)
    doc.text(text, 15, y, { maxWidth: pageWidth - 30 })
    y += fontSize * 0.4
  }

  const addLine = () => {
    doc.setDrawColor(200, 200, 200)
    doc.line(15, y, pageWidth - 15, y)
    y += 5
  }

  const addSection = (title) => {
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text(title, 15, y)
    y += 6
    addLine()
  }

  const addField = (label, value) => {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(`${label}:`, 15, y)
    doc.setFont('helvetica', 'normal')
    const text = value || 'Not provided'
    doc.text(text, 60, y, { maxWidth: pageWidth - 75 })
    y += 6
  }

  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.text('FYTHCLOTHINGS - Student Registration', pageWidth / 2, y, { align: 'center' })
  y += 10

  addSection('1. PERSONAL INFORMATION')
  addField('Full Name', formData.fullName)
  addField('Phone', formData.phone)
  addField('Email', formData.email)
  addField('Date of Birth', formData.dateOfBirth)
  addField('Residential Address', formData.residentialAddress)
  addField('Occupation', formData.occupation)
  addField('Emergency Contact Name', formData.emergencyContactName)
  addField('Emergency Contact Phone', formData.emergencyContactPhone)

  addSection('2. SEWING EXPERIENCE')
  addField('Previous Experience', formData.sewingExperience)
  addField('Where Learned', formData.sewingWhereLearned)
  addField('Current Level', formData.currentLevel)
  addField('Current Skills', formData.currentSewingSkills)

  addSection('3. TRAINING INTEREST')
  const interests = Array.isArray(formData.trainingInterests) ? formData.trainingInterests.join(', ') : formData.trainingInterests
  addField('Training Areas', interests)
  addField('Main Goal', formData.mainTrainingGoal)

  addSection('4. TRAINING DETAILS')
  addField('Training Type', formData.trainingType)
  addField('Preferred Days', formData.preferredDays)
  addField('Preferred Time', formData.preferredTime)
  addField('Preferred Duration', formData.preferredDuration)

  addSection('5. TOOLS & MATERIALS')
  addField('Own Sewing Machine', formData.ownSewingMachine)
  addField('Basic Sewing Tools', formData.basicSewingTools)
  addField('Can Provide Materials', formData.canProvideMaterials)

  addSection('6. PAYMENT INFORMATION')
  addField('Training Fee', formData.trainingFee ? `₦${formData.trainingFee}` : '')
  addField('Amount Paid', formData.amountPaid ? `₦${formData.amountPaid}` : '')
  addField('Balance', formData.balance ? `₦${formData.balance}` : '')
  addField('Payment Date', formData.paymentDate)
  addField('Payment Method', formData.paymentMethod)

  addSection('7. STUDENT DECLARATION')
  addField('Student Name', formData.studentName)
  addField('Declaration Date', formData.declarationDate)
  addField('Signature', formData.studentSignature)
  addField('Agreed to Terms', formData.declarationConsent ? 'Yes' : 'No')

  if (y > 250) {
    doc.addPage()
    y = 20
  }

  addSection('ADMIN FIELDS')
  addField('Registration Number', formData.registrationNumber)
  addField('Training Start Date', formData.trainingStartDate)
  addField('Trainer', formData.trainer)
  addField('Student Status', formData.studentStatus)
  addField('Remarks', formData.remarks)

  doc.setFontSize(8)
  doc.setTextColor(100, 100, 100)
  doc.text(`Generated on: ${new Date().toLocaleString()}`, pageWidth / 2, 290, { align: 'center' })

  return doc.output('blob')
}
