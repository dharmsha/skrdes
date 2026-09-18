'use client'

import { useState } from 'react'
import { FaWhatsapp, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'

const serviceOptions = [
  'Banner Design',
  'Logo Design',
  'Premium Theme',
  'Frame Design',
  'Customised GIF',
  'SVG Files',
  'Voice Chat App Management',
  'Super Admin / Admin Services',
  'Other',
]

const budgetOptions = [
  'Under ₹500',
  '₹500 - ₹1,000',
  '₹1,000 - ₹5,000',
  '₹5,000 - ₹10,000',
  '₹10,000+',
]

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    deadline: '',
    details: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // WhatsApp message build
    const message = `Hi SRK Designer! 👋

*New Quote Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || 'Not provided'}
🎨 Service: ${formData.service}
💰 Budget: ${formData.budget || 'Not specified'}
⏰ Deadline: ${formData.deadline || 'Flexible'}

📝 Details:
${formData.details || 'No extra details'}

Please share a quote. Thank you!`

    const whatsappURL = `https://wa.me/919528794938?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
    setSubmitted(true)
  }

  return (
    <section
      id="quote"
      className="relative min-h-screen overflow-hidden bg-black py-16 md:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-yellow-500/20 text-xs sm:text-sm font-semibold tracking-wide text-yellow-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            GET A QUOTE
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">Request Your </span>
            <span className="text-yellow-500">Quote</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and get a custom quote within 24 hours.
          </p>
        </div>

        {/* ===== FORM CARD ===== */}
        <div className="relative rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone / WhatsApp <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* Row: Service + Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Service Required <span className="text-yellow-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-[#111]">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-[#111]">Select budget (optional)</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Deadline <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="e.g. Within 3 days / Flexible"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Details <span className="text-yellow-500">*</span>
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your project — what you need, style preferences, references, etc."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-500/60 focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm md:text-base font-bold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-xl" />
                Send Quote Request on WhatsApp
                <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-gray-500">
                We usually respond within 24 hours.
              </p>
            </form>
          ) : (
            /* ===== SUCCESS STATE ===== */
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
                <FaCheckCircle className="text-4xl text-yellow-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Request Sent!
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Thank you for reaching out. We&apos;ve opened WhatsApp — just hit send and we&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: '',
                    budget: '',
                    deadline: '',
                    details: '',
                  })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-yellow-400 bg-white/5 backdrop-blur-md border border-yellow-500/30 hover:bg-yellow-500/10 hover:border-yellow-500/60 transition-all duration-300"
              >
                Submit Another Request
              </button>
            </div>
          )}

        </div>

        {/* ===== BOTTOM INFO STRIP ===== */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InfoCard
            title="Fast Response"
            desc="Within 24 hours"
          />
          <InfoCard
            title="Custom Pricing"
            desc="Based on your needs"
          />
          <InfoCard
            title="Free Consultation"
            desc="No hidden charges"
          />
        </div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

/* ===== SMALL INFO CARD ===== */
function InfoCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md px-5 py-4 text-center hover:border-yellow-500/30 transition-all duration-300">
      <p className="text-sm font-bold text-yellow-400">{title}</p>
      <p className="mt-1 text-xs text-gray-400">{desc}</p>
    </div>
  )
}