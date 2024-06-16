import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from './MovieCard';
import { apiKey, fetcher } from '../api/utils';
import Loading from './Loading';
import Error from './Error';
import useSWR from "swr";

const Trending = () => {
    const {
        data: trending,
        isLoading,
        isError,
        error,
      } = useSWR(`/trending/movie/week${apiKey}`, fetcher);
    
      if (isLoading) return <Loading />;
      if (isError) return <Error error={error} />;
  return (
    <div className="container-fluid">
        <div className="container">
            <h4>Popular This Week</h4>
            <div className="row">
                {trending.results.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} type={movie.media_type} />
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default Trending