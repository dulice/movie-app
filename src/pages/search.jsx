import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { apiKey, fadeIn, fetcher } from "../api/utils";
import Loading from "../components/Loading";
import Error from "../components/Error";
import useSWR from "swr";
import { motion } from "framer-motion";

const TopRated = () => {
  const { name } = useParams();
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useSWR(`/search/multi${apiKey}&query=${name}`, fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container my-4">
        <div className="row">
          {movies.results.map((movie) => {
            return (
              <MovieCard
                movie={movie}
                key={movie.id}
                link="/detail"
                type={movie.media_type}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default TopRated;
