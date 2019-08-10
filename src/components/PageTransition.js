import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function PageTransition({ children, location }) {
  const duration = 0.35

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration },
    },
  }

  return (
    <AnimatePresence>
      <motion.main
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        id="main"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default PageTransition
