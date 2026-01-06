"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  price: string;
  image: string;
  duration: string;
  location: string;
  seats: number;
}

export default function PackageCard({ title, price, image, duration, location, seats }: PackageCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary-600 shadow-sm">{seats} Seat Tersisa</div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-3">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
          <span className="mx-1">•</span>
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <h3 className="text-xl font-bold font-montserrat text-neutral-900 mb-2 line-clamp-2">{title}</h3>

        <div className="mt-auto pt-4 border-t border-neutral-100">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-neutral-500 text-xs">Mulai dari</p>
              <p className="text-2xl font-bold text-secondary-500">{price}</p>
            </div>
            <div className="text-neutral-400 text-sm line-through">{/* Optional: Fake original price if needed */}</div>
          </div>

          <Button className="w-full group-hover:bg-primary-500 transition-colors">
            Lihat Detail
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
