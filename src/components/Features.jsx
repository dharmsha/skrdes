'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  FaBolt,
  FaPalette,
  FaHeadset,
  FaShieldAlt,
  FaRocket,
  FaInfinity,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa'

// 👇 Yahan apne features add/edit kar sakte ho
const features = [
  {
    id: 1,
    icon: FaPalette,
    title: 'Premium Designs',
    desc: 'Handcrafted themes, logos & banners with pixel-perfect quality and modern aesthetics.',
    tag: 'Design',
  },
  {
    id: 2,
    icon: FaBolt,
    title: 'Lightning Fast Delivery',
    desc: 'Get your custom designs delivered within 24-48 hours. No delays, no excuses.',
    tag: 'Speed',
  },
  {
    id: 3,
    icon: FaHeadset,
    title: '24/7 Support',
    desc: 'Round-the-clock WhatsApp and chat support for Voice Chat Application services.',
    tag: 'Support',
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: '100% Safe & Secure',
    desc: 'Trusted by 2000+ clients with secure payments and reliable service guarantee.',
    tag: 'Trust',
  },
  {
    id: 5,
    icon: FaRocket,
    title: 'Super Admin Services',
    desc: 'Complete Voice Chat Application management — Admin, Super Admin & Host support.',
    tag: 'Management',
  },
  {
    id: 6,
    icon: FaInfinity,
    title: 'Unlimited Revisions',
    desc: 'We revise until you are 100% satisfied. Your happiness is our priority.',
    tag: 'Quality',
  },
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black py-16 md:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div
          className={`text-center mb-14 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-yellow-500/20 text-xs sm:text-sm font-semibold tracking-wide text-yellow-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            WHY CHOOSE US
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">SRK Designer </span>
            <span className="text-yellow-500">Features</span>
          </h2>

          {/* Subheading */}
          <p className="mt-5 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need for premium designs &amp; Voice Chat Application services — all in one place.
          </p>
        </div>

        {/* ===== FEATURES GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl border border-white/10 bg-[#111111] hover:border-yellow-500/50 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(234,179,8,0.08)] overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 pointer-events-none" />

                {/* Top Row: Icon + Tag */}
                <div className="relative flex items-start justify-between mb-6">
                  {/* Icon box */}
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-tr from-yellow-400/10 to-amber-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-500">
                    <Icon className="text-2xl text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-xl bg-yellow-500/0 group-hover:bg-yellow-500/10 blur-md transition-all duration-500" />
                  </div>

                  {/* Tag */}
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-yellow-400/80 bg-yellow-500/5 border border-yellow-500/20">
                    {feature.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Desc */}
                <p className="relative text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Bottom accent line */}
                <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-yellow-500/40 transition-all duration-500" />
              </div>
            )
          })}
        </div>

        {/* ===== STATS STRIP ===== */}
        <div
          className={`mt-16 md:mt-20 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 md:p-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <Stat number="2000+" label="Happy Clients" />
            <Stat number="10,000+" label="Active Hosts" />
            <Stat number="24/7" label="Support Available" />
            <Stat number="100%" label="Satisfaction Rate" />
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Ready to get started with SRK Designer?
          </p>
          <Link
            href="https://wa.me/919528794938?text=Hi!%20I%20want%20to%20know%20more%20about%20SRK%20Designer%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaStar className="text-xs" />
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

/* ===== STAT COMPONENT ===== */
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
        {number}
      </p>
      <p className="mt-2 text-xs md:text-sm text-gray-400 font-medium tracking-wide">
        {label}
      </p>
    </div>
  )
}