"use client"
import { Banknote, Heart, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  // Container animasi (stagger)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  // Animasi tiap card
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative bg-gradient-to-b from-white via-[#e4e4ff] to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Bersama <span className="text-[#1f1d59]">Merva Haramain</span>
        </h2>

        {/* Grid Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 sm:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 - Murah tapi Mewah */}
          <motion.div
            variants={fadeUp}
            className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#b9b8ff]
                       transition-all duration-300 hover:shadow-lg hover:shadow-[#c9c8ff]/60 hover:scale-[1.02]"
          >
            <Banknote className="mx-auto h-10 w-10 text-[#1f1d59]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#1f1d59] transition-colors">
              Murah tapi Mewah
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Fasilitas hemat tapi tetap nyaman, cocok untuk perjalanan ibadah pertama.
            </p>
          </motion.div>

          {/* Card 2 - Melayani dengan Maksimal */}
          <motion.div
            variants={fadeUp}
            className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#b9b8ff]
                       transition-all duration-300 hover:shadow-lg hover:shadow-[#c9c8ff]/60 hover:scale-[1.02]"
          >
            <Heart className="mx-auto h-10 w-10 text-[#1f1d59]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#1f1d59] transition-colors">
              Melayani dengan Maksimal
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Lebih eksklusif dengan fasilitas tambahan & kenyamanan lebih tinggi.
            </p>
          </motion.div>

          {/* Card 3 - Mudah dan Mantap */}
          <motion.div
            variants={fadeUp}
            className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#b9b8ff]
                       transition-all duration-300 hover:shadow-lg hover:shadow-[#c9c8ff]/60 hover:scale-[1.02]"
          >
            <Sparkles className="mx-auto h-10 w-10 text-[#1f1d59]" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-[#1f1d59] transition-colors">
              Mudah dan Mantap
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Full service premium, perjalanan ibadah yang tenang & berkelas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
