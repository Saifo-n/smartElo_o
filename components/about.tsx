"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="container mx-auto p-8 bg-gray-50">
      <div className="max-w-screen-md mx-auto text-center pt-10">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          วิสัยทัศน์ของคุณคือการสร้างสรรค์ของเรา
        </motion.h1>

        <motion.p
          className="text-lg text-gray-800 mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          เราคือผู้เชี่ยวชาญในการพัฒนาโปรแกรมเว็บเพจและออกแบบเว็บไซต์ที่ตอบโจทย์ความต้องการของคุณ
          <br />ไม่ว่าคุณจะต้องการสร้างเว็บไซต์สำหรับธุรกิจส่วนตัว องค์กร หรือการใช้งานเฉพาะด้าน
          เราพร้อมนำเสนอความคิดสร้างสรรค์และเทคโนโลยีทันสมัยเพื่อช่วยให้คุณบรรลุเป้าหมายทางออนไลน์
        </motion.p>
      </div>

      <div className="text-center mt-15">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          บริการของเรา
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}>
          เรามีบริการที่หลากหลายเพื่อช่วยให้เว็บไซต์ของคุณประสบความสำเร็จ
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 pt-5">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5, backgroundColor: "#f3f4f6" }}
          className="p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
        >
          <a className="flex justify-center items-center mb-4">
            <img
              src="/images/coding.png"
              alt="coding"
              className="w-20 h-20"
            />
          </a>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">พัฒนาเว็บไซต์ที่มีประสิทธิภาพ</h2>
          <p className="text-sm text-gray-600">
            เราสร้างเว็บไซต์ที่มีความเร็วในการโหลดสูง เพื่อให้ผู้ใช้ประสบการณ์ที่ดีที่สุด
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -5, backgroundColor: "#e0f7fa" }}
          className="p-6 bg-blue-100 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
        >
          <a className="flex justify-center items-center mb-4">
            <img
              src="/images/web-design.png"
              alt="web-design"
              className="w-20 h-20"
            />
          </a>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">ออกแบบ UX/UI</h2>
          <p className="text-sm text-gray-600">
            เน้นการออกแบบที่ตอบโจทย์การใช้งานและความต้องการของผู้ใช้งาน เพื่อให้เว็บไซต์ของคุณดูดีและใช้งานง่าย
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -5, backgroundColor: "#fff9c4" }}
          className="p-6 bg-yellow-100 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
        >
          <a className="flex justify-center items-center mb-4">
            <img
              src="/images/programming.png"
              alt="programming"
              className="w-20 h-20"
            />
          </a>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">รองรับทุกอุปกรณ์ ทั้ง Desktop, Tablet และ Mobile</h2>
          <p className="text-sm text-gray-600">
            เว็บไซต์ของเราถูกออกแบบให้รองรับการแสดงผลที่สมบูรณ์แบบบนทุกอุปกรณ์ ไม่ว่าจะเป็นคอมพิวเตอร์ตั้งโต๊ะ แท็บเล็ต หรือมือถือ
            เพื่อให้ผู้ใช้งานสามารถเข้าถึงเว็บไซต์ได้จากทุกที่ทุกเวลา
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -5, backgroundColor: "#d1f7c4" }}
          className="p-6 bg-green-100 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
        >
          <a className="flex justify-center items-center mb-4">
            <img
              src="/images/live-chat.png"
              alt="live-chat"
              className="w-20 h-20"
            />
          </a>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">ให้คำปรึกษาและสนับสนุน<br />หลังการพัฒนา</h2>
          <p className="text-sm text-gray-600">
            เรามีบริการสนับสนุนและคำปรึกษาหลังการพัฒนาเพื่อให้เว็บไซต์ของคุณทำงานได้อย่างราบรื่น ไม่ว่าจะเป็นการอัปเดต การแก้ไขปัญหา
            หรือคำแนะนำในการพัฒนาเว็บไซต์ให้เติบโตและมีประสิทธิภาพสูงสุด
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
