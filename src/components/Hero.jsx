'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from './Reveal'

export default function HeroAksenUngu() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white via-[#e4e4ff] to-white">
      {/* Aksen Ungu Transparan Bulat */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1f1d59]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1f1d59]/20 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12 relative z-10">
        {/* Konten Kiri */}
        <Reveal>
          <div className="text-gray-800 max-w-xl">
            <p
              className="text-left text-3xl sm:text-4xl lg:text-5xl leading-tight font-serif"
              style={{ color: '#1f1d59' }}
              dir="rtl"
            >
              وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
            </p>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              “Dan sempurnakanlah ibadah haji dan umrah karena Allah.”
              <br />
              <span className="font-semibold" style={{ color: '#1f1d59' }}>
                (QS. Al-Baqarah 196)
              </span>
            </p>
            <p className="mt-6 text-base sm:text-lg text-gray-700">
              Bersama <span className="font-semibold" style={{ color: '#1f1d59' }}>Merva Haramain</span>,
              wujudkan perjalanan suci Anda dengan aman & nyaman.
            </p>
            <div className="mt-8">
              <Link
                href="/paket"
                className="inline-flex items-center justify-center rounded-md 
                          bg-gradient-to-r from-[#1f1d59] to-[#3a39a3]
                          px-8 py-4 text-base font-semibold text-white 
                          shadow-lg hover:from-[#3a39a3] hover:to-[#5a58d3]
                          hover:-translate-y-1 hover:shadow-xl 
                          transition-all duration-300 ease-out"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Gambar Kanan */}
        <Reveal delay={0.3}>
          <div className="relative w-full h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-[#c5c5fa]">
            <Image
              src="/images/ka'bah.png"
              alt="Ka'bah di Masjidil Haram"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
