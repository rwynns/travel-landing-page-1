"use client";

import { motion } from "framer-motion";
import PackageCard from "../ui/PackageCard";
import { Button } from "../ui/Button";

const packages = [
  {
    title: "Open Trip Raja Ampat 4H3M",
    price: "Rp 3.500.000",
    image: "/raja_ampat.png",
    duration: "4 Hari 3 Malam",
    location: "Papua Barat",
    seats: 5,
  },
  {
    title: "Explore Bromo Sunrise & Kawah Ijen",
    price: "Rp 750.000",
    image: "/hero_background.png", // Reusing hero image for now
    duration: "2 Hari 1 Malam",
    location: "Jawa Timur",
    seats: 8,
  },
  {
    title: "Sailing Komodo 3H2M Phinisi",
    price: "Rp 2.250.000",
    image: "/raja_ampat.png", // Placeholder
    duration: "3 Hari 2 Malam",
    location: "Labuan Bajo",
    seats: 3,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-montserrat text-neutral-900 mb-4">
            Paket Wisata <span className="text-primary-600">Populer</span>
          </motion.h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Pilih destinasi impianmu dan nikmati pengalaman liburan terbaik bersama guide profesional kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Lihat Semua Paket
          </Button>
        </div>
      </div>
    </section>
  );
}
