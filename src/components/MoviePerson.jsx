import { Splide } from "@splidejs/react-splide";
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { apiKey, fetcher } from "../api/utils";

const MoviePerson = () => {
  const { id } = useParams();
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useSWR(`person/${id}/combined_credits${apiKey}`, fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return (
    <Container className="mt-4">
      <Splide options={{
        gap: "1rem",
        pagination: false,
        perPage: 6,
        breakpoints: {
            780: {
               perPage: 4
            },
           640: {
             perPage: 2
           }
         },
      }}>
        {movies.cast.map((movie) => (
          <MovieCard key={movie.id} type={movie.media_type} movie={movie} />
        ))}
      </Splide>
    </Container>
  );
};

export default MoviePerson;
