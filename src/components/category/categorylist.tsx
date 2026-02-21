'use client';

import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

export default function CategoryList() {
  const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 2;

  const maxIndex = categories.length - itemsPerView;

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerView
  );

  if (isLoading) {
    return <div className="py-12 text-center">Loading categories...</div>;
  }

  if (isError || !categories.length) {
    return <div className="py-12 text-center text-red-400">Failed to load</div>;
  }

  return (
    <section className="bg-[#232321] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white ">CATEGORIES</h2>

          <div className="flex items-center rounded-2xl">
            {/* LEFT BUTTON */}
            <button
              onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
              disabled={startIndex === 0}
              className={`rounded p-2 bg-gray-800 text-white transition
                ${startIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-700"}
              `}
            >
              <FaChevronLeft />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() =>
                setStartIndex((prev) => Math.min(prev + 1, maxIndex))
              }
              disabled={startIndex >= maxIndex}
              className={`rounded p-2 bg-gray-800 text-white transition
                ${startIndex >= maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-700"}
              `}
            >
              <FaChevronRight />
            </button>

          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {visibleCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="group relative overflow-hidden rounded-xl  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover bg-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {cat.name.toUpperCase()}
                  </h3>
<div className="flex items-center justify-center w-8 h-8 border border-black rounded-md">
  <ArrowUpRight className="text-white" size={18} />
</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}