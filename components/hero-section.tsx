"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f0e8]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#e8ddd0] rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-20 right-0 w-48 h-48 bg-[#d4c4b0] rounded-full blur-3xl opacity-40 translate-x-1/3" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#e8ddd0] rounded-full blur-3xl opacity-50" />
      
      {/* Subtle line pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 40px,
          #8b7355 40px,
          #8b7355 41px
        )`
      }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#5c4a3d] leading-tight tracking-tight">
                <span className="italic">Nails by</span>
                <br />
                <span className="text-[#8b7355]">Siwe</span>
              </h1>
              <div className="w-24 h-[2px] bg-[#c4a77d] mx-auto lg:mx-0" />
            </div>
            
            <p className="text-lg md:text-xl text-[#7a6a5a] max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience the art of beautiful nails. Professional manicures, pedicures, and custom nail art designed just for you.
            </p>
            
            <Button 
              onClick={scrollToBooking}
              className="bg-[#8b7355] hover:bg-[#6d5a45] text-white px-10 py-6 text-lg rounded-none border-2 border-[#8b7355] hover:border-[#6d5a45] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Paper frame effect */}
              <div className="absolute -inset-3 bg-white shadow-xl rotate-2" />
              <div className="absolute -inset-3 bg-[#faf8f5] shadow-lg -rotate-1" />
              <div className="relative bg-white p-3 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-20%20at%2019.34.16%20%281%29-QJoTOFBFHztGOLwFtoET7WYgOI3nOP.jpeg"
                  alt="Beautiful nude pink manicure"
                  width={400}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8b7355] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#8b7355] rounded-full" />
        </div>
      </div>
    </section>
  )
}
