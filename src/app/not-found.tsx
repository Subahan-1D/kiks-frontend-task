'use client'





import NotFoundAnimation from '@/components/lottie/NotFoundAnimation';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen'>
        <NotFoundAnimation />
      </div>
    </div>
  );
};

export default NotFound;
