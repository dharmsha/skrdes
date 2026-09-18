'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaWhatsapp,
  FaCheckCircle,
  FaPalette,
  FaRocket,
  FaHeadset,
  FaStar,
  FaAward,
  FaUsers,
  FaBolt,
  FaHeart,
} from 'react-icons/fa'

export default function About() {
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

  // 🎯 Highlights
  const highlights = [
    {
      icon: FaPalette,
      title: 'Premium Quality Designs',
      desc: 'Handcrafted themes, logos, banners & GIFs with pixel-perfect attention to detail.',
    },
    {
      icon: FaBolt,
      title: 'Fast Delivery',
      desc: 'Most projects delivered within 24–48 hours with unlimited revisions.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      desc: 'Round-the-clock WhatsApp support for all your design & application needs.',
    },
    {
      icon: FaHeart,
      title: '100% Satisfaction',
      desc: 'We revise until you love it. Your happiness is our priority.',
    },
  ]

  // 📊 Stats
  const stats = [
    { icon: FaUsers, number: '2000+', label: 'Happy Clients' },
    { icon: FaAward, number: '10,000+', label: 'Active Hosts' },
    { icon: FaStar, number: '5.0★', label: 'Average Rating' },
    { icon: FaBolt, number: '24/7', label: 'Support' },
  ]

  // ✅ Skills / Expertise
  const skills = [
    'Logo Design',
    'Banner Design',
    'Premium Themes',
    'Custom Frames',
    'SVG Files',
    'Customised GIFs',
    'Voice Chat App Management',
    'Super Admin Services',
    'Application Support',
    'Admin Panel Setup',
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-black py-16 md:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-yellow-500/20 text-xs sm:text-sm font-semibold tracking-wide text-yellow-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            ABOUT US
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">Who We </span>
            <span className="text-yellow-500">Are</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            SRK Designer — Premium design services &amp; Voice Chat Application management trusted by 2000+ clients worldwide.
          </p>
        </div>

        {/* ===== MAIN ABOUT CARD ===== */}
        <div
          className={`relative rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl overflow-hidden mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-0">

            {/* ===== LEFT: Logo + Visual ===== */}
            <div className="relative p-8 md:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 border-b lg:border-b-0 lg:border-r border-white/5">

              {/* Logo with glow */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-yellow-500/30 blur-2xl scale-110" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.4)]">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                    <Image
                      src="/srk.jpeg"
                      alt="SRK Designer"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-2">
                <span className="text-yellow-500">SRK</span>{' '}
                <span className="text-white">Designer</span>
              </h3>

              <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/80 font-semibold">
                Premium Design Studio
              </p>

              {/* Small feature pills */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['Design', 'Voice Chat', 'Admin', 'Support'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ===== RIGHT: Story ===== */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5">
                Our <span className="text-yellow-500">Story</span>
              </h3>

              <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed">
                <p>
                  <span className="text-yellow-500 font-semibold">SRK Designer</span> is a premium design studio
                  offering top-tier creative services — from logos and themes to banners, frames,
                  customised GIFs and SVG files. We combine artistry with technology to deliver
                  designs that truly represent your brand.
                </p>

                <p>
                  Beyond design, we specialize in <span className="text-white font-semibold">Voice Chat
                  Application management</span> — providing Super Admin, Admin and Host support
                  services. With over <span className="text-yellow-500 font-semibold">2000+ clients</span> and{' '}
                  <span className="text-yellow-500 font-semibold">10,000+ active hosts</span>, we are
                  one of the most trusted names in the industry.
                </p>

                <p>
                  Our mission is simple — deliver <span className="text-white font-semibold">perfect service
                  &amp; support</span> with fast turnaround, unlimited revisions and a personal touch.
                </p>
              </div>

              {/* Checkmarks */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Premium Quality Designs',
                  'Fast 24–48h Delivery',
                  'Unlimited Revisions',
                  'Trusted Worldwide',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCheckCircle className="text-yellow-500 text-xs flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://wa.me/919528794938?text=Hi!%20I%20want%20to%20know%20more%20about%20SRK%20Designer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-base" />
                  Chat with Us
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-yellow-400 bg-white/5 backdrop-blur-md border border-yellow-500/30 hover:bg-yellow-500/10 hover:border-yellow-500/60 transition-all duration-300"
                >
                  Explore Services →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ===== STATS ===== */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-5 md:p-6 text-center hover:border-yellow-500/40 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="inline-flex w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="text-yellow-400 text-lg" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs md:text-sm text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <div className="mb-16">
          <h3
            className={`text-3xl md:text-4xl font-extrabold text-center mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-white">Why </span>
            <span className="text-yellow-500">Choose Us</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border border-white/10 bg-[#111111] p-6 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 pointer-events-none" />

                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400/10 to-amber-500/10 border border-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                    <Icon className="text-xl text-yellow-400" />
                  </div>

                  <h4 className="relative text-base md:text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="relative text-xs md:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ===== SKILLS ===== */}
        <div
          className={`relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 md:p-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
            <span className="text-white">Our </span>
            <span className="text-yellow-500">Expertise</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:text-yellow-400 hover:bg-yellow-500/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}