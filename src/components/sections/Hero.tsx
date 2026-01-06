"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/hero_background.png" // Placeholder, will replace with generated image
          alt="Mount Bromo Sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-neutral-900/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 md:pt-0">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-500/20 border border-secondary-500 text-secondary-400 text-sm font-semibold mb-4 backdrop-blur-sm">🚀 #1 Travel Agent Terpercaya</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Jelajahi Keindahan <br />
            <span className="text-secondary-500">Indonesia</span> Bersama Kami
          </h1>
          <p className="text-lg md:text-xl text-neutral-100 max-w-2xl mx-auto mb-10 drop-shadow-md">Open Trip Terjangkau dengan Pengalaman Tak Terlupakan. Dari Gunung hingga Pantai, Kami Siap Menemani Petualangan Anda!</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group w-full sm:w-auto">
            Lihat Paket Wisata
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat Admin
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-200">
          {["5000+ Traveler Puas", "50+ Destinasi Eksklusif", "Guide Bersertifikat"].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              <span className="text-green-400">✓</span> {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
