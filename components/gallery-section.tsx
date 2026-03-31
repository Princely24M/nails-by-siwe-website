"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-20%20at%2019.34.16%20%281%29-QJoTOFBFHztGOLwFtoET7WYgOI3nOP.jpeg",
    alt: "Elegant nude pink square nails",
    category: "Classic",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-20%20at%2019.34.16%20%282%29-KgvOkzj1OlkyGFiSsp9lrKRlFmSl8c.jpeg",
    alt: "Colorful stiletto nails with marble and rainbow design",
    category: "Nail Art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-20%20at%2019.34.16-71srQQuExxXybrko8JRIJkzcdn3hz9.jpeg",
    alt: "Pink nail art with french tips and floral designs",
    category: "Nail Art",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-20%20at%2019.34.16%20%283%29-NA2mJnAqgPfxD64gl0lYwzyU9rN80h.jpeg",
    alt: "Natural french tip manicure",
    category: "French",
  },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-[#f5f0e8]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5c4a3d] mb-4">
            Our Work
          </h2>
          <div className="w-20 h-[2px] bg-[#c4a77d] mx-auto mb-6" />
          <p className="text-[#7a6a5a] max-w-lg mx-auto">
            Browse through our collection of beautiful nail designs and find inspiration for your next look
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Paper frame effect */}
              <div className="relative">
                <div 
                  className={`absolute -inset-2 bg-white shadow-md transition-transform duration-300 ${
                    hoveredIndex === index ? "rotate-1" : "rotate-0"
                  }`} 
                />
                <div 
                  className={`absolute -inset-2 bg-[#faf8f5] shadow-sm transition-transform duration-300 ${
                    hoveredIndex === index ? "-rotate-1" : "rotate-0"
                  }`} 
                />
                <div className="relative bg-white p-2 shadow-lg">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={400}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                  {/* Category label */}
                  <div className="mt-2 text-center">
                    <span className="text-xs uppercase tracking-wider text-[#9a8a7a]">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div 
                className={`absolute inset-2 bg-[#5c4a3d]/60 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white text-center px-4">
                  <p className="font-serif text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
