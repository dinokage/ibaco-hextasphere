import Image from "next/image"
import { Search, Send } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Industrial machinery background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">SEW GEAR MOTORS</h1>
            <p className="text-lg mb-6">
              We have it all - from the gear-motors to the electronics and software that drives them. Think dynamic,
              precise, large & powerful.
            </p>
          </div>
          <div className="hidden md:block ml-auto">
            <div className="border-4 border-white p-2 rounded-md">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Gear mechanism"
                width={200}
                height={200}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#ecdfcf] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#252525]">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Air Compressors Services Card */}
            <div className="relative flex justify-center">
              <div className="text-white overflow-hidden">
                <div className="w-3/5 mx-auto">
                  <Image
                    src="/service1.svg?height=400&width=600"
                    alt="Service and repair"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Service, Repair & Parts Card */}
            <div className="relative flex justify-center">
              <div className="text-white overflow-hidden">
                <div className="w-3/5 mx-auto">
                  <Image
                    src="/service2.svg?height=400&width=600"
                    alt="Service and repair"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Knowledge Hub Card - Full Width */}
          <div className="relative mb-12 flex justify-center">
            <div className="text-white overflow-hidden max-w-3xl mx-auto">
              <div className="w-3/5 mx-auto">
                <Image
                  src="/service3.svg?height=400&width=600"
                  alt="Knowledge hub"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Industrial Applications Card */}
            <div className="relative flex justify-center">
              <div className="text-white overflow-hidden">
                <div className="w-3/5 mx-auto">
                  <Image
                    src="/service4.svg?height=400&width=600"
                    alt="Industrial applications"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Ancillary Products Card */}
            <div className="relative flex justify-center">
              <div className="text-white overflow-hidden">
                <div className="w-3/5 mx-auto">
                  <Image
                    src="/service5.svg?height=300&width=400"
                    alt="Ancillary products"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  )
}

