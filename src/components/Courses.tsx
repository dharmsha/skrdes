'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { servicesData } from '@/data/servicesData'

// 🎯 Tabs
const tabs = [
  { id: 'home',    name: 'Home',            emoji: '🏠' },
  { id: 'banner',  name: 'Banner',          emoji: '🖼️' },
  { id: 'logo',    name: 'Logo',            emoji: '🎨' },
  { id: 'theme',   name: 'Theme',           emoji: '✨' },
  { id: 'frame',   name: 'Frame',           emoji: '🖼️' },
  { id: 'gif',     name: 'Customised GIF',  emoji: '🎁' },
  { id: 'svg',     name: 'SVG Files',       emoji: '📁' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('home')
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

  // 🎯 Active tab ke hisaab se services filter karo
  const allServices = Object.values(servicesData)

  // Agar 'home' tab active hai toh SAARE categories dikhao
  // Warna sirf selected category ka 1 card dikhao
  const displayServices =
    activeTab === 'home'
      ? allServices
      : allServices.filter((s) => s.id === activeTab)

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black py-16 md:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ===== TAB NAVIGATION ===== */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-1.5 sm:p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md shadow-yellow-500/30'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                <span className="text-base sm:text-lg">{tab.emoji}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ===== HEADER ===== */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-white">Our </span>
            <span className="text-yellow-500">Services</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400">
            Choose a service to explore SRK Designer creations
          </p>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div
          className={`grid gap-5 md:gap-6 transition-all duration-500 ${
            displayServices.length === 1
              ? 'grid-cols-1 max-w-md mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayServices.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`group relative rounded-2xl border bg-[#111111] transition-all duration-500 overflow-hidden hover:-translate-y-1 ${
                service.id === activeTab
                  ? 'border-yellow-500/60 shadow-[0_0_30px_rgba(234,179,8,0.15)]'
                  : 'border-white/10 hover:border-yellow-500/40'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Preview Image (first item) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                {service.items[0]?.type === 'video' ? (
                  <video
                    src={service.items[0].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={service.items[0]?.src}
                    alt={service.name}
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0.3'
                    }}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{service.emoji}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  View All ({service.items.length})
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}