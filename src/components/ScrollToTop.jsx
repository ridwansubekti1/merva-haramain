'use client'

import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#1f1d59] p-3 text-white 
                  shadow-lg shadow-[#1f1d59]/30 backdrop-blur-md transition-all duration-500 ease-out
                  hover:bg-[#2b2890] hover:shadow-[#1f1d59]/50 hover:scale-110 focus:outline-none 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  )
}
