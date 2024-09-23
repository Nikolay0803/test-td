"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../../assets/Logo.svg?react";
import Container from "../Container/Container";
import Menu from "../../assets/menu.svg?react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="relative z-50">
      <Container>
        <nav className="flex items-center gap-[215px] justify-between md:justify-normal px-7 md:px-[76px] py-[27px]">
          <Link href="/">
            <Logo />
          </Link>
          <button
            className="block sm:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <Menu />
          </button>
          <ul className="hidden sm:flex items-center gap-7 text-xl">
            <li>
              <Link href="#info-section">Informazioni</Link>
            </li>
            <li>
              <Link href="#ceo-section">CEO</Link>
            </li>
            <li>
              <Link href="#reviews-section">Iniziare a guadagnare subito</Link>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <nav className="sm:hidden fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#D81E05] to-[#490900] text-[#121417] dark:bg-[#1A1A1A] dark:text-[#E4E4E4] shadow-md z-50">
            <button
              className="absolute top-5 right-5 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="flex flex-col items-center py-4 space-y-2">
              <li>
                <Link
                  className="block px-4 py-2 text-lg font-medium hover:text-[#9FB7CE]"
                  href="#info-section"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Informazioni
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 text-lg font-medium hover:text-[#9FB7CE]"
                  href="#ceo-section"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CEO
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 text-lg font-medium hover:text-[#9FB7CE]"
                  href="#reviews-section"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniziare a guadagnare subito
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
