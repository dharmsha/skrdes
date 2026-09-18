'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-green-500/5 border-b border-white/40'
          : 'bg-white/40 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 p-[2px] bg-gradient-to-tr from-green-400 via-emerald-400 to-teal-400 shadow-md shadow-green-500/20 group-hover:shadow-green-500/40 transition-all duration-500 group-hover:scale-105">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/srk.jpeg"
                  alt="SRK Designer Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-lg md:text-2xl tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                SRK
              </span>{' '}
              <span className="font-extrabold text-lg md:text-2xl tracking-tight bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Designer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-2 py-1.5 shadow-sm shadow-gray-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-green-700 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 scale-90 group-hover:scale-100" />
              </Link>
            ))}
          </div>

          {/* Call Button - Desktop */}
          <Link
            href="tel:+919528794938"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 shadow-md shadow-green-500/30 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaPhoneAlt className="text-xs" />
            Call Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm text-gray-700 hover:bg-white/80 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="mx-4 mb-4 p-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-green-500/5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-gray-700 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 font-medium transition-all duration-300 border border-transparent hover:border-green-100"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="tel:+919528794938"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full mt-2 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-5 py-3.5 rounded-xl font-semibold shadow-md shadow-green-500/30 transition-all duration-300 transform active:scale-[0.98]"
          >
            <FaPhoneAlt className="text-xs" />
            Call Now
          </Link>
        </div>
      </div>
    </nav>
  )
}