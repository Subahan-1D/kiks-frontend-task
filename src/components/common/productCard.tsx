'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/redux/features/product/productApi';
import { useState } from 'react';

export function ProductSection() {

    const { data: products = [], isLoading, isError } = useGetProductsQuery();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // pagination logic
    const totalPages = Math.ceil(products.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentProducts = products.slice(startIndex, endIndex);

    if (isLoading) {
        return <p className="text-center py-10 text-lg">Loading products...</p>;
    }

    if (isError) {
        return <p className="text-center py-10 text-lg text-red-500">Failed to load products</p>;
    }

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">
                        Don’t miss out <br /> new drops
                    </h2>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col rounded-xl bg-card overflow-hidden border border-border transition-all hover:shadow-xl"
                        >
                            <div className="absolute top-1 left-1 z-10">
                                <Badge className="bg-blue-700 text-white text-xs px-2 py-1 rounded-md">
                                    NEW
                                </Badge>
                            </div>

                            <div className="relative h-64 w-full bg-muted overflow-hidden">
                                {product.images?.length > 0 && (
                                    <Image
                                        src={product.images[0]}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                            </div>

                            <div className="flex flex-col gap-3 p-4">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                    {product.title}
                                </p>

                                <h3 className="text-sm font-bold leading-tight">
                                    {product.description?.slice(0, 25)}...
                                </h3>

                                <div className="flex items-center justify-between pt-2 border-t">
                                    <span className="text-sm font-bold">
                                        ${product.price}
                                    </span>
                                    <Button size="sm" variant="outline" className="text-xs font-semibold">
                                        View Product
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10 gap-2 flex-wrap">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-2 py-1 border rounded-md text-sm font-semibold transition
                                ${currentPage === index + 1
                                    ? 'bg-black text-white'
                                    : 'bg-white hover:bg-gray-100'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}