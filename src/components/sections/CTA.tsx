"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-primary-600 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
              Siap Memulai <span className="text-secondary-400">Petualangan?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-10 leading-relaxed">Jangan tunda lagi! Bergabunglah dengan ribuan traveler yang sudah merasakan pengalaman tak terlupakan bersama kami.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100 shadow-xl w-full sm:w-auto">
                Lihat Semua Paket
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white w-full sm:w-auto">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat Admin WhatsApp
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary-200 font-medium">🎁 Promo Spesial: Diskon 15% untuk early bird booking!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
