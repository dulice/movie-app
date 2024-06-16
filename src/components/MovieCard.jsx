import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaThumbsUp } from "react-icons/fa";
import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { createSearchParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const MovieCard = ({ movie, type }) => {
  const imagePath = "https://image.tmdb.org/t/p/w342/";
  const navigate = useNavigate();
  const params = { type: type };

  const gotoUrl = () =>
    navigate({
      pathname: `/detail/${movie.id}`,
      search: `?${createSearchParams(params)}`,
    });
  return (
    <MCard className="col-6 col-md-4 col-lg-2 mb-4" key={movie.id}>
      <motion.div onClick={gotoUrl}>
        <div className="card rounded shadow position-relative">
          {movie.poster_path ? (
            <img
              className="w-100 rounded"
              src={`${imagePath}${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <div className="movie-cover p-4">
              <p>movie image unavalible</p>
            </div>
          )}
          <div className="card-body ">
            <span className="text-white">
              <BsFillPlayCircleFill />
            </span>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <h6 className="title">{movie.title || movie.name}</h6>
              <div className="d-flex align-items-center">
                <FaThumbsUp />
                <h6 className="text-black-50 m-0 ps-1">
                  {movie.vote_average?.toFixed(1)}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </MCard>
  );
};

const MCard = styled(SplideSlide)`
  .card {
    color: #313131;
    text-decoration: none;
    transition: 0.5s;
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
  }
  .title {
    white-space: nowrap;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

export default MovieCard;
