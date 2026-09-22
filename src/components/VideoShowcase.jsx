'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa'

// 🎬 Aapke videos — public folder ke root mein (gif1.mp4 ... gif4.mp4)
const VIDEOS = [
  {
    id: 1,
    src: '/gif1.mp4',
    poster: '', // optional — khaali chhodo toh video ka pehla frame dikhega
    title: 'Premium Logo Animation',
    category: 'Logo Design',
    desc: 'Modern animated logo crafted for brand identity',
  },
  {
    id: 2,
    src: '/gif2.mp4',
    poster: '',
    title: 'Neon Theme Preview',
    category: 'Theme',
    desc: 'Exclusive neon theme for apps and profiles',
  },
  {
    id: 3,
    src: '/gif3.mp4',
    poster: '',
    title: 'Gaming Banner Showcase',
    category: 'Banner',
    desc: 'Dynamic gaming banner with animated effects',
  },
  {
    id: 4,
    src: '/gif4.mp4',
    poster: '',
    title: 'Customised GIF Demo',
    category: 'Customised GIF',
    desc: 'Personalised GIF for greetings and moments',
  },
  {
    id: 5,
    src: '/gif4.mp4', // 👈 agar 5th video hai toh yahan uska naam daalo
    poster: '',
    title: 'Frame Design Preview',
    category: 'Frame',
    desc: 'Stylish frame design for photos and gifts',
  },
  {
    id: 6,
    src: '/frame1.mp4', // 👈 agar 5th video hai toh yahan uska naam daalo
    poster: '',
    title: 'Frame Design Preview',
    category: 'Frame',
    desc: 'Stylish frame design for photos and gifts',
  },
]

const SLIDE_DURATION = 8000 // 8 seconds

export default function VideoShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)
  const progressInterval = useRef(null)
  const videoRefs = useRef([])

  // Intersection observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-slide + progress bar
  useEffect(() => {
    if (!isPlaying) return

    setProgress(0)

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + (50 / SLIDE_DURATION) * 100
      })
    }, 50)

    const slideTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEOS.length)
    }, SLIDE_DURATION)

    return () => {
      clearInterval(progressInterval.current)
      clearTimeout(slideTimer)
    }
  }, [currentIndex, isPlaying])

  // Play the active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return
      if (idx === currentIndex && isPlaying) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [currentIndex, isPlaying])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length)
  }, [])

  const togglePlay = () => setIsPlaying((prev) => !prev)

  const currentVideo = VIDEOS[currentIndex]

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative overflow-hidden bg-black py-16 md:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-yellow-500/20 text-xs sm:text-sm font-semibold tracking-wide text-yellow-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            LIVE SHOWCASE
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-white">Watch Our </span>
            <span className="text-yellow-500">Work in Action</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Real previews of premium designs — animated logos, themes, banners and more.
          </p>
        </div>

        {/* ===== VIDEO SLIDER ===== */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.7)]">

            {/* Top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent z-20" />

            {/* Video area */}
            <div className="relative aspect-video bg-black overflow-hidden">
              {VIDEOS.map((video, idx) => (
                <div
                  key={video.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={video.src}
                    poster={video.poster || undefined}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>
              ))}

              {/* Info Overlay (bottom) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-8 md:p-10">
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-3">
                    {currentVideo.category}
                  </span>

                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                    {currentVideo.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-300 max-w-lg hidden sm:block">
                    {currentVideo.desc}
                  </p>
                </div>
              </div>

              {/* Play/Pause button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 text-white hover:text-black flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={prevSlide}
                aria-label="Previous video"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 text-white hover:text-black flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next video"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 text-white hover:text-black flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaChevronRight className="text-sm" />
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* ===== THUMBNAIL STRIP ===== */}
            <div className="p-3 sm:p-4 md:p-5 bg-[#0d0d0d] border-t border-white/5">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
                {VIDEOS.map((video, idx) => (
                  <button
                    key={video.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to ${video.title}`}
                    className={`relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === currentIndex
                        ? 'border-yellow-500 shadow-lg shadow-yellow-500/30 scale-105'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-yellow-500/40'
                    }`}
                  >
                    {/* Agar poster nahi hai toh video element ka pehla frame dikhega */}
                    {video.poster ? (
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={video.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    )}

                    {idx !== currentIndex && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <FaPlay className="text-white/80 text-xs" />
                      </div>
                    )}
                    {idx === currentIndex && (
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-gradient-to-r from-yellow-400 to-amber-500'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===== CTA BUTTON ===== */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Liked what you saw? Let&apos;s create something amazing together.
          </p>
          <Link
            href="https://wa.me/919528794938?text=Hi!%20I%20saw%20your%20showcase%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-lg" />
            Start Your Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>

      {/* Hide scrollbar style */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}