"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "../assets/img1.jpg";

export default function Hero() {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  const fullTagline = t("hero.tagline");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullTagline.slice(0, index));
      index++;
      if (index > fullTagline.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullTagline]); // re-run when language changes

  const Button = ({ children, ...props }) => (
    <button
      {...props}
      className="text-lg px-6 py-3 bg-blue-950 hover:bg-gray-500 text-white rounded-2xl shadow-lg transition-all duration-300"
    >
      {children}
    </button>
  );

  return (
    <div className="relative bg-gradient-to-r from-blue-950 via-gray-500 to-blue-950 overflow-hidden mb-10">
      <div className="absolute inset-0 opacity-20 bg-grid-pattern bg-repeat"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center relative z-10">
        {/* Left Side Content */}
        <div className="p-8 md:p-16 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-xl md:text-3xl mb-4 text-gray-300"
          >
            {text}|
          </motion.h2>

          <p className="text-gray-200 text-base md:text-lg mb-6">
            {t("hero.description")}
          </p>
        </div>

        {/* Right Side Image with orbit effect */}
        <div className="relative p-8 flex items-center justify-center">
          <div className="relative w-72 h-96 md:w-96 md:h-128 rounded-full overflow-hidden shadow-2xl border-4 border-gray-500 hover:border-blue-950 transition-all duration-200">
            <img
              src={img1}
              alt="Technology and Innovation"
              className="object-cover w-full h-full"
            />

            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 border-2 border-dotted border-white rounded-full"
            ></motion.div>

            <motion.div
              initial={{ rotate: 360 }}
              animate={{ rotate: 0 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-4 border border-dashed border-white rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
