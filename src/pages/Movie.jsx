import NowPlaying from '../components/Lastest'
import React from 'react'
import Upcoming from '../components/Upcoming'
import TopRated from '../components/TopRated'

const Movie = () => {
  return (
    <div>
      <Upcoming />
      <NowPlaying />
      <TopRated />
    </div>
  )
}

export default Movie