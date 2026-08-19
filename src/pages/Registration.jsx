import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import { sendAdminNotification, sendUserConfirmation } from '../services/email'

const Registration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    residentialAddress: '',
    occupation: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    
    // Sewing Experience
    sewingExperience: '',
    sewingWhereLearned: '',
    currentLevel: '',
    currentSewingSkills: '',
    
    // Training Interest
    trainingInterests: [],
    mainTrainingGoal: '',
    
    // Training Details
    trainingType: '',
    preferredDays: '',
    preferredTime: '',
    preferredDuration: '',
    
    // Tools & Materials
    ownSewingMachine: '',
    basicSewingTools: '',
    canProvideMaterials: '',
    
    // Payment Information
    trainingFee: '',
    amountPaid: '',
    balance: '',
    paymentDate: '',
    paymentMethod: '',
    
    // Declaration
    studentName: '',
    declarationDate: '',
    studentSignature: '',
    declarationConsent: false,
    
    // Admin fields
    registrationNumber: '',
    trainingStartDate: '',
    trainer: '',
    studentStatus: 'Active',
    remarks: '',
  })

  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle') // idle | loading | success | error
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.trainingInterests, value]
        : formData.trainingInterests.filter((item) => item !== value)
      setFormData((prev) => ({ ...prev, trainingInterests: updatedInterests }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('idle')
    setSubmitError('')

    // Basic validation
    const newErrors = {}
    
    // Required fields
    const requiredFields = [
      'fullName', 'email', 'phone', 'sewingExperience',
      'currentLevel', 'mainTrainingGoal', 'trainingType',
      'preferredDays', 'preferredTime', 'ownSewingMachine',
      'basicSewingTools', 'canProvideMaterials',
      'trainingFee', 'amountPaid', 'balance', 'paymentMethod',
      'studentName', 'declarationDate', 'studentSignature'
    ]
    
    requiredFields.forEach(field => {
      if (!formData[field] || (typeof formData[field] === 'string' && formData[field].trim() === '')) {
        newErrors[field] = 'This field is required'
      }
    })

    if (!formData.declarationConsent) {
      newErrors.declarationConsent = 'You must agree to the student declaration to continue'
    }
    
    // Email validation
    if (formData.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // Phone validation
    if (formData.phone && !/^\+?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitStatus('loading')
      try {
        await sendAdminNotification(formData)
        await sendUserConfirmation(formData)
        setSubmitStatus('success')
      } catch (error) {
        console.error('Email send failed:', error)
        setSubmitError('Registration saved, but email notification failed. We will contact you shortly.')
        setSubmitStatus('error')
      }
    } else {
      setSubmitStatus('error')
      setSubmitError('Please fill in all required fields')
    }
  }

  // Calculate balance when payment fields change
  const calculateBalance = () => {
    const fee = parseFloat(formData.trainingFee) || 0
    const paid = parseFloat(formData.amountPaid) || 0
    return (fee - paid).toFixed(2)
  }

  useEffect(() => {
    setFormData(prev => ({ ...prev, balance: calculateBalance() }))
  }, [formData.trainingFee, formData.amountPaid])

  const interestOptions = [
    'Basic Sewing Pattern Drafting',
    'Cutting & Sewing',
    'Bustier / Corset Dressmaking',
    'Dressmaking',
    'Blouse',
    'Trousers',
    'Children\'s Wear',
    'Men\'s Wear',
    'Finishing Techniques',
    'Fashion Business',
    'Other',
  ]

  const levelOptions = ['Beginner', 'Intermediate', 'Advanced']
  const trainingTypeOptions = ['In-person', 'Online', 'One-on-One', 'Group']
  const paymentMethodOptions = ['Transfer', 'Cash', 'Other']

  return (
    <>
      <SEO
        title="Registration"
        description="Register for FYTHCLOTHINGS fashion school training. Learn sewing skills with Ronke Faith Oyeniyi. Create beautifully crafted, quality garments and develop your fashion career."
      />

      {/* Hero Banner */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Student Registration
          </h1>
          <p className="text-xl md:text-2xl text-gold font-light">
            Begin your journey to Sew • Style • Shine
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* 1. Personal Information */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  1. PERSONAL INFORMATION
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-black mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">
                      Phone / WhatsApp <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="+234 XXX XXX XXXX"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-bold text-black mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="residentialAddress" className="block text-sm font-bold text-black mb-2">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      id="residentialAddress"
                      name="residentialAddress"
                      value={formData.residentialAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Your full address"
                    />
                  </div>

                  <div>
                    <label htmlFor="occupation" className="block text-sm font-bold text-black mb-2">
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Your current occupation"
                    />
                  </div>

                  <div>
                    <label htmlFor="emergencyContactName" className="block text-sm font-bold text-black mb-2">
                      Emergency Contact Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="emergencyContactName"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Contact person's name"
                    />
                    {errors.emergencyContactName && <p className="text-red-600 text-sm mt-1">{errors.emergencyContactName}</p>}
                  </div>

                  <div>
                    <label htmlFor="emergencyContactPhone" className="block text-sm font-bold text-black mb-2">
                      Emergency Contact Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="emergencyContactPhone"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="+234 XXX XXX XXXX"
                    />
                    {errors.emergencyContactPhone && <p className="text-red-600 text-sm mt-1">{errors.emergencyContactPhone}</p>}
                  </div>
                </div>
              </div>

              {/* 2. Sewing Experience */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  2. SEWING EXPERIENCE
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">
                      Have you learnt sewing before? <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-6">
                       <label className="flex items-center text-gray-800">
                         <input
                           type="radio"
                           name="sewingExperience"
                           value="Yes"
                           checked={formData.sewingExperience === 'Yes'}
                           onChange={handleChange}
                           required
                           className="mr-2 text-gold focus:ring-gold"
                         />
                         Yes
                       </label>
                       <label className="flex items-center text-gray-800">
                         <input
                           type="radio"
                           name="sewingExperience"
                           value="No"
                           checked={formData.sewingExperience === 'No'}
                           onChange={handleChange}
                           required
                           className="mr-2 text-gold focus:ring-gold"
                         />
                         No
                       </label>
                    </div>
                    {errors.sewingExperience && <p className="text-red-600 text-sm mt-1">{errors.sewingExperience}</p>}
                  </div>

                  {formData.sewingExperience && (
                    <div>
                      <label htmlFor="sewingWhereLearned" className="block text-sm font-bold text-black mb-2">
                        Where / how did you learn? <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="sewingWhereLearned"
                        name="sewingWhereLearned"
                        value={formData.sewingWhereLearned}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                        placeholder="e.g., Self-taught, Course, Family member, etc."
                      />
                      {errors.sewingWhereLearned && <p className="text-red-600 text-sm mt-1">{errors.sewingWhereLearned}</p>}
                    </div>
                  )}

                  <div>
                    <label htmlFor="currentLevel" className="block text-sm font-bold text-black mb-2">
                      Current Level <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="currentLevel"
                      name="currentLevel"
                      value={formData.currentLevel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="">Select your level</option>
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.currentLevel && <p className="text-red-600 text-sm mt-1">{errors.currentLevel}</p>}
                  </div>

                  <div>
                    <label htmlFor="currentSewingSkills" className="block text-sm font-bold text-black mb-2">
                      What can you currently sew?
                    </label>
                    <textarea
                      id="currentSewingSkills"
                      name="currentSewingSkills"
                      value={formData.currentSewingSkills}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none resize-y"
                      placeholder="Describe your current sewing abilities and projects"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* 3. Training Interest */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  3. TRAINING INTEREST
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-3">
                      Select areas you would like to learn: <span className="text-red-600">*</span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                       {interestOptions.map((interest) => (
                         <label key={interest} className="flex items-center text-gray-800">
                           <input
                             type="checkbox"
                             name="trainingInterests"
                             value={interest}
                             checked={formData.trainingInterests.includes(interest)}
                             onChange={handleChange}
                             className="mr-2 text-gold focus:ring-gold"
                           />
                           <span className="text-sm text-gray-800">{interest}</span>
                         </label>
                       ))}
                    </div>
                    {formData.trainingInterests.length === 0 && (
                      <p className="text-red-600 text-sm mt-1">Please select at least one training area</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mainTrainingGoal" className="block text-sm font-bold text-black mb-2">
                      Main Goal for the Training <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="mainTrainingGoal"
                      name="mainTrainingGoal"
                      value={formData.mainTrainingGoal}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none resize-y"
                      placeholder="Describe what you hope to achieve through this training"
                    ></textarea>
                    {errors.mainTrainingGoal && <p className="text-red-600 text-sm mt-1">{errors.mainTrainingGoal}</p>}
                  </div>
                </div>
              </div>

              {/* 4. Training Details */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  4. TRAINING DETAILS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="trainingType" className="block text-sm font-bold text-black mb-2">
                      Preferred Training Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="trainingType"
                      name="trainingType"
                      value={formData.trainingType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="">Select training type</option>
                      {trainingTypeOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.trainingType && <p className="text-red-600 text-sm mt-1">{errors.trainingType}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferredDays" className="block text-sm font-bold text-black mb-2">
                      Preferred Days <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="preferredDays"
                      name="preferredDays"
                      value={formData.preferredDays}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="">Select preferred days</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    {errors.preferredDays && <p className="text-red-600 text-sm mt-1">{errors.preferredDays}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-bold text-black mb-2">
                      Preferred Time <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                      <option value="Afternoon (1PM - 5PM)">Afternoon (1PM - 5PM)</option>
                      <option value="Evening (5PM - 9PM)">Evening (5PM - 9PM)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferredDuration" className="block text-sm font-bold text-black mb-2">
                      Preferred Duration <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="preferredDuration"
                      name="preferredDuration"
                      value={formData.preferredDuration}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="">Select duration</option>
                      <option value="1 month">1 month</option>
                      <option value="3 months">3 months</option>
                      <option value="6 months">6 months</option>
                      <option value="12 months">12 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    {errors.preferredDuration && <p className="text-red-600 text-sm mt-1">{errors.preferredDuration}</p>}
                  </div>
                </div>
              </div>

              {/* 5. Tools & Materials */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  5. TOOLS & MATERIALS
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Own sewing machine? <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-6">
                       <label className="flex items-center gap-2 text-gray-800">
                         <input
                           type="radio"
                           name="ownSewingMachine"
                           value="Yes"
                           checked={formData.ownSewingMachine === "Yes"}
                           onChange={handleChange}
                           className="text-gold focus:ring-gold"
                         />
                         Yes
                       </label>
                       <label className="flex items-center gap-2 text-gray-800">
                         <input
                           type="radio"
                           name="ownSewingMachine"
                           value="No"
                           checked={formData.ownSewingMachine === "No"}
                           onChange={handleChange}
                           className="text-gold focus:ring-gold"
                         />
                         No
                       </label>
                    </div>
                    {errors.ownSewingMachine && <p className="text-red-600 text-sm mt-1">{errors.ownSewingMachine}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Basic sewing tools? <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-6">
                       <label className="flex items-center gap-2 text-gray-800">
                         <input
                           type="radio"
                           name="basicSewingTools"
                           value="Yes"
                           checked={formData.basicSewingTools === "Yes"}
                           onChange={handleChange}
                           className="text-gold focus:ring-gold"
                         />
                         Yes
                       </label>
                       <label className="flex items-center gap-2 text-gray-800">
                         <input
                           type="radio"
                           name="basicSewingTools"
                           value="No"
                           checked={formData.basicSewingTools === "No"}
                           onChange={handleChange}
                           className="text-gold focus:ring-gold"
                         />
                         No
                       </label>
                    </div>
                    {errors.basicSewingTools && <p className="text-red-600 text-sm mt-1">{errors.basicSewingTools}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-3">
                      Can provide materials? <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-6">
                       <label className="flex items-center text-gray-800">
                         <input
                           type="radio"
                           name="canProvideMaterials"
                           value="Yes"
                           checked={formData.canProvideMaterials === 'Yes'}
                           onChange={handleChange}
                           required
                           className="mr-2 text-gold focus:ring-gold"
                         />
                         Yes
                       </label>
                       <label className="flex items-center text-gray-800">
                         <input
                           type="radio"
                           name="canProvideMaterials"
                           value="No"
                           checked={formData.canProvideMaterials === 'No'}
                           onChange={handleChange}
                           required
                           className="mr-2 text-gold focus:ring-gold"
                         />
                         No
                       </label>
                    </div>
                    {errors.canProvideMaterials && <p className="text-red-600 text-sm mt-1">{errors.canProvideMaterials}</p>}
                  </div>
                </div>
              </div>

              {/* 6. Payment Information */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  6. PAYMENT INFORMATION
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="trainingFee" className="block text-sm font-bold text-black mb-2">
                      Training Fee (₦) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="trainingFee"
                      name="trainingFee"
                      value={formData.trainingFee}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Enter training fee"
                    />
                    {errors.trainingFee && <p className="text-red-600 text-sm mt-1">{errors.trainingFee}</p>}
                  </div>

                  <div>
                    <label htmlFor="amountPaid" className="block text-sm font-bold text-black mb-2">
                      Amount Paid (₦) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="amountPaid"
                      name="amountPaid"
                      value={formData.amountPaid}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Enter amount paid"
                    />
                    {errors.amountPaid && <p className="text-red-600 text-sm mt-1">{errors.amountPaid}</p>}
                  </div>

                  <div>
                    <label htmlFor="balance" className="block text-sm font-bold text-black mb-2">
                      Balance (₦)
                    </label>
                    <input
                      type="text"
                      id="balance"
                      name="balance"
                      value={`₦${calculateBalance()}`}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 text-gray-600"
                      placeholder="Balance will be calculated"
                    />
                  </div>

                  <div>
                    <label htmlFor="paymentDate" className="block text-sm font-bold text-black mb-2">
                      Payment Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="paymentDate"
                      name="paymentDate"
                      value={formData.paymentDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    />
                    {errors.paymentDate && <p className="text-red-600 text-sm mt-1">{errors.paymentDate}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="paymentMethod" className="block text-sm font-bold text-black mb-2">
                      Payment Method <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="">Select payment method</option>
                      {paymentMethodOptions.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                    {errors.paymentMethod && <p className="text-red-600 text-sm mt-1">{errors.paymentMethod}</p>}
                  </div>
                </div>
              </div>

              {/* 7. Student Declaration */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-8 pb-4 border-b-4 border-gold">
                  7. STUDENT DECLARATION
                </h2>
                <div className="bg-cream border-2 border-gold p-6 rounded-lg mb-6">
                  <div className="prose text-sm text-gray-700 space-y-3">
                    <p>I confirm that the information I have provided is correct.</p>
                    <p>I understand that learning to sew requires commitment, practice, patience and consistency.</p>
                    <p>I agree to follow the training guidelines of FYTHCLOTHINGS and understand that my progress depends on my attendance, practice and dedication.</p>
                    <p>I also understand and agree to the Training Terms & Conditions provided with this registration form.</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="declarationConsent"
                      checked={formData.declarationConsent}
                      onChange={(e) => setFormData(prev => ({ ...prev, declarationConsent: e.target.checked }))}
                      required
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-gold focus:ring-gold"
                    />
                    <span className="text-sm font-medium text-gray-800">
                      I have read and agree to the student declaration above, including the Training Terms & Conditions. <span className="text-red-600">*</span>
                    </span>
                  </label>
                  {errors.declarationConsent && <p className="text-red-600 text-sm mt-1">{errors.declarationConsent}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="studentName" className="block text-sm font-bold text-black mb-2">
                      Student Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Enter your full name as registered"
                    />
                    {errors.studentName && <p className="text-red-600 text-sm mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label htmlFor="declarationDate" className="block text-sm font-bold text-black mb-2">
                      Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="declarationDate"
                      name="declarationDate"
                      value={formData.declarationDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    />
                    {errors.declarationDate && <p className="text-red-600 text-sm mt-1">{errors.declarationDate}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="studentSignature" className="block text-sm font-bold text-black mb-2">
                      Student Signature / Full Name as Signature <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentSignature"
                      name="studentSignature"
                      value={formData.studentSignature}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Type your full name to sign"
                    />
                    {errors.studentSignature && <p className="text-red-600 text-sm mt-1">{errors.studentSignature}</p>}
                  </div>
                </div>
              </div>

              {/* Admin Fields */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">For FYTHCLOTHINGS Use Only</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="registrationNumber" className="block text-sm font-bold text-black mb-2">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Auto-generated"
                    />
                  </div>

                  <div>
                    <label htmlFor="trainingStartDate" className="block text-sm font-bold text-black mb-2">
                      Training Start Date
                    </label>
                    <input
                      type="date"
                      id="trainingStartDate"
                      name="trainingStartDate"
                      value={formData.trainingStartDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="trainer" className="block text-sm font-bold text-black mb-2">
                      Trainer
                    </label>
                    <input
                      type="text"
                      id="trainer"
                      name="trainer"
                      value={formData.trainer}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-gold focus:outline-none"
                      placeholder="Assigned trainer name"
                    />
                  </div>

                  <div>
                    <label htmlFor="studentStatus" className="block text-sm font-bold text-black mb-2">
                      Student Status
                    </label>
                    <select
                      id="studentStatus"
                      name="studentStatus"
                      value={formData.studentStatus}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-gold focus:outline-none"
                    >
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                      <option value="Withdrawn">Withdrawn</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="remarks" className="block text-sm font-bold text-black mb-2">
                      Remarks
                    </label>
                    <textarea
                      id="remarks"
                      name="remarks"
                      value={formData.remarks}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-gold focus:outline-none resize-y"
                      placeholder="Additional notes"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="bg-black text-white font-bold py-4 px-12 rounded-lg hover:bg-gray-800 transition-colors text-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'loading' ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-green-800 font-medium">Registration submitted successfully!</p>
                  <p className="text-green-700 text-sm mt-1">A confirmation email has been sent to your inbox.</p>
                </div>
              )}

              {submitStatus === 'error' && submitError && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                  <p className="text-red-800 font-medium">{submitError}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>


    </>
  )
}

export default Registration
