"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/about_us.png" // Placeholder
                alt="Tentang Kami"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-secondary-100 rounded-3xl -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl -z-0" />
          </motion.div>

          {/* Content Side */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1">
            <span className="text-secondary-500 font-bold tracking-wider uppercase text-sm mb-2 block">Tentang Kami</span>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-neutral-900 mb-6">
              Partner Terbaik untuk <br />
              <span className="text-primary-600">Petualangan Anda</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              Kami adalah travel organizer yang fokus pada pengalaman petualangan autentik di Indonesia. Sejak 2018, kami telah melayani 5000+ traveler dari berbagai kalangan untuk menjelajahi keindahan nusantara.
            </p>

            <div className="space-y-4 mb-8">
              {["Memberikan pengalaman travel yang aman dan berkesan", "Mendukung pariwisata lokal Indonesia", "Membangun komunitas traveler yang solid"].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg">Pelajari Lebih Lanjut</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
