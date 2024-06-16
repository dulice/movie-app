import Loading from "./Loading";
import MovieCard from "./MovieCard";
import { Splide } from "@splidejs/react-splide";
import { apiKey, fetcher } from "../api/utils";
import { Container } from "react-bootstrap";
import useSWR from "swr";
import Error from "./Error";

const Similar = ({ id, type }) => {
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useSWR(`/${type}/${id}/recommendations${apiKey}`, fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return (
    <Container className="mt-4">
      <h4>Customers also watched</h4>
      <Splide
        options={{
          gap: "1rem",
          pagination: false,
          perPage: 6,
          breakpoints: {
            780: {
              perPage: 4,
            },
            640: {
              perPage: 2,
            },
          },
        }}
      >
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} type={movie.media_type} movie={movie} />
        ))}
      </Splide>
    </Container>
  );
};

export default Similar;
