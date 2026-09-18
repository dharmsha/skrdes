'use client'

import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 md:py-24 px-4"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-[#111111]/80 backdrop-blur-xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.5)] p-8 md:p-12 border border-white/10">

        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold w-fit mx-auto">
            <FaWhatsapp />
            QUICK CONTACT
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white tracking-tight">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Have a question or want to discuss a project? Reach out directly on WhatsApp — we reply fast.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`https://wa.me/919528794938?text=${encodeURIComponent(
              'Hi SRK Designer! I want to know more about your services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#25D366] hover:bg-[#1ebe5c] text-white px-8 py-4 rounded-2xl text-center font-bold text-base md:text-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/40 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </Link>

          <Link
            href="tel:+919528794938"
            className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-yellow-500/40 text-white px-8 py-4 rounded-2xl text-center font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <FaPhoneAlt className="text-yellow-400" />
            Call Now
          </Link>
        </div>

        {/* Info Strip */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-8 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            Mon–Sat · 10:00 AM – 8:00 PM
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            support@srkdesigner.com
          </span>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Prefer a detailed enquiry? Fill out the quote form above.
        </p>

      </div>
    </section>
  )
}