import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MovieCard from './MovieCard'

const OnAir = () => {
    const [OnAir, setOnAir] = useState([]);
    const fetchOnAir = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setOnAir(data.results);
    }
    useEffect(() => {
        fetchOnAir();
    },[]);
   return (
    <div className="container-fluid pt-5">
        <div className="container">
            <h4>On Air</h4>
            <Splide
            options={{
                 gap: "1rem",
                 autoplay: true,
                 pagination: false,
                 perPage: 5,
                 breakpoints: {
                     780: {
                        perPage: 4
                     },
                    640: {
                      perPage: 2
                    }
                  },
                 type: "loop",
             }}
             className="row">
                {OnAir.map((movie) => {
                    return (
                      <MovieCard key={movie.id} movie={movie} link="/tvshowdetail"/>
                    )
                })}
            </Splide>
        </div>

    </div>
  )
}

export default OnAir