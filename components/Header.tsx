import React from "react";
import Image from "next/image";
import img from "../public/hero.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="mx-auto pt-9">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Link href="/">
              <Image
                priority
                fill
                className="h-full w-full object-contain"
                src={img}
                placeholder="blur"
                alt="Cabañas del Sol"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            {/* <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              {/* <span className="block text-orange-500">Cabañas</span>  </h1> */}

            {/* <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8">
                Ver Mas
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
