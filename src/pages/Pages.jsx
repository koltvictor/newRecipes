import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes } from 'react-router-dom'

import React from 'react'

export default function Pages() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:id" element={<Recipe />}/>
    </Routes>
  )
}
