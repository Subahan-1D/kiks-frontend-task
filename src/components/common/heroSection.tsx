"use client"

import Image from 'next/image';
import frameImage from "@/assets/image/Frame 10.jpg";

export function HeroSection() {


  return (
    <>
      {/* Heading Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-primary">DO IT</span>{' '}
              <span className="text-[#4A69E2]">RIGHT</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-4 md:px-8 lg:px-16 pb-12">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          
          <Image
            src={frameImage}
            alt="Nike Shoe"
            fill
            priority
            className="object-cover"
          />

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>
    </>
  );
}