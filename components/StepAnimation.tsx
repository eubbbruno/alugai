'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StepAnimationProps {
  children: ReactNode
  index: number
}

export function StepAnimation({ children, index }: StepAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  )
}