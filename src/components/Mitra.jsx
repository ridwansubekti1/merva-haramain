"use client"

import { motion } from "framer-motion"

export default function Mitra() {
  return (
    <div className="relative bg-gradient-to-b from-white via-emerald-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-lg font-semibold text-emerald-800"
        >
          Dipercaya oleh jamaah & partner terbaik
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 
                     sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 
                     lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {[
            {
              src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
              alt: "Transistor",
            },
            {
              src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
              alt: "Reform",
            },
            {
              src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
              alt: "Tuple",
            },
            {
              src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
              alt: "SavvyCal",
            },
            {
              src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
              alt: "Statamic",
            },
          ].map((logo, i) => (
            <motion.img
              key={i}
              src={logo.src}
              alt={logo.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110 transition-transform ${
                i === 4 ? "col-start-2 sm:col-start-auto" : ""
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
