import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Footer() {
  const pages = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Paket Layanan', href: '#paket' },
    { name: 'Alur Perjalanan', href: '#alur' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Info Kemitraan', href: '#kemitraan' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/', icon: Facebook },
    { name: 'Email', href: 'mailto:info@mervaharamain.com', icon: Mail },
    { name: 'WhatsApp', href: 'https://wa.me/628123456789', icon: Phone },
    { name: 'Linkedin', href: 'https://linkedin.com/', icon: Linkedin },
  ]

  return (
    <footer className="bg-[#1f1d59] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Kolom 1: Logo + sosmed */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="#beranda" className="flex flex-col items-start mt-2 text-lg font-semibold">
            Merva Haramain
          </Link>

          {/* Ikon Sosmed */}
          <div className="flex space-x-3 mt-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#d2d1ff] transition-colors p-2 rounded-full bg-[#2b2980] hover:bg-[#3734a0]"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Kolom 2: Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.href}
                  className="text-[#d2d1ff] hover:text-white transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <ul className="space-y-3 text-[#d2d1ff]">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-white" />
              <span>Bogor, Jawa Barat</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              <a
                href="mailto:info@mervaharamain.com"
                className="hover:text-white transition-colors"
              >
                info@mervaharamain.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                +62 812-3456-789
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-[#d2d1ff] text-sm">
        <p>&copy; {new Date().getFullYear()} Merva Haramain. All rights reserved.</p>
      </div>
    </footer>
  )
}
