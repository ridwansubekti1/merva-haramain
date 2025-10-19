"use client";

import React from "react";
import { motion } from "framer-motion";

const galleryData = [
  { id: 1, title: "Angle Berdoa", description: "Deskripsi singkat.", imageUrl: "/images/berdoa.png" },
  { id: 2, title: "Angle Perjalanan", description: "Deskripsi singkat.", imageUrl: "/images/perjalanan.png" },
  { id: 3, title: "Angle Kebersamaan", description: "Deskripsi singkat.", imageUrl: "/images/kebersamaan.png" },
  { id: 4, title: "Angle Branding", description: "Deskripsi singkat.", imageUrl: "/images/branding.png" },
  { id: 5, title: "Angle Face", description: "Deskripsi singkat.", imageUrl: "/images/face.png" },
];

export default function Gallery() {
  return (
    <div className="relative bg-gradient-to-b from-white via-[#dedeff] to-white py-16 sm:py-20">
      {/* Judul */}
      <h2 className="relative text-3xl font-bold text-center mb-10 z-10" style={{ color: "#1f1d59" }}>
        Galeri Perjalanan Umroh
      </h2>

      {/* Card Galeri */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-6 z-10">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-[#d1d1f5]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold" style={{ color: "#1f1d59" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
