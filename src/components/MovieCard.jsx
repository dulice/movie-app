import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { FaThumbsUp } from "react-icons/fa";
import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  const imagePath = "https://image.tmdb.org/t/p/w342/";
  return (
    <MCard className="col-12 col-md-3 mb-4" key={movie.id}>
      <Link to={`/detail/${movie.id}`} className="text-decoration-none">
        <div className="card rounded shadow">
          <div className="card-body position-relative">
              <span className='text-white'>
                <BsFillPlayCircleFill/>
              </span>
              {movie.poster_path? <img className="w-100 rounded" src={`${imagePath}${movie.poster_path}`} alt={movie.title} /> : (<div className="movie-cover"><p >movie image unavalible</p></div>)}
              <div className="d-flex justify-content-between align-items-center">
                <h6 >{movie.title}</h6>
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
}

const MCard = styled(SplideSlide)`
  color: #313131;
  text-decoration: none;
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
    color: #313131;
    text-decoration: none;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    span {
      display: block;
      color: white !important;
    }
  }
`

export default MovieCard