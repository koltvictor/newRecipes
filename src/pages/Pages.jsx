import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import React from 'react'

export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />}/>
          <Route path="/cuisine/:type" element={<Cuisine />}/>
          <Route path="/searched/:search" element={<Searched />}/>
          <Route path="/recipe/:id" element={<Recipe />}/>
      </Routes>
    </AnimatePresence>
  )
}
