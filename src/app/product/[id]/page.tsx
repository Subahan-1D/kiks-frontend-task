'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useGetProductByIdQuery } from '@/redux/features/product/productApi';


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import type { AppDispatch, RootState } from "@/redux/store";
export default function ProductDetailsPage() {
    const { id } = useParams();
    const productId = Number(id);

    const { data: product, isLoading, isError } =
        useGetProductByIdQuery(productId);



    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.images?.[0],
            })
        );
    };

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const isInCart = !!cartItems.find(
        (item) => item.id === product?.id
    );
    if (isLoading) {
        return <p className="text-center py-20 text-lg"><span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span></p>;
    }

    if (isError || !product) {
        return (
            <p className="text-center py-20 text-lg text-red-500">
                Product not found
            </p>
        );
    }

    return (
        <>
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Image Section */}
                    <div className="relative w-full h-[420px] rounded-xl overflow-hidden border">
                        <Image
                            src={product.images?.[0]}
                            alt={product.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col gap-5">
                        <span className="text-sm uppercase text-muted-foreground">
                            {product.category?.name}
                        </span>

                        <h1 className="text-3xl md:text-4xl font-bold uppercase">
                            {product.title}
                        </h1>

                        <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>

                        <div className="text-2xl font-bold text-[#FFA52F]">
                            $ {product.price}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button
                                onClick={handleAddToCart}
                                disabled={isInCart}
                                className={`px-8 text-white ${isInCart
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#232321]"
                                    }`}
                            >
                                {isInCart ? "Already in Cart" : "Add to Cart"}
                            </Button>
                            <Button variant="outline" className="px-8">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}