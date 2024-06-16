import { apiKey, fadeIn } from "../api/utils";
import { useParams } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "../components/Loading";

const MovieGenre = () => {
  const [page, setPage] = useState(2);
  const { id } = useParams();
  const [loadMovies, setLoadMovies] = useState([]);
  const [initialMovie, setInitialMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const {data} = await axios.get(`/discover/movie${apiKey}&with_genres=${id}&page=${page}`)
      setLoadMovies(data.results);
    }
    fetchMovie();
  },[page, id]);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(`/discover/movie${apiKey}&with_genres=${id}&page=1`)
        setInitialMovie(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setInitialMovie([...initialMovie, ...loadMovies]);
  };

  if(isLoading) return <Loading />
  return (
    <Container
      className="my-4"
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Row>
          {initialMovie?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="movie" />
          ))}
          <Button onClick={handleLoadMore}>Load More</Button>
        </Row>
      </motion.div>
    </Container>
  );
};

export default MovieGenre;
