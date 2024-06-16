import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MovieCard from './MovieCard'
import useSWR from 'swr';
import { apiKey, fetcher } from '../api/utils';
import Loading from './Loading';
import Error from './Error';

const OnAir = () => {
  const {data: OnAir, isLoading, isError } = useSWR(`/tv/on_the_air${apiKey}`, fetcher);

    if(isLoading) return <Loading />
    if(isError) return <Error />
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
                {OnAir.results.map((movie) => {
                    return (
                      <MovieCard key={movie.id} movie={movie} type="tv"/>
                    )
                })}
            </Splide>
        </div>

    </div>
  )
}

export default OnAir