"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["inteligente", "estratégica", "competitiva", "precisa"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        return (currentIndex + 1) % words.length;
      });
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="min-h-screen min-w-screen bg-[#0a0f1e] flex flex-col items-start ">
      <h1 className="text-6xl font-bold text-[#f0f6ff] text-start ml-10 mt-20 w-1/3">
        Candidate-se de forma{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            transition={{ duration: 0.4, ease: "easeOut" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-[#4a9eff] block"
            suppressHydrationWarning
          >
            {words[currentIndex]}
            <span className="text-[#f0f6ff]">.</span>
          </motion.span>
        </AnimatePresence>
      </h1>
      <p className="text-[#8ba3c7] mt-6 ml-10 w-1/3">
        Do currículo à mensagem certa — tudo que você precisa para se destacar,
        em segundos.
      </p>
    </section>
  );
};

export default Hero;
