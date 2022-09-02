import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MovieCard from './MovieCard'

const Latest = () => {
    const [latest, setLatest] = useState([]);
    const fetchLatest = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setLatest(data.results);
    }
    useEffect(() => {
        fetchLatest();
    },[]);
  return (
    <div className="container-fluid pt-4">
        <div className="container">
            <h4 className="py-3">Now Playing</h4>
            <Splide
             options={{
                 gap: "1rem",
                 autoplay: true,
                 pagination: false,
                 perPage: 4,
                 breakpoints: {
                    780: {
                       perPage: 4
                    },
                   640: {
                     perPage: 2
                   }
                 },
                 type: "loop",
             }} className="row">
                {latest.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} link="/detail"/>
                    )
                })}
            </Splide>
        </div>
    </div>
  )
}

export default Latest