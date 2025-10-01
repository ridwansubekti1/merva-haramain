'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // animasi sekali aja pas muncul
    threshold: 0.1,    // muncul kalau 10% elemen keliatan
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
