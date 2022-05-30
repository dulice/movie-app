import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from './MovieCard';

const Trending = () => {
    const [trending, setTrending] = useState([]);
    const fetchTrending = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setTrending(data.results);
    }
    useEffect(() => {
        fetchTrending();
    },[]);
  return (
    <div className="container-fluid">
        <div className="container">
            <h4>Popular This Week</h4>
            <div className="row">
                {trending.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default Trending