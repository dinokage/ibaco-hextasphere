import Image from "next/image"
import Link from "next/link"
import { Search, Send } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <section className="relative bg-[#252525] h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1000')",
            opacity: 0.6,
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 flex justify-between items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-[#ecdfcf] mb-4">SEW GEAR MOTORS</h1>
            <p className="text-[#fff9e3]">
              We have it all - from the gear motors to the electronics and software that drives them. Think dynamic,
              precise, large & powerful.
            </p>
          </div>
          <div className="border-4  rounded-lg p-2 bg-[#252525] bg-opacity-70">
            <Image
              src="/sew.png"
              alt="Gear mechanism"
              width={500}
              height={100}
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#ecdfcf] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#252525] mb-8">ABOUT US</h2>

          <div className="rounded-lg p-8 flex">

            <div className="h-[550px] w-screen flex relative">
              <Image src="/ibacoabout.png" alt="Office team" fill className="object-contain"/>

              {/* Circular badges */}

            </div>
          </div>

          <div className="m-8 text-[#29567A] font-semibold">
            <p className="mb-4">
              In an age where business decisions are taken with short term benefits in mind, CLASSIQUE is an exception.
              Ever since our inception in 1999 by Mr. Chandra Sekhar Chevvakula, we have assiduously followed strong
              ethical practices and always harped on doing business the right way.It is this diligence in values, a keen
              business sense, and strong focus on customer satisfaction has taken the group to becoming a truly
              world-class integrated business group
            </p>

            <p className="mb-4 ">
              CLASSIQUE is today multi-faceted business group with interests in two business domain including:
              <br />
              Compressor Business –CECB
            </p>

            <p className="mb-4">Mechanical & Electrical Business –MEB</p>

            <p className="mb-4">Technometrix - TM</p>

            <p className="mb-4">
              Over the years, CLASSIQUE has always been the front- runner in adapting new technologies and venturing on
              to newer markets. Our investments, partnerships, management polices and our internal people practices have
              enabled our products and services to reach regions.
              <br />
              With constant innovation and highly professional team at the helm, CLASSIQUE is all set to expand its
              territories to wider markets and newer business verticals.
            </p>
          </div>
        </div>
      </section>
{/* 
      {/* Footer */}
     
    </main>
  )
}

