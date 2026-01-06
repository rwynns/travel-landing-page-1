"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara melakukan booking?",
    answer: "Anda bisa memilih paket yang diinginkan, klik tombol 'Booking', lalu isi data diri di formulir yang tersedia atau langsung chat admin via WhatsApp. Setelah itu lakukan pembayaran DP minimal 50% untuk mengamankan slot.",
  },
  {
    question: "Apa saja yang harus saya bawa?",
    answer: "Untuk trip gunung disarankan membawa pakaian hangat, jaket windbreaker, sepatu hiking, obat-obatan pribadi, dan kamera. Untuk trip pantai, bawa baju renang, sunblock, kacamata hitam, dan topi.",
  },
  {
    question: "Apakah pemula boleh ikut trip gunung?",
    answer: "Tentu saja! Kami memiliki paket khusus untuk pemula dengan track yang lebih santai. Guide kami juga akan selalu mendampingi dan membantu selama perjalanan.",
  },
  {
    question: "Bagaimana kebijakan refund jika batal?",
    answer: "Pembatalan H-14 uang DP kembali 100%. H-7 kembali 50%. Kurang dari H-7 DP hangus, namun bisa dialihkan ke peserta lain (reschedule/ganti nama).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold font-montserrat text-neutral-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-bold text-lg font-montserrat text-neutral-800">{faq.question}</span>
                <span className="p-2 bg-neutral-100 rounded-full text-primary-600">{openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-neutral-600 leading-relaxed border-t border-neutral-50">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
