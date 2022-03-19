import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components";
import { BsFillPlayCircleFill} from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import {Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

const OnAir = () => {
    const imagePath = "https://image.tmdb.org/t/p/w342/";
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
                 pagination: "false",
                 perPage: 3,
                 type: "loop",
             }}
             className="row">
                {OnAir.map((movie) => {
                    return (
                        <MCard className="col-12 col-md-3 mb-4" key={movie.id}>
                            <Link to={`/tvshowdetail/${movie.id}`} className="text-decoration-none">
                                <div className="card rounded shadow">
                                <div className="card-body position-relative">
                                    <span>
                                        <BsFillPlayCircleFill/>
                                    </span>
                                    {movie.poster_path? <img className="w-100 rounded" src={`${imagePath}${movie.poster_path}`} alt={movie.title} /> : (<div className="movie-cover"><p >movie image unavalible</p></div>)}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 >{movie.name}</h6>
                                        <div className="d-flex align-items-center">
                                        <FaThumbsUp/>
                                        <h6 className="text-black-50 m-0 ps-1">{movie.vote_average}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </MCard>
                    )
                })}
            </Splide>
        </div>

    </div>
  )
}

const MCard = styled(SplideSlide)`
  transition: .5s;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    display: none;
  }
  :hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    span {
      display: block;
    }
  }
`

export default OnAir