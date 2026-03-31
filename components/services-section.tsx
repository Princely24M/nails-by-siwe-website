import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = {
  manicure: {
    title: "Plain Manicure",
    items: [
      { name: "Short", price: "R110" },
      { name: "Medium", price: "R130" },
      { name: "Long", price: "R150" },
    ],
  },
  pedicure: {
    title: "Pedicure",
    items: [
      { name: "Plain", price: "R110" },
      { name: "French", price: "R130" },
    ],
  },
  nailArt: {
    title: "Nail Art",
    items: [
      { name: "Marble Effect", price: "R10" },
      { name: "Ombre Nails", price: "R10" },
      { name: "3D Nail Art", price: "R15" },
      { name: "Chrome", price: "R15" },
      { name: "Blooming", price: "R10" },
      { name: "Gel Overlay (Hands)", price: "R100" },
      { name: "Gel Overlay (Toes)", price: "R100" },
      { name: "Buff & Shine", price: "R80" },
      { name: "Almond", price: "R20" },
      { name: "Stiletto", price: "R30" },
    ],
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5c4a3d] mb-4">
            Our Services
          </h2>
          <div className="w-20 h-[2px] bg-[#c4a77d] mx-auto mb-6" />
          <p className="text-[#7a6a5a] max-w-lg mx-auto">
            From classic manicures to intricate nail art, we offer a full range of services to pamper your nails
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Manicure Card */}
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none overflow-hidden group">
            <div className="h-1 bg-[#c4a77d] group-hover:bg-[#8b7355] transition-colors" />
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-2xl text-[#5c4a3d] flex items-center gap-3">
                <span className="w-8 h-8 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </span>
                {services.manicure.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {services.manicure.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center py-2 border-b border-dashed border-[#e8ddd0] last:border-0">
                    <span className="text-[#6d5a4a]">{item.name}</span>
                    <span className="font-medium text-[#8b7355]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Pedicure Card */}
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none overflow-hidden group">
            <div className="h-1 bg-[#c4a77d] group-hover:bg-[#8b7355] transition-colors" />
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-2xl text-[#5c4a3d] flex items-center gap-3">
                <span className="w-8 h-8 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                {services.pedicure.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {services.pedicure.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center py-2 border-b border-dashed border-[#e8ddd0] last:border-0">
                    <span className="text-[#6d5a4a]">{item.name}</span>
                    <span className="font-medium text-[#8b7355]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Nail Art Card - spans full width on larger screens for the longer list */}
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none overflow-hidden group md:col-span-2 lg:col-span-1">
            <div className="h-1 bg-[#c4a77d] group-hover:bg-[#8b7355] transition-colors" />
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-2xl text-[#5c4a3d] flex items-center gap-3">
                <span className="w-8 h-8 bg-[#f5f0e8] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                {services.nailArt.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {services.nailArt.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center py-1.5 border-b border-dashed border-[#e8ddd0] last:border-0">
                    <span className="text-[#6d5a4a] text-sm">{item.name}</span>
                    <span className="font-medium text-[#8b7355] text-sm">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[#9a8a7a] mt-12 italic">
          * Nail art prices are add-ons to base manicure/pedicure services
        </p>
      </div>
    </section>
  )
}
