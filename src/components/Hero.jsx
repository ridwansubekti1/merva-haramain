'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from './Reveal'

export default function HeroAksenHijau() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Aksen Hijau Transparan Bulat */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12 relative z-10">
        {/* Konten Kiri */}
        <Reveal>
          <div className="text-gray-800 max-w-xl">
            <p
              className="text-left text-3xl sm:text-4xl lg:text-5xl leading-tight font-serif text-green-800"
              dir="rtl"
            >
            وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
            </p>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              “Dan sempurnakanlah ibadah haji dan umrah karena Allah.”
              <br />
              <span className="font-semibold text-green-700">(QS. Al-Baqarah 196)</span>
            </p>
            <p className="mt-6 text-base sm:text-lg text-gray-700">
              Bersama <span className="font-semibold text-green-700">Merva Travel</span>,
              wujudkan perjalanan suci Anda dengan aman & nyaman.
            </p>
            <div className="mt-8">
              <Link
              href="/paket"
              className="inline-flex items-center justify-center rounded-md 
                        bg-gradient-to-r from-green-600 to-green-500 
                        px-8 py-4 text-base font-semibold text-white 
                        shadow-lg hover:from-green-500 hover:to-green-400 
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
          <div className="relative w-full h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-green-200">
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
