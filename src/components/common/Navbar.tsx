'use client';

import { useState } from 'react';
import { Search, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Left - Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition">
                New Drops
              </Link>

              <Link href={"/men"} className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-blue-600 transition">
                Men
                <ChevronDown className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-blue-600 transition">
                Women
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-wide">
              KICKS
            </Link>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />
              <User className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />

              <div className="relative">
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 transition ${mobileOpen ? 'visible' : 'invisible'}`}>

        {/* Overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-lg font-medium">
            <Link href="#" onClick={() => setMobileOpen(false)}>
              New Drops
            </Link>

            <div className="flex items-center justify-between">
              <span>Men</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between">
              <span>Women</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}