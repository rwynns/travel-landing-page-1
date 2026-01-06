"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

// Placeholder photos - in real app would be dynamic or actual paths
const photos = [
  { src: "/raja_ampat.png", width: 800, height: 600, alt: "Raja Ampat" },
  { src: "/hero_background.png", width: 1600, height: 900, alt: "Bromo Sunrise" },
  { src: "/about_us.png", width: 800, height: 600, alt: "Trekkers" },
  { src: "/komodo.png", width: 1600, height: 900, alt: "Komodo" }, // Generated soon
  { src: "/bali.png", width: 800, height: 600, alt: "Bali" }, // Generated soon
  { src: "/hero_background.png", width: 800, height: 600, alt: "Another Bromo" },
];

// Custom render function for next/image support in react-photo-album
function renderPhoto({ imageProps: { alt, title, sizes, className, onClick }, wrapperStyle }: any) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image fill src={imageProps.src} {...{ alt, title, sizes, className, onClick }} className={`${className} hover:brightness-110 transition-all duration-300 cursor-zoom-in`} />
    </div>
  );
}

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-montserrat mb-4">
            Galeri <span className="text-secondary-500">Petualangan</span>
          </motion.h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Intip keseruan momen-momen tak terlupakan dari perjalanan kami.</p>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          {/* Note: In a real implementation with Next.js Image, we need a custom render wrapper or standard map.
              For simplicity with react-photo-album which supports custom renderers, we'd use that.
              However, to avoid complexity with the wrapper types in this snippet, I'll use a CSS Grid fallback 
              if strictly needed, but let's try a simple grid with Next Image first for reliability without complex lib config. 
          */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer group" onClick={() => setIndex(i)}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>

          <Lightbox slides={photos} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </motion.div>
      </div>
    </section>
  );
}
