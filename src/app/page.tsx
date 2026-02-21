"use client"
import React from 'react'
import { HeroSection } from '@/components/common/heroSection';

import { ProductSection } from '@/components/common/productCard';
export default function HomePage() {
    return (
        <div>
            <HeroSection></HeroSection>
            <ProductSection></ProductSection>
        </div>
    )
}
