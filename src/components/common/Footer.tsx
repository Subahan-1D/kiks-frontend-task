"use client"
// components/Footer.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import Link from "next/link"
import { BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 rounded-2xl mt-10">
      {/* Newsletter - blue section */}
      <div className="bg-bprimary py-16 px-5 sm:px-6 lg:px-8 text-white rounded-2xl">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            {/* Left: Main content + form */}
            <div className="text-center lg:text-left max-w-3xl">
              <h2 className="mb-4 text-2xl font-black tracking-tight sm:text-xl lg:text-3xl">
                JOIN OUR <span className="text-yellow-400">KICKSPLUS</span> <br /> CLUB
                <br className="sm:hidden" />
                & GET <span className="text-yellow-400">15%</span> OFF
              </h2>

              <p className="mb-8 text-xl text-blue-100 sm:text-xl">
                Signup for free to join the community
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row sm:gap-3"
              >
                <Input
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-12 bg-white/95 text-base placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
                <Button
                  type="submit"
                  className="h-12 bg-black px-8 text-base font-semibold text-white hover:bg-gray-900 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  SUBMIT
                </Button>
              </form>
            </div>

            {/* Right: Brand mark (visible on larger screens) */}
            <div className="hidden lg:block text-4xl font-black mt-14 tracking-tight text-white/90 lg:text-5xl xl:text-6xl ">
              KICKS
              <sup className="align-super text-base font-bold text-white/80">®</sup>
            </div>
          </div>

          {/* Mobile-only brand mark */}
          <div className="mt-10 text-center text-4xl font-black tracking-tight text-white/90 lg:hidden">
            KICKS
            <sup className="align-super text-base font-bold text-white/80">®</sup>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="border-t border-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FFA52F]">About us</h3>
              <p className="mb-4 text-gray-400">
                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FFA52F]">Categories</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/runners" className="hover:text-white transition-colors">
                    Runners
                  </Link>
                </li>
                <li>
                  <Link href="/basketball" className="hover:text-white transition-colors">
                    Basketball
                  </Link>
                </li>
                <li>
                  <Link href="/outdoor" className="hover:text-white transition-colors">
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link href="/golf" className="hover:text-white transition-colors">
                    Golf
                  </Link>
                </li>
                <li>
                  <Link href="/hiking" className="hover:text-white transition-colors">
                    Hiking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FFA52F]">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#FFA52F]">Follow us</h3>
              <div className="flex gap-6 text-xl">
                <a
                  href="https://www.facebook.com/subahan.islam.758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/subahanislam7749/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <BsInstagram></BsInstagram>
                </a>
                <a
                  href="https://x.com/Subahan1323225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <BsTwitter></BsTwitter>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="X"
                >
                  <BsTiktok></BsTiktok>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900 bg-black/60 py-6 text-center text-sm text-gray-500 md:text-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-2xl font-black tracking-tight text-white">
              KICKS<sup className="text-xs align-super">®</sup>
            </div>
            <div>
              © {new Date().getFullYear()} KICKS. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}