import Link from "next/link"

export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#1f1d59]">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Halaman tidak tersedia
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            InsyaAllah dalam waktu dekat akan hadir. Mohon ditunggu yah!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-[#1f1d59] px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#2b29a3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f1d59] transition-all duration-300 hover:scale-105"
            >
              Beranda
            </Link>
            <a
              href="#"
              className="text-sm font-semibold text-gray-900 hover:text-[#1f1d59] transition-colors"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
