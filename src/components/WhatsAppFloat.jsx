'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999?text=नमस्ते%20Prime%20Skill%20Institute!%20मुझे%20प्रशिक्षण%20के%20बारे%20में%20जानकारी%20चाहिए।"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-400/40 hover:scale-110 transition-transform duration-200 text-3xl md:text-4xl"
      aria-label="WhatsApp Inquiry"
    >
      <FaWhatsapp />
    </a>
  )
}