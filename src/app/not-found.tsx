'use client'


import { HeroSection } from '@/components/common/heroSection';
import { Navbar } from '@/components/common/Navbar';


import React from 'react';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <HeroSection></HeroSection>

      {/* <div className='flex justify-center items-center min-h-screen'>
        <NotFoundAnimation />
      </div> */}
    </div>
  );
};

export default NotFound;
