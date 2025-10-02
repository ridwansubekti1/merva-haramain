"use client"
import { CheckIcon, StarIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

const tiers = [
  {
    name: 'Ekonomi',
    id: 'tier-ekonomi',
    href: '#',
    price: 'IDR. 31.000.000',
    description:
      'Harga terjangkau dengan fasilitas dasar, cocok untuk jamaah yang ingin beribadah umrah dengan anggaran minimal.',
    features: [
      '9 Hari (5 Hari Mekah, 3 Hari Madinah)',
      'Tiket pesawat kelas ekonomi dan transportasi bus AC selama di Arab Saudi.',
      'Disediakan musyrif ibadah dalam kelompok besar',
      'Perlengkapan Standar',
      'Tas Umroh Standar',
      'Pakaian Ihram',
      'Buku Panduan Doa',
      'Sajadah',
      'Tumbler',
      'Sampul Al-Quran',
    ],
    featured: false,
  },
  {
    name: 'Reguler',
    id: 'tier-reguler',
    href: '#',
    price: 'IDR. 37.000.000',
    description:
      'Harga menengah dengan fasilitas yang lebih lengkap dan lokasi akomodasi yang lebih strategis.',
    features: [
      '11 Hari (6 Hari Mekah, 4 hari Madinah)',
      'Tiket pesawat kelas ekonomi dan transportasi bus AC selama di Arab Saudi.',
      'Disediakan musyrif ibadah dalam kelompok besar',
      'Perlengkapan Standar',
      'Tas Umroh Standar',
      'Pakaian Ihram',
      'Buku Panduan Doa',
      'Sajadah',
      'Tumbler',
      'Sampul Al-Quran',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    price: 'IDR. 73.500.000',
    description:
      'Pelayanan premium untuk kenyamanan dan pengalaman ibadah yang maksimal, cocok bagi jamaah yang mencari fasilitas tinggi.',
    features: [
      '12 Hari (6 Hari Mekah, 5 Hari Madinah)',
      'Tiket pesawat kelas bisnis, transfer bandara dengan kendaraan pribadi',
      '3 kali sehari dengan menu prasmanan internasional',
      'Disediakan musyrif ibadah personal',
      'Perlengkapan premium, akses layanan kesehatan selama perjalanan',
      'Tas Umroh Premium',
      'Pakaian Ihram Premium',
      'Buku Panduan Doa',
      'Sajadah Premium',
      'Tumbler Premium',
      'Sampul Al-Quran',
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
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
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-emerald-600">Harga Terbaik</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Pilih sesuai kebutuhanmu
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
        Tiga pilihan paket dengan pelayanan ramah, fasilitas lengkap, dan pengalaman ibadah tak terlupakan.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-y-6 sm:mt-20 lg:grid-cols-3 lg:gap-x-6"
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            variants={fadeUp}
            className={classNames(
              tier.featured
                ? 'relative bg-emerald-50 border-2 border-yellow-400 shadow-2xl shadow-emerald-200 transform scale-[1.07]'
                : 'bg-white border-2 border-emerald-200 shadow-lg shadow-emerald-100',
              'rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-emerald-400/40 hover:shadow-2xl'
            )}
          >
            {/* Gradient Header */}
            <div
              className={classNames(
                tier.featured
                  ? 'bg-gradient-to-r from-yellow-400 via-emerald-500 to-emerald-700'
                  : 'bg-gradient-to-r from-emerald-500 to-emerald-300',
                'h-2 w-full'
              )}
            />

            {/* Badge untuk featured */}
            {tier.featured && (
              <span className="absolute top-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-emerald-900 shadow-lg ring-2 ring-emerald-500/60 animate-pulse">
                <StarIcon className="h-5 w-5 text-emerald-900" />
                Rekomendasi
              </span>
            )}

            <div className="p-8 sm:p-10">
              <h3 id={tier.id} className="text-emerald-600 text-sm font-semibold">
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-gray-900 text-3xl font-bold tracking-tight">
                  {tier.price}
                </span>
              </p>
              <p className="mt-6 text-sm text-gray-600">{tier.description}</p>

              <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-5 w-5 flex-none text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-500'
                    : 'text-emerald-600 ring-1 ring-emerald-200 hover:ring-emerald-300',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10 transition-all'
                )}
              >
                Pilih Paket
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
