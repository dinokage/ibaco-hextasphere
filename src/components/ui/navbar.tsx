"use client"

import type React from "react"

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="mx-auto container rounded-b-lg sticky top-0 z-20 bg-[#ECDFCF] py-3 px-4 md:px-6 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-md">
              <Image
                src="/eshanilogo.png"
                alt="Eshani Logo"
                width={48}
                height={48}
                className="bg-[#29567a] p-1"
              />
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-[#252525] font-bold text-base uppercase border-b-2 ">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:block">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-full bg-[#29567a] py-2 pl-4 pr-10 text-[#ffffff] placeholder-[#ffffff]/80 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ffffff]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        <button className="block lg:hidden" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#252525]"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile search - shown only on mobile */}
      <div className="mt-3 block md:hidden">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-[#29567a] py-2 pl-4 pr-10 text-[#ffffff] placeholder-[#ffffff]/80 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ffffff]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

