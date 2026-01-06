"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold font-montserrat block mb-6">
              <span className="text-white">Travel</span>
              <span className="text-secondary-500">Trip</span>.
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6">Kami adalah partner terpercaya untuk pengalaman travel tak terlupakan di Indonesia. Eksplorasi keindahan alam dengan aman dan nyaman.</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-500 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Paket Wisata", "Tentang Kami", "Galeri", "Blog", "Kontak"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-secondary-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">Layanan</h3>
            <ul className="space-y-3">
              {["Open Trip", "Private Trip", "Custom Trip", "Corporate Outing", "Study Tour"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-secondary-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                <span>Jl. Pahlawan No. 123, Surabaya, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Phone className="w-5 h-5 text-secondary-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Mail className="w-5 h-5 text-secondary-500 shrink-0" />
                <span>hello@traveltrip.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-neutral-500 text-sm">
          <p>
            © 2024 TravelTrip. All rights reserved. |{" "}
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
