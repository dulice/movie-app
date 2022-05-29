import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from "react-router-dom"

const Hero = () => {
    const [hero, setHero] = useState([]);
    const imagePath = "https://image.tmdb.org/t/p/original/";
    const fetchHero = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setHero(data.results);
    }
    useEffect(() => {
        fetchHero();
    },[]);
  return (
    <Splide 
    options = {{
        rewind : true,
        gap    : '1rem',
    }}
    className="">
        {hero.map((movie) => {
            return (
                <SplideSlide key={movie.id} className="container-fluid hero" style={{backgroundImage: `url(${imagePath}${movie.backdrop_path}), linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),`}}
                >
                    <div className="row d-flex align-items-center justify-content-between h-100">
                        <div className="col-12 col-md-5 ms-5">
                            <h4 className="text-white">{movie.title}</h4>
                            <p className="text-white-50">{movie.overview}</p>
                            <Link to={`/movietrailer/${movie.id}`}>
                                <button className="btn btn-dark">Watch</button>
                            </Link>
                        </div>
                    </div>
                </SplideSlide>

            )
        })}
    </Splide>
  )
}

const Slide = styled(SplideSlide)`
    background-position: center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
`
export default Hero
