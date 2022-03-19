import React from 'react'
import Hero from '../components/hero'
import PopularPerson from '../components/PopularPerson'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
        <Hero />
        <PopularPerson />
        <Trending />
    </div>
  )
}

export default Home