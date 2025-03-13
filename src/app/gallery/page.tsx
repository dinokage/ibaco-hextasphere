import Image from "next/image"
// import { Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function GalleryPage() {
  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/gallery/image 131.png", alt: "Factory workers discussing" },
    {id: 2, src: "/gallery/image 132.png", alt: "Factory workers discussing"},
    {id: 3, src: "/gallery/image 133.png", alt: "Factory workers discussing"},
    {id: 4, src: "/gallery/image 134.png", alt: "Factory workers discussing"},
    {id: 5, src: "/gallery/image 135.png", alt: "Factory workers discussing"},
    {id: 6, src: "/gallery/image 136.png", alt: "Factory workers discussing"},
    {id: 7, src: "/gallery/image 137.png", alt: "Factory workers discussing"},
    {id: 9, src: "/gallery/image 139.png", alt: "Factory workers discussing"},
    {id: 10, src: "/gallery/image 140.png", alt: "Factory workers discussing"},
    {id: 11, src: "/gallery/image 141.png", alt: "Factory workers discussing"},
    {id: 12, src: "/gallery/image 142.png", alt: "Factory workers discussing"},
    {id: 13, src: "/gallery/image 143.png", alt: "Factory workers discussing"},
    {id: 14, src: "/gallery/image 144.png", alt: "Factory workers discussing"},
    {id: 15, src: "/gallery/image 145.png", alt: "Factory workers discussing"},
    {id: 16, src: "/gallery/image 146.png", alt: "Factory workers discussing"},
    {id: 17, src: "/gallery/image 147.png", alt: "Factory workers discussing"},
    {id: 18, src: "/gallery/image 148.png", alt: "Factory workers discussing"},
    {id: 19, src: "/gallery/image 149.png", alt: "Factory workers discussing"},
  ]

  return (
    <div className="flex  bg-[#fff9e3]">
        <div className="container mx-auto text-center"></div>
       <h1 className="text-4xl font-bold  text-[BLACK]">Gallery</h1>

      {/* Gallery Header */}

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 flex-grow mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={550}
                height={350}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}

