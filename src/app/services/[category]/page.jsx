'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa'
import { servicesData, WHATSAPP_NUMBER, getItemsWithCustom } from '@/data/servicesData'

export default function CategoryPage() {
  const params = useParams()
  const category = params.category

  const service = servicesData[category]
  const [selected, setSelected] = useState(null)
  const [imgErrors, setImgErrors] = useState({}) // 🔥 track broken images

  // ❌ Category nahi mili
  if (!service) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Service not found
        </h1>
        <Link
          href="/#services"
          className="text-yellow-400 hover:text-yellow-300 font-semibold"
        >
          ← Back to Services
        </Link>
      </div>
    )
  }

  const allItems = getItemsWithCustom(service)

  const getOrderLink = (item) => {
    const message =
      item.type === 'custom'
        ? item.whatsappMsg
        : `Hi SRK Designer! 👋\n\nI want to order:\n*${service.name} — ${item.title}*\nPrice: ${item.price}\n\nPlease share details.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="relative min-h-screen bg-black py-12 md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-yellow-400 transition-colors mb-8"
        >
          <FaArrowLeft className="text-xs" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <span className="text-2xl">{service.emoji}</span>
            <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
              SRK Designer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-white">{service.name} </span>
            <span className="text-yellow-500">Collection</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            {service.tagline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {allItems.map((item) => {
            const isCustom = item.type === 'custom' || !item.src
            const hasError = imgErrors[item.id] // 🔥 image load fail hui?

            // 🔥 CUSTOM / NO-IMAGE CARD — text-based, image ki jagah text
            if (isCustom || hasError) {
              const isCustomCard = item.type === 'custom'
              return (
                <div
                  key={item.id}
                  className="group relative rounded-2xl border border-dashed border-yellow-500/40 bg-gradient-to-br from-[#111111] to-[#1a1500] hover:border-yellow-500/80 transition-all duration-500 overflow-hidden hover:-translate-y-1 flex flex-col"
                >
                  {/* 🔥 TEXT-BASED PREVIEW (image ki jagah) */}
                  <div className="relative aspect-square flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#1a1500] via-[#111] to-[#0a0a0a]">
                    <span className="text-6xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-500">
                      {isCustomCard ? '✨' : service.emoji}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                      {isCustomCard ? (item.title || 'Apna Custom Banwao') : item.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                      {isCustomCard
                        ? item.note || 'Aap order de sakte hain aur apne hisab se banwa sakte hain'
                        : `${service.name} design — Click to order`}
                    </p>

                    {/* Price badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-yellow-500/30">
                      <span className="text-xs font-bold text-yellow-400">
                        {item.price || 'Apne hisab se'}
                      </span>
                    </div>
                  </div>

                  {/* Order */}
                  <div className="p-4 sm:p-5">
                    <a
                      href={getOrderLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-md shadow-yellow-500/20 transition-all duration-300"
                    >
                      <FaWhatsapp className="text-base" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              )
            }

            // ✅ NORMAL CARD — image/video
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-white/10 bg-[#111111] hover:border-yellow-500/50 transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                <div
                  className="relative aspect-square overflow-hidden bg-black/40 cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [item.id]: true }))
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [item.id]: true }))
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/30">
                    <span className="text-xs font-bold text-yellow-400">
                      {item.price}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold tracking-wider uppercase">
                      Click to view
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <a
                    href={getOrderLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-md shadow-yellow-500/20 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-base" />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* ===== PREVIEW MODAL ===== */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xl flex items-center justify-center"
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-black">
              {selected.type === 'video' ? (
                <video
                  src={selected.src}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              ) : (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {selected.title}
                </h3>
                <p className="text-yellow-400 font-semibold mt-1">
                  {selected.price}
                </p>
              </div>
              <a
                href={getOrderLink(selected)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg shadow-yellow-500/30 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}