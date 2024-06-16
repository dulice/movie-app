import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import { apiKey, fetcher } from "../api/utils";
import Loading from "./Loading";
import Error from "./Error";
import useSWR from "swr";

const TopRated = () => {
  const {
    data: TopRated,
    isLoading,
    isError,
    error,
  } = useSWR(`/movie/top_rated${apiKey}`, fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return (
    <div className="container-fluid">
      <div className="container">
        <h4>Top Rated</h4>
        <div className="row">
          {TopRated.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} type="movie" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
