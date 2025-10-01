"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Globe, MapPin, User, Mail, Home } from "lucide-react"

export default function InfoKemitraan() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    kota: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    alert("Terima kasih! Data kemitraan Anda sudah terkirim.")
    setFormData({ nama: "", email: "", whatsapp: "", kota: "" })
  }

  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Hero */}
      <div className="relative text-center py-20 bg-green-700 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold">Informasi Kemitraan</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-green-100">
          <span className="font-semibold">Mitra Mulia, Hasil Maksimal!</span> <br />
          Bergabunglah menjadi bagian dari <span className="font-semibold">Merva Haramain</span>.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-20">
        {/* Peluang Kemitraan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-green-200 p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4">Peluang Kemitraan</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Kami membuka peluang keagenan travel umrah di seluruh Indonesia. 
            Bergabunglah bersama kami untuk meraih hasil maksimal dengan dukungan fasilitas terbaik 
            dan layanan profesional.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+628123456789"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              <Phone className="w-5 h-5" /> +62 812-3456-789
            </a>
            <a
              href="https://www.mervaharamain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-6 py-3 rounded-xl shadow-md transition"
            >
              <Globe className="w-5 h-5" /> www.mervaharamain.com
            </a>
          </div>
        </motion.div>

        {/* Hubungi Kami */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Hubungi Kami</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-700">Jl. Contoh Alamat No. 123, Jakarta Pusat, Indonesia</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-700">+62 812-3456-789</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-700">www.mervaharamain.com</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-green-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.235172264918!2d106.74450831537832!3d-6.465660060818591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec2f15ab123b%3A0x123456789abcdef!2sLokasi+Contoh!5e0!3m2!1sid!2sid!4v1759328508935"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Form Pendaftaran */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-green-200 p-10"
        >
          <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Form Pendaftaran Kemitraan</h2>
          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Nama Lengkap", name: "nama", type: "text", icon: User, placeholder: "Masukkan nama lengkap" },
              { label: "Email", name: "email", type: "email", icon: Mail, placeholder: "Masukkan email" },
              { label: "No. WhatsApp", name: "whatsapp", type: "text", icon: Phone, placeholder: "Masukkan nomor WhatsApp" },
              { label: "Kota Asal", name: "kota", type: "text", icon: Home, placeholder: "Masukkan kota asal" },
            ].map((field) => (
              <div className="flex flex-col" key={field.name}>
                <label className="mb-2 font-medium text-gray-700">{field.label}</label>
                <div className="flex items-center border rounded-lg px-3">
                  <field.icon className="text-green-600 w-5 h-5 mr-2" />
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full py-2 outline-none"
                    placeholder={field.placeholder}
                  />
                </div>
              </div>
            ))}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl shadow-md transition"
              >
                Kirim Pendaftaran
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
