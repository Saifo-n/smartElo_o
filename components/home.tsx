"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Smart Elo</title>
      </Head>

      <div id="home" className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/test02.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1
          className={`text-5xl font-bold text-white transition-transform duration-1000 ${
            isVisible ? "transform translate-y-0" : "transform translate-y-10 opacity-0"
          }`}
        >
          Welcome to Smart Elo
        </h1>
        <p
          className={`mt-4 text-xl text-white transition-transform duration-1000 ${
            isVisible ? "transform translate-y-0" : "transform translate-y-10 opacity-0"
          }`}
        >
          We offer exceptional website design services
        </p>
      </div>

      <div id="services" className="pt-20 bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-xl text-gray-600">We specialize in creating beautiful and functional websites.</p>
      </div>
    </div>
  );
};

export default Home;
