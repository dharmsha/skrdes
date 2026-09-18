'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaHeart,
} from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  // 👇 Yahan apne social links daalo
  const socials = [
    { icon: FaWhatsapp, href: 'https://wa.me/919528794938', label: 'WhatsApp' },
    { icon: FaInstagram, href: 'https://instagram.com/srkdesigner', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com/@srkdesigner', label: 'YouTube' },
    { icon: FaTelegram, href: 'https://t.me/srkdesigner', label: 'Telegram' },
  ]

  // 👇 Quick links
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'Get a Quote', href: '#quote' },
    { name: 'Contact', href: '#contact' },
  ]

  // 👇 Services links (category pages pe jaayega)
  const serviceLinks = [
    { name: 'Banner Design', href: '/services/banner' },
    { name: 'Logo Design', href: '/services/logo' },
    { name: 'Premium Themes', href: '/services/theme' },
    { name: 'Frame Design', href: '/services/frame' },
    { name: 'Customised GIF', href: '/services/gif' },
    { name: 'SVG Files', href: '/services/svg' },
  ]

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/5">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===== MAIN FOOTER ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 py-14 md:py-20">

          {/* ===== Column 1: Brand ===== */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 p-[2px] bg-gradient-to-tr from-yellow-400 via-amber-400 to-yellow-500 shadow-md shadow-yellow-500/20 group-hover:shadow-yellow-500/50 transition-all duration-500 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="/srk.jpeg"
                    alt="SRK Designer Logo"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                <span className="text-yellow-500">SRK</span>{' '}
                <span className="text-white">Designer</span>
              </span>
            </Link>

            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium design services &amp; Voice Chat Application management. Trusted by 2000+ clients and 10,000+ hosts worldwide.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 hover:text-black hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-amber-500 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/30"
                  >
                    <Icon className="text-base" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* ===== Column 2: Quick Links ===== */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-yellow-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Column 3: Services ===== */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-yellow-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Column 4: Contact ===== */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Get in Touch
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/919528794938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                    <FaWhatsapp className="text-yellow-500" />
                  </span>
                  <span className="pt-2">+91 95287 94938</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919528794938"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                    <FaPhoneAlt className="text-yellow-500" />
                  </span>
                  <span className="pt-2">Call Now</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@srkdesigner.com"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-yellow-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all">
                    <FaEnvelope className="text-yellow-500" />
                  </span>
                  <span className="pt-2">support@srkdesigner.com</span>
                </a>
              </li>
            </ul>

            {/* Small CTA */}
            <Link
              href="#quote"
              className="mt-6 group inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Get a Quote
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* ===== Divider ===== */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ===== Bottom Bar ===== */}
        <div className="py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © {year} <span className="text-yellow-500 font-semibold">SRK Designer</span>. All rights reserved.
          </p>

          <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1.5">
            Made with
            <FaHeart className="text-yellow-500 animate-pulse text-xs" />
            by SRK Designer
          </p>

        </div>

      </div>

      {/* Bottom glow line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

    </footer>
  )
}