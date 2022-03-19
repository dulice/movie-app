import React from 'react'
import Home from './home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movie from './Movie'
import TVshow from './TVshow'
import Nav from '../components/Nav'
import Search from './search'
import Detail from './Detail';
import TVshowDetail from './TvshowDetail'
import Trailer from './Trailer'
import MovieTrailer from "./MovieTrailer"
import SignIn from './SignIn';

const Pages = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/movies" element={ <Movie /> } />
            <Route path="/tvshow" element={ <TVshow /> } />
            <Route path="/signin" element={ <SignIn />} />
            <Route path="/search/:name" element={ <Search /> } />
            <Route path="/detail/:id" element={ <Detail /> } />
            <Route path="/tvshowdetail/:id" element={ <TVshowDetail /> } />
            <Route path="/trailer/:movie" element={ <Trailer /> } />
            <Route path="/movietrailer/:movie" element={ <MovieTrailer /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Pages