import "bootstrap/dist/css/bootstrap.min.css";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import MovieCard from "./MovieCard";
import { apiKey, fetcher } from "../api/utils";
import Loading from "./Loading";
import useSWR from "swr";
import Error from "./Error";

const Upcoming = () => {
  const {
    data: Upcoming,
    isLoading,
    isError,
    error,
  } = useSWR(`/movie/upcoming${apiKey}`, fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <h4 className="py-3">Upcoming</h4>
        <Splide
          options={{
            gap: "1rem",
            autoplay: true,
            pagination: false,
            perPage: 5,
            breakpoints: {
              780: {
                perPage: 4,
              },
              640: {
                perPage: 2,
              },
            },
            type: "loop",
          }}
          className="row"
        >
          {Upcoming.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} type="movie" />;
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Upcoming;
