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
                alt="WebSite"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
    
          </div>
        </div>
      </div>
    </header>
  );
}
