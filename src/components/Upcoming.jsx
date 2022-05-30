import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MovieCard from './MovieCard'

const Upcoming = () => {
    const [Upcoming, setUpcoming] = useState([]);
    const fetchUpcoming = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setUpcoming(data.results);
    }
    useEffect(() => {
        fetchUpcoming();
    },[]);
  return (
    <div className="container-fluid pt-5">
        <div className="container">
            <h4 className="py-3">Upcoming</h4>
            <Splide
             options={{
                 gap: "1rem",
                 autoplay: true,
                 pagination: false,
                 perPage: 4,
                 type: "loop",
             }} className="row">
                {Upcoming.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie}/>
                    )
                })}
            </Splide>
        </div>
    </div>
  )
}

export default Upcoming