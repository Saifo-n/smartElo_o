"use client"; 

import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }

      setScrollPosition(currentScrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`${
        windowWidth > 768 ? "translate-y-0" : "translate-y-0"
      } text-white body-font shadow-md fixed top-0 left-0 w-full z-30 transition-transform duration-900 ease-in-out`}
      style={{
        backgroundColor: isScrolled ? "rgba(38, 38, 38, 0.7)" : "transparent",
      }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full mr-3"
          />
          <span className="ml-3 text-lg font-bold">Smart Elo Co., Ltd.</span>
        </a>

        <nav className="hidden md:flex ml-auto flex-wrap items-center text-base justify-center">
          <a
            href="#home"
            className="mr-5 hover:text-white font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#about"
            className="mr-5 hover:text-white font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700"
          >
            About Us
          </a>
          <a
            href="#service"
            className="mr-5 hover:text-white font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#contact"
            className="mr-5 hover:text-white font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed left-0 top-0 w-full h-screen bg-gray-900 bg-opacity-70 text-white transition-transform duration-300 ease-in-out z-50 flex justify-center items-center`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-12 right-6 text-5xl text-white"
        >
          &times;
        </button>

        <div className="flex flex-col items-center w-full">
          <a href="#home" className="py-4 px-8 hover:bg-gray-200 font-bold text-2xl transition duration-300 ease-in-out transform hover:scale-110 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700">Home</a>
          <a href="#about" className="py-4 px-8 hover:bg-gray-200 font-bold text-2xl transition duration-300 ease-in-out transform hover:scale-110 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700">About Us</a>
          <a href="#service" className="py-4 px-8 hover:bg-gray-200 font-bold text-2xl transition duration-300 ease-in-out transform hover:scale-110 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700">Services</a>
          <a href="#contact" className="py-4 px-8 hover:bg-gray-200 font-bold text-2xl transition duration-300 ease-in-out transform hover:scale-110 py-2 px-4 border-2 border-transparent hover:border-white rounded-lg hover:bg-gray-700">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
