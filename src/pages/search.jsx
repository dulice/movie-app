import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const TopRated = () => {
    const params = useParams();
    const [TopRated, setTopRated] = useState([]);
    const fetchTopRated = async (name) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await res.json();
        console.log(data.results);
        setTopRated(data.results);
    }
    useEffect(() => {
        fetchTopRated(params.name);
    },[params.name]);
   return (
    <div className="container-fluid">
        <div className="container">
            <h4>Top Rated</h4>
            <div className="row">
                {TopRated.map((movie) => {
                    return (
                        <MovieCard movie={movie} key={movie.id} link="/detail"/>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default TopRated