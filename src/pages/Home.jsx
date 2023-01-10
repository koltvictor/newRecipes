import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Vegan from '../components/Vegan'
import Pesca from '../components/Pescatarian'

export default function Home() {
  return (
    <div>
        <Popular />
        <Vegan />
        <Veggie />
        <Pesca />
    </div>
  )
}
