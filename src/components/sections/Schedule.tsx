"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const schedules = [
  { destination: "Bromo Sunrise", date: "15 Jan 2024", duration: "2H1M", price: "Rp 750.000", seats: 8 },
  { destination: "Raja Ampat", date: "20 Jan 2024", duration: "4H3M", price: "Rp 3.500.000", seats: 5 },
  { destination: "Labuan Bajo", date: "25 Jan 2024", duration: "3H2M", price: "Rp 2.250.000", seats: 0 },
  { destination: "Bromo Sunrise", date: "29 Jan 2024", duration: "2H1M", price: "Rp 750.000", seats: 12 },
  { destination: "Nusa Penida", date: "02 Feb 2024", duration: "3H2M", price: "Rp 1.850.000", seats: 6 },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-montserrat mb-4">
            Jadwal <span className="text-secondary-500">Keberangkatan</span>
          </motion.h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Temukan tanggal yang pas untuk liburanmu selanjutnya. Seat terbatas!</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto rounded-3xl shadow-lg border border-neutral-100">
          <table className="w-full text-left border-collapse">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="p-6 font-semibold rounded-tl-3xl">Destinasi</th>
                <th className="p-6 font-semibold">Tanggal</th>
                <th className="p-6 font-semibold">Durasi</th>
                <th className="p-6 font-semibold">Harga</th>
                <th className="p-6 font-semibold">Sisa Seat</th>
                <th className="p-6 font-semibold rounded-tr-3xl text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-100">
              {schedules.map((item, index) => (
                <tr key={index} className="hover:bg-neutral-50 transition-colors">
                  <td className="p-6 font-bold text-neutral-900">{item.destination}</td>
                  <td className="p-6 text-neutral-600">{item.date}</td>
                  <td className="p-6 text-neutral-600">{item.duration}</td>
                  <td className="p-6 font-bold text-secondary-500">{item.price}</td>
                  <td className="p-6">
                    {item.seats === 0 ? (
                      <span className="text-red-500 font-semibold bg-red-100 px-3 py-1 rounded-full text-xs">FULL BOOKED</span>
                    ) : item.seats < 6 ? (
                      <span className="text-orange-500 font-semibold bg-orange-100 px-3 py-1 rounded-full text-xs">{item.seats} Tersisa</span>
                    ) : (
                      <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-xs">Available</span>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    <Button size="sm" variant={item.seats === 0 ? "outline" : "primary"} disabled={item.seats === 0}>
                      {item.seats === 0 ? "Waitlist" : "Booking"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
