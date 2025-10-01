"use client"
import { Star, Heart, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  // Parent container buat stagger
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // jeda antar card
      },
    },
  }

  // Animasi tiap card
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Judul */}
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Bersama <span className="text-emerald-600">Merva Travel</span>
        </h2>

        {/* Cards with stagger animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 sm:mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 
                       transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02]"
          >
            <div className="px-6 pt-6 pb-4 text-center">
              <Star className="mx-auto h-8 w-8 text-emerald-500" />
              <p className="mt-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                Murah tapi Mewah
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Fasilitas hemat tapi tetap nyaman, cocok untuk perjalanan ibadah pertama.
              </p>
            </div>
            <div className="relative h-60 w-full overflow-hidden">
              <img
                alt="Ka'bah"
                src="/images/ka'bah.png"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 
                       transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02]"
          >
            <div className="px-6 pt-6 pb-4 text-center">
              <Heart className="mx-auto h-8 w-8 text-emerald-500" />
              <p className="mt-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                Melayani dengan Maksimal
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Lebih eksklusif dengan fasilitas tambahan & kenyamanan lebih tinggi.
              </p>
            </div>
            <div className="relative h-60 w-full overflow-hidden">
              <img
                alt="Ka'bah"
                src="/images/ka'bah.png"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 
                       transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02]"
          >
            <div className="px-6 pt-6 pb-4 text-center">
              <Globe className="mx-auto h-8 w-8 text-emerald-500" />
              <p className="mt-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                Mudah dan Mantap
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Full service premium, perjalanan ibadah yang tenang & berkelas.
              </p>
            </div>
            <div className="relative h-60 w-full overflow-hidden">
              <img
                alt="Ka'bah"
                src="/images/ka'bah.png"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
