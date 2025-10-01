'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Paket Layanan', href: '/paket-layanan' },
  { name: 'Alur Perjalanan', href: '/alur-perjalanan' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Informasi Kemitraan', href: '/info-kemitraan' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm">
      {/* Navbar Desktop & Mobile Trigger */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Merva Haramain</span>
            <img
              alt="Merva Haramain Logo"
              src="/logo.png"
              className="h-8 w-auto dark:hidden"
            />
            <img
              alt="Merva Haramain Logo"
              src="/logo.png"
              className="h-8 w-auto hidden dark:block"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 dark:text-white 
                         hover:text-green-600 transition-colors duration-200 
                         whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/pendaftaran"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white 
                       shadow-sm hover:bg-green-500 focus-visible:outline-2 
                       focus-visible:outline-offset-2 focus-visible:outline-green-600 
                       transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Daftar Sekarang
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto 
                                bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 
                                dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Merva Haramain</span>
              <img
                alt="Merva Haramain Logo"
                src="/logo.png"
                className="h-8 w-auto dark:hidden"
              />
              <img
                alt="Merva Haramain Logo"
                src="/logo-dark.png"
                className="h-8 w-auto hidden dark:block"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                               text-gray-900 hover:bg-green-50 dark:text-white 
                               dark:hover:bg-green-900/10 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="py-6">
                <Link
                  href="/pendaftaran"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold 
                             text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 
                             focus-visible:outline-offset-2 focus-visible:outline-green-600 
                             w-full text-center transition-all duration-300"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
