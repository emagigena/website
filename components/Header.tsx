import React from "react";
import Image from "next/image";
import img from "../public/hero.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="mx-auto pt-1">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-12 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Encontrá el lugar perfecto para disfrutar de tus vacaciones
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Explora y reserva en complejos de cabañas únicas y experiencias inolvidables.
              </p>
              <div className="mt-10 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/">
                    <p className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      ¡Ver Mas!
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
