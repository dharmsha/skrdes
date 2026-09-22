'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 py-16">

      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Logo with Glowing Ring */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-500/30 blur-2xl scale-110" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.4)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black border border-yellow-500/20">
                <Image
                  src="/srk.jpeg"
                  alt="SRK Designer Logo"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-yellow-500">SRK</span>{' '}
          <span className="text-white">Designer</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-300 font-normal mb-12">
          Professional Design &amp; Voice Chat Application Services
        </p>

        {/* Service Lines */}
        <div className="space-y-3 text-base md:text-xl text-white font-normal leading-relaxed max-w-4xl mx-auto">
          <p>SRK Designer for Premium Themes, Logos, SVG Files, Customised Gifts, Frames and Banners.</p>
          <p>Voice Chat Application Manager, Super Admin &amp; Admin Services.</p>
          <p>Application Support and Management Solutions for 2000+ Clients and 10,000+ Hosts.</p>
          <p>Perfect Service &amp; Support for Voice Chat Applications.</p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm md:text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="tel:+919528794938"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm md:text-base font-semibold text-yellow-400 bg-white/5 backdrop-blur-md border border-yellow-500/30 hover:bg-yellow-500/10 hover:border-yellow-500/60 transition-all duration-300"
          >
            Call Now
          </Link>
        </div>
      </div>

      {/* ===== FOUNDER SECTION (same page) ===== */}
      <div className="relative z-10 mt-20 w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(234,179,8,0.1)]">

          {/* Founder Image — BADI + SQUARE */}
          <div className="relative flex-shrink-0 w-full md:w-auto">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl scale-105 rounded-3xl" />

            {/* Image Container — Square with yellow border */}
            <div className="relative w-full md:w-80 lg:w-96 aspect-square rounded-3xl p-[3px] bg-gradient-to-tr from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_60px_rgba(234,179,8,0.4)]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black border border-yellow-500/20">
                <Image
                  src="/sr.jpeg"
                  alt="Founder - SRK Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Founder Info */}
          <div className="text-center md:text-left flex-1">
            <p className="text-yellow-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
              Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SRK Designer
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Founder of SRK Designer — delivering premium design solutions and
              professional voice chat application management for 2000+ clients
              and 10,000+ hosts worldwide.
            </p>

            {/* Founder Contact Button */}
            <Link
              href="tel:+919528794938"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 transition-all duration-300"
            >
              Contact Founder
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}