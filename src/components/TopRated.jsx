import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import MovieCard from './MovieCard';

const TopRated = () => {
    const [TopRated, setTopRated] = useState([]);
    const fetchTopRated = async (x) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${x}?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setTopRated(data.results);
    }
    useEffect(() => {
        fetchTopRated("top_rated");
    },[]);
   return (
    <div className="container-fluid">
        <div className="container">
            <h4>Top Rated</h4>
            <div className="row">
                {TopRated.map((movie) => {
                    return (
                        <MovieCard key={movie._id} movie={movie} link="/detail"/>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default TopRated