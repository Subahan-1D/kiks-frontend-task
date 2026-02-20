"use client";
import Image from "next/image";

import { ReactNode } from "react";
import login from "@/assets/logo/loginlogo.png";
import { usePathname } from "next/navigation";


export default function AuthWrapper({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  console.log("pathName", pathName);

  return (
    <div>
      <main className="grid lg:grid-cols-2 grid-cols-1  min-h-screen flex-col md:flex-row">
        <div className="bg-bprimary w-full lg:block hidden">
         <div className="flex items-center w-full h-full justify-center">
           <Image
            src={ login }
            alt="Luxury-hotel"
            width={200}
            height={200}
            priority
            className="w-[200px] h-[200px]"
          />
         </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 lg:bg-white bg-bprimary">
          <div className="flex flex-col items-start space-y-8"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
