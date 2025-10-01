"use client"
import { motion } from "framer-motion"

const posts = [
  {
    id: 1,
    title: 'Mengapa Umrah Menjadi Impian Setiap Muslim?',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate commodi expedita quibusdam odio explicabo.',
    date: 'Mar 30, 2025',
    datetime: '2025-03-30',
    imageUrl: "/images/ka'bah.png",
    category: 'Inspirasi',
  },
  {
    id: 2,
    title: 'Cerita Jamaah: Pengalaman Tak Terlupakan Bersama Merva Haramain',
    href: '#',
    description:
      'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2025',
    datetime: '2025-03-10',
    imageUrl: "/images/ka'bah.png",
    category: 'Cerita Jamaah',
  },
  {
    id: 3,
    title: 'Doa-Doa Mustajab Saat Umrah yang Perlu Diamalkan',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2025',
    datetime: '2025-02-12',
    imageUrl: "/images/ka'bah.png",
    category: 'Tips Doa',
  },
]

export default function Articles() {
  // Parent buat stagger
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  }

  // Anak (artikel) fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Artikel Pilihan
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Inspirasi & wawasan seputar Umroh dan Haji
          </p>
        </div>

        {/* Grid Artikel with reveal */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-emerald-100 pt-10 sm:mt-20 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02]"
            >
              {/* Thumbnail + Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Konten */}
              <div className="flex flex-1 flex-col p-6">
                <time
                  dateTime={post.datetime}
                  className="text-xs uppercase tracking-wide text-emerald-600"
                >
                  {post.date}
                </time>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900 hover:text-emerald-600 transition-colors">
                  <a href={post.href}>{post.title}</a>
                </h3>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
