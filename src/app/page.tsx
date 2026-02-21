"use client"
import React from 'react'
import { HeroSection } from '@/components/common/heroSection';

import { ProductSection } from '@/components/product/productCard';
import CategoryList from '@/components/category/categorylist';
export default function HomePage() {
    return (
        <div>
            <HeroSection></HeroSection>
            <ProductSection></ProductSection>
            <CategoryList></CategoryList>
        </div>
    )
}
