"use client";

import { motion } from "framer-motion";
import { Shield, Users, Calendar, Camera } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-10 h-10 text-primary-600" />,
    title: "Harga Terbaik",
    description: "Harga transparan tanpa biaya tersembunyi. Dapatkan pengalaman premium dengan budget terjangkau.",
  },
  {
    icon: <Users className="w-10 h-10 text-secondary-500" />,
    title: "Tim Profesional",
    description: "Guide bersertifikat dan berpengalaman 5+ tahun. Safety first adalah prioritas kami.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-accent-blue" />,
    title: "Flexible Booking",
    description: "Custom itinerary sesuai kebutuhan. Open trip atau private trip, semua bisa kami layani.",
  },
  {
    icon: <Camera className="w-10 h-10 text-accent-gold" />,
    title: "Dokumentasi Gratis",
    description: "Foto dan video profesional untuk mengabadikan momen berharga Anda.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold font-montserrat text-neutral-900 mb-4">
            Mengapa Memilih <span className="text-secondary-500">Kami?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 group"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold font-montserrat mb-3">{feature.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
