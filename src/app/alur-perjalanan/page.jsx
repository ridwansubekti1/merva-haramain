"use client"

import { motion } from "framer-motion"
import { Plane, Building, Bus, Hotel, Landmark } from "lucide-react"

// Alur Jakarta → Madinah → Mekkah
const stepsMadinahFirst = [
  {
    id: 1,
    title: "Hari 1 – Keberangkatan",
    description: "Berkumpul di Bandara Soekarno-Hatta, briefing perjalanan & check-in.",
    icon: <Plane className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Hari 2 – Tiba di Madinah",
    description: "Ziarah ke Masjid Nabawi, shalat di Raudhah, dan doa di makam Rasulullah ﷺ.",
    icon: <Building className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Hari 3-4 – Ziarah Madinah",
    description: "Kunjungan ke Jabal Uhud, Masjid Quba, dan Masjid Qiblatain.",
    icon: <Landmark className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Hari 5 – Perjalanan ke Mekkah",
    description: "Menuju Mekkah, melakukan Umroh pertama (Tawaf, Sa’i, dan Tahallul).",
    icon: <Bus className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "Hari 6-9 – Ibadah di Masjidil Haram",
    description: "Shalat berjamaah, Tawaf sunnah, dan ziarah sekitar Kota Mekkah.",
    icon: <Hotel className="w-6 h-6 text-white" />,
  },
  {
    id: 6,
    title: "Hari 10 – Persiapan Pulang",
    description: "Perjalanan kembali ke Jeddah, kemudian terbang ke Indonesia.",
    icon: <Plane className="w-6 h-6 text-white" />,
  },
]

// Alur Jakarta → Mekkah → Madinah
const stepsMekkahFirst = [
  {
    id: 1,
    title: "Hari 1 – Keberangkatan",
    description: "Berkumpul di Bandara Soekarno-Hatta, briefing perjalanan & check-in.",
    icon: <Plane className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Hari 2 – Tiba di Mekkah",
    description: "Umroh pertama (Tawaf, Sa’i, dan Tahallul).",
    icon: <Building className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Hari 3-6 – Ibadah di Masjidil Haram",
    description: "Shalat berjamaah, Tawaf sunnah, dan ziarah sekitar Kota Mekkah.",
    icon: <Hotel className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Hari 7 – Perjalanan ke Madinah",
    description: "Perjalanan menuju Madinah dengan bus.",
    icon: <Bus className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "Hari 8-9 – Ziarah Madinah",
    description: "Ziarah ke Masjid Nabawi, Raudhah, Jabal Uhud, Masjid Quba, dan Masjid Qiblatain.",
    icon: <Landmark className="w-6 h-6 text-white" />,
  },
  {
    id: 6,
    title: "Hari 10 – Persiapan Pulang",
    description: "Perjalanan kembali ke Jeddah, kemudian terbang ke Indonesia.",
    icon: <Plane className="w-6 h-6 text-white" />,
  },
]

export default function AlurPerjalanan() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Versi 1: Madinah First */}
        <AlurBlock
          title="Alur Umroh (Jakarta → Madinah → Mekkah)"
          steps={stepsMadinahFirst}
          mapSide="right"
          coords={[
            { x: 80, y: 250, label: "Jakarta" },
            { x: 300, y: 100, label: "Madinah" },
            { x: 350, y: 220, label: "Mekkah" },
          ]}
        />

        {/* Versi 2: Mekkah First */}
        <AlurBlock
          title="Alur Umroh (Jakarta → Mekkah → Madinah)"
          steps={stepsMekkahFirst}
          mapSide="left"
          coords={[
            { x: 80, y: 250, label: "Jakarta" },
            { x: 350, y: 220, label: "Mekkah" },
            { x: 300, y: 100, label: "Madinah" },
          ]}
        />
      </div>
    </section>
  )
}

// Komponen Alur Block
function AlurBlock({ title, steps, mapSide, coords }) {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800">{title}</h2>
      </div>

      <div
        className={`grid gap-10 lg:gap-12 items-start lg:grid-cols-2 ${
          mapSide === "left" ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Timeline Tengah */}
        <div className="relative">
          {/* garis tengah */}
          <div className="absolute left-1/2 top-0 w-1 bg-green-600 h-full transform -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }} // lebih cepat
                className={`relative flex sm:items-center ${
                  idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* konten */}
                <div
                  className={`w-full sm:w-5/12 p-5 sm:p-6 rounded-2xl shadow-md bg-white border border-green-200 ${
                    idx % 2 === 0 ? "sm:text-left" : "sm:text-right"
                  }`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-green-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>

                {/* icon di tengah */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-600 shadow-lg">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Peta Interaktif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-green-200"
        >
          <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-4 text-center">
            Rute Perjalanan
          </h3>
          <svg
            viewBox="0 0 500 350"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-64 sm:h-72"
          >
            {/* Titik + Label */}
            {coords.map((c, i) => (
              <g key={i}>
                <circle cx={c.x} cy={c.y} r="8" fill="#16a34a" />
                <text
                  x={c.x + 15}
                  y={c.y + 5}
                  className="text-[10px] sm:text-sm fill-gray-700"
                >
                  {c.label}
                </text>
                {i > 0 && (
                  <motion.line
                    x1={coords[i - 1].x}
                    y1={coords[i - 1].y}
                    x2={c.x}
                    y2={c.y}
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                    initial={{ strokeDashoffset: 300 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                )}
              </g>
            ))}

            {/* Pesawat bergerak */}
            <motion.text
              initial={{ x: coords[0].x, y: coords[0].y }}
              animate={{
                x: coords.map((c) => c.x),
                y: coords.map((c) => c.y),
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-lg sm:text-xl"
            >
              🛫
            </motion.text>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
