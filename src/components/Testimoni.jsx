"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Bapak Ahmad",
    role: "Jamaah Umrah 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    testimony:
      "Alhamdulillah, perjalanan saya bersama Merva Haramain sangat nyaman. Semua fasilitas sesuai janji, dari hotel, transportasi, hingga bimbingan ibadah. Sangat puas!",
  },
  {
    id: 2,
    name: "Ibu Fatimah",
    role: "Jamaah Haji 2023",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    testimony:
      "Petugasnya ramah dan selalu siap membantu. Rasanya seperti keluarga sendiri. Saya merasa aman dan tenang selama di Tanah Suci. Terima kasih Merva Haramain!",
  },
  {
    id: 3,
    name: "Pak Ridwan",
    role: "Jamaah Umrah Plus 2024",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    testimony:
      "Pelayanan profesional dan penuh keberkahan. Harga sangat bersaing tapi fasilitas premium. Saya pasti merekomendasikan ke teman-teman.",
  },
]

export default function Testimoni() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="bg-gradient-to-b from-white via-[#1f1d59]/5 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#1f1d59] sm:text-5xl">
            Testimoni Jamaah
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Cerita nyata dari para jamaah yang telah mempercayakan perjalanan suci bersama{" "}
            <span className="font-semibold text-[#1f1d59]">Merva Haramain</span>.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg border border-[#1f1d59]/10 
                         hover:shadow-xl hover:shadow-[#1f1d59]/20 transition duration-300 hover:scale-[1.02]"
            >
              <p className="text-gray-700 leading-relaxed italic">“{item.testimony}”</p>

              <div className="mt-6 flex items-center gap-x-4">
                <img
                  alt={item.name}
                  src={item.img}
                  className="h-12 w-12 rounded-full object-cover border-2 border-[#1f1d59]/30 shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-[#1f1d59]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
