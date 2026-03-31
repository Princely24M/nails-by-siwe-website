export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Decorative element */}
            <div className="relative order-2 md:order-1">
              <div className="relative">
                {/* Paper texture background */}
                <div className="absolute -inset-4 bg-[#e8ddd0] rotate-2" />
                <div className="absolute -inset-4 bg-white -rotate-1 shadow-lg" />
                <div className="relative bg-[#f5f0e8] p-8 md:p-12">
                  {/* Decorative floral illustration */}
                  <svg 
                    viewBox="0 0 200 200" 
                    className="w-full h-auto text-[#c4a77d]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    {/* Simple botanical illustration */}
                    <path d="M100 180 Q100 120 100 80" />
                    <path d="M100 140 Q80 120 60 130" />
                    <path d="M100 140 Q120 120 140 130" />
                    <path d="M100 100 Q70 80 50 90" />
                    <path d="M100 100 Q130 80 150 90" />
                    <ellipse cx="100" cy="60" rx="20" ry="30" />
                    <ellipse cx="70" cy="50" rx="15" ry="20" transform="rotate(-30 70 50)" />
                    <ellipse cx="130" cy="50" rx="15" ry="20" transform="rotate(30 130 50)" />
                    <circle cx="100" cy="40" r="5" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl text-[#5c4a3d] mb-4">
                About Me
              </h2>
              <div className="w-20 h-[2px] bg-[#c4a77d] mx-auto md:mx-0 mb-8" />
              
              <div className="space-y-6 text-[#6d5a4a] leading-relaxed">
                <p>
                  Welcome to Nails by Siwe! I&apos;m passionate about creating beautiful, 
                  personalized nail designs that make you feel confident and pampered.
                </p>
                <p>
                  With attention to detail and a love for nail artistry, I offer 
                  a relaxing experience where you can unwind while getting your 
                  nails done to perfection.
                </p>
                <p>
                  Whether you prefer classic elegance or bold, creative designs, 
                  I&apos;m here to bring your nail vision to life.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8">
                <span className="font-serif text-2xl text-[#8b7355] italic">
                  Siwe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
