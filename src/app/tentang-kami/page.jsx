"use client"

import { motion } from "framer-motion"
import { Target, CheckCircle, Users, Heart, Shield } from "lucide-react"

const team = [
  { name: "Ahmad Fulan", role: "Direktur Utama", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Ahmad Fulan", role: "Direktur Operasional", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Ahmad Fulan", role: "Manajer Pemasaran", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Ahmad Fulan", role: "Manajer Keuangan", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Ahmad Fulan", role: "Manajer Operasional Jamaah", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { name: "Ahmad Fulan", role: "Tour Leader", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
]

export default function TentangKami() {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Hero */}
      <div className="relative text-center py-16 sm:py-20 bg-green-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold"
        >
          Tentang Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-green-100 px-4"
        >
          Mengenal lebih dekat{" "}
          <span className="font-semibold">Merva Haramain</span> – Sahabat
          Perjalanan Suci Anda.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-24">
        {/* Latar Belakang */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
              Latar Belakang
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              <span className="font-semibold text-green-700">Merva Haramain</span>{" "}
              adalah perusahaan travel umrah dan haji khusus yang hadir dengan misi
              memberangkatkan jamaah dari seluruh lapisan masyarakat, termasuk dari
              kalangan pinggiran, menuju Tanah Suci dengan fasilitas terbaik.
              Dengan modal awal Rp30 miliar, kami berkomitmen menghadirkan layanan
              yang murah, mewah, mudah, dan maksimal. Kami percaya, ibadah umrah
              adalah impian setiap Muslim, dan Merva Haramain hadir untuk
              mewujudkan impian itu dengan profesionalisme, kenyamanan, dan
              keberkahan.
            </p>
          </div>
          <img
            src="/images/merva.png"
            alt="Merva Travel"
            className="rounded-2xl shadow-lg border border-green-200 w-full max-h-[360px] object-contain"
          />
        </motion.div>

        {/* Visi & Misi */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-10">
            Visi & Misi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-green-200"
            >
              <Target className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Visi
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Menjadi penyelenggara perjalanan umrah dan haji khusus terpercaya
                di Indonesia yang menghadirkan pengalaman ibadah berkualitas dengan
                harga terjangkau bagi seluruh umat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-green-200"
            >
              <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Misi
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                <li>Memberikan pelayanan perjalanan yang profesional, aman, dan nyaman.</li>
                <li>Menyediakan paket ibadah yang fleksibel sesuai kebutuhan jamaah.</li>
                <li>Menjaga kenyamanan & keamanan jamaah.</li>
                <li>Menghadirkan fasilitas premium dengan harga kompetitif.</li>
                <li>Menjalin kemitraan strategis dengan maskapai & hotel syariah.</li>
                <li>Memberdayakan masyarakat lokal melalui lapangan kerja & UMKM mitra.</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-10">
            Nilai Perusahaan
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-8 h-8 text-green-600" />, title: "Amanah" },
              { icon: <Users className="w-8 h-8 text-green-600" />, title: "Profesional" },
              { icon: <Heart className="w-8 h-8 text-green-600" />, title: "Sepenuh Hati" },
              { icon: <CheckCircle className="w-8 h-8 text-green-600" />, title: "Kebersamaan" },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-green-200 flex flex-col items-center text-center"
              >
                {val.icon}
                <h3 className="mt-3 font-semibold text-gray-800 text-sm sm:text-base">
                  {val.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Struktur Tim */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-10">
            Struktur Organisasi
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-green-200 overflow-hidden flex flex-col items-center p-4 sm:p-6"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-green-200 shadow-md"
                />
                <div className="mt-3 text-center">
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-green-600 text-[10px] sm:text-xs md:text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
