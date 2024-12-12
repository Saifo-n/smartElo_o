"use client";

import React, { useEffect, useState } from "react";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  // แสดงข้อความหลังจาก 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/test01.jpg"
          alt="test01"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
      </div>

      <div
        id="service"
        className="absolute inset-0 flex justify-center items-center text-center z-10"
      >
        <div
          className={`border-4 border-white p-6 rounded-lg bg-black bg-opacity-50 transition-all duration-1000 ${isVisible ? "transform translate-y-0" : "transform translate-y-10 opacity-0"
            } hover:scale-105 hover:translate-y-2`}
        >
          <h1 className="text-4xl font-bold text-white">
            รับออกแบบ Application, พัฒนา Software, <br />
            และ Mobile App รองรับทุกอุปกรณ์
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
