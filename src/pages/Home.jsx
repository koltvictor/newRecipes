import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Vegan from '../components/Vegan'
import Pesca from '../components/Pescatarian'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    inital={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <Popular />
        <Vegan />
        <Veggie />
        <Pesca />
    </motion.div>
  )
}
