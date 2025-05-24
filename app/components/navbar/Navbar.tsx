"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center my-0 py-2 relative border-b-2 border-l-2 border-r-2 px-2 border-brand-borderDark rounded-lg bg-black">
      <Link href="/" className="text-text-muted font-extrabold text-xl lg:text-3xl">
        EDUARDO VIANA
      </Link>

      {/* Menú visible solo en md y mayores */}
      <ul className="hidden md:flex items-center gap-6 md:gap-12 text-white">
        <Link href="/" className="lg:text-lg cursor-pointer hover:text-text-muted transition-colors duration-300">
          Inicio
        </Link>
        <li className="lg:text-lg cursor-pointer hover:text-text-muted transition-colors duration-300">
          Sobre Mí
        </li>
        <li className="lg:text-lg cursor-pointer hover:text-text-muted transition-colors duration-300">
          <a href="#my-projects">Proyectos</a>
        </li>
        <li className="bg-brand-primary text-text-base py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer hover:bg-brand-hover">
          <a href="/cv/cv.pdf" download className="block">
            Descargar CV
          </a>
        </li>
      </ul>

      {/* Icono hamburguesa visible solo en menores a md */}
      <button
        className="md:hidden text-text-base bg-brand-primary rounded-full p-2 hover:bg-brand-hover transition-colors duration-300"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Overlay desenfocado cuando el menú está abierto */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Menú hamburguesa */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-brand-background z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botón para cerrar el menú */}
        <div className="flex justify-end p-4">
          <button
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            className="text-text-base hover:text-text-muted transition-colors duration-300"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-12 p-6 text-white">
          <li className="text-lg cursor-pointer hover:text-text-muted transition-colors duration-300">
            Inicio
          </li>
          <li className="text-lg cursor-pointer hover:text-text-muted transition-colors duration-300">
            Sobre Mí
          </li>
          <li className="text-lg cursor-pointer hover:text-text-muted transition-colors duration-300">
            Proyectos
          </li>
          <li className="bg-brand-primary text-text-base py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer hover:bg-brand-hover">
            <a href="/cv/cv.pdf" download className="block">
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
