"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "Paket Bromo Sunrise 2H1M",
    text: "Trip Bromo kemarin luar biasa! Guide ramah, dokumentasi bagus, dan harga sangat worth it. Pasti bakal join trip lainnya!",
    avatar: "/about_us.png", // Placeholder
  },
  {
    name: "Sarah Fitriani",
    role: "Open Trip Raja Ampat",
    text: "Pengalaman yang tak terlupakan. Raja Ampat sangat indah dan tim TravelTrip sangat membantu dari awal sampai akhir.",
    avatar: "/hero_background.png", // Placeholder
  },
  {
    name: "Budi Santoso",
    role: "Sailing Komodo",
    text: "Makanannya enak, kapal bersih, dan kru sangat profesional. Sangat merekomendasikan trip ini untuk keluarga.",
    avatar: "/raja_ampat.png", // Placeholder
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-montserrat text-neutral-900 mb-4">
            Kata Mereka Tentang <span className="text-secondary-500">Kami</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 h-full flex flex-col relative group hover:shadow-xl transition-shadow duration-300">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100 group-hover:text-primary-200 transition-colors" />

                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-neutral-600 mb-8 italic flex-grow leading-relaxed">&quot;{item.text}&quot;</p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500 relative">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold font-montserrat text-neutral-900">{item.name}</h4>
                      <p className="text-xs text-neutral-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
