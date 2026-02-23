'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useGetProductsQuery } from '@/redux/features/product/productApi';
import { useState } from 'react';
import CustomPaginations from '../common/CustomPaginations';
import Link from 'next/link';

export function ProductSection() {

    const { data: products = [], isLoading, isError } = useGetProductsQuery();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // pagination logic
    const totalPages = Math.ceil(products.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentProducts = products.slice(startIndex, endIndex);

    if (isLoading) {
        return <p className="text-center py-10 text-lg"><span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span></p>;
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex flex-col rounded-xl bg-card overflow-hidden border border-border transition-all hover:shadow-xl"
                        >
                            <div className="absolute top-1 left-1 z-20">
                                <Badge
                                    style={{ borderRadius: "255px 0px 255px 0px" }}
                                    className="bg-blue-600  text-white text-xs font-medium px-3 py-1  shadow-sm"
                                >
                                    NEW
                                </Badge>
                            </div>

                            <div className="relative h-64 w-full bg-muted overflow-hidden">
                                {product.images?.length > 0 && (
                                    <Image
                                        src={product.images[0]}
                                        alt={product.title}
                                        fill
                                        unoptimized
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                )}
                            </div>

                            <div className="flex flex-col gap-3 p-4">


                                <h3 className="text-sm font-bold leading-tight uppercase">
                                    {product.title}
                                </h3>

                                <div className="pt-2 w-full ">
                                    <Button
                                        size="default"
                                        className="w-full text-xs font-semibold bg-[#232321]"
                                    >
                                        <Link href={`/product/${product.id}`} className='uppercase  text-white'>View Product </Link> - <span className='text-[#FFA52F]'> $ {product.price}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {/* Pagination */}
                <div className="mt-10">
                    <CustomPaginations
                        currentPage={currentPage}
                        totalPages={totalPages}
                        itemsPerPage={productsPerPage}
                        totalItems={products.length}
                        startIndex={startIndex}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>

            </div>
        </section>
    );
}