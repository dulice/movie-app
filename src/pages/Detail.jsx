import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import { RiArrowLeftLine } from "react-icons/ri";
import Loading from "../components/Loading";
import Similar from "../components/Similar";
import useSWR from "swr";
import { apiKey, fadeIn, fetcher } from "../api/utils";
import Error from "../components/Error";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const getType = new URLSearchParams(search).get("type");
  const imagePath = "https://image.tmdb.org/t/p/original/";

  const {
    data: details,
    isLoading,
    isError,
    error,
  } = useSWR(`/${getType}/${params.id}${apiKey}`, fetcher);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className="container-fluid hero"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url(${imagePath}${details?.backdrop_path})`,
        }}
      >
        <div className="container">
          <RiArrowLeftLine
            onClick={() => navigate(-1)}
            className="text-white h4 mt-4"
          />
          <div className="row d-flex align-items-center detail-hero">
            <div className="col-12 col-md-6 text-white">
              {getType === "movie" ? (
                <div>
                  <h4>{details.title}</h4>
                  <p className="text-white-50">{details.overview}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-white-50">{details.release_date}</p>
                    <div className="d-flex align-items-center">
                      <FaThumbsUp />
                      <h6 className="text-white-50 m-0 ps-1">
                        {details.vote_average}
                      </h6>
                    </div>
                  </div>
                  <ButtonGroup className="d-block mb-4">
                    {details.genres?.map((detail) => {
                      return (
                        <Link key={detail.id} to={`/genre/${detail.id}`}>
                          <Button
                            disabled
                            key={detail.id}
                            variant="outline-warning"
                          >
                            {detail.name}
                          </Button>
                        </Link>
                      );
                    })}
                  </ButtonGroup>
                </div>
              ) : (
                <div>
                  <h4>{details.name}</h4>
                  <p className="text-white-50">{details.overview}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-white-50">{details.first_air_date}</p>
                    <div className="d-flex align-items-center">
                      <FaThumbsUp />
                      <h6 className="text-white-50 m-0 ps-1">
                        {details.vote_average}
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <button className="btn btn-success" disabled>
                      <p className="m-0">
                        Total episode - {details.number_of_episodes}
                      </p>
                    </button>
                    <button className="btn btn-success" disabled>
                      <p className="m-0">
                        Total seasons - {details.number_of_seasons}
                      </p>
                    </button>
                  </div>
                </div>
              )}
              <Link to={`/trailer/${details.id}?type=${getType}`}>
                <button className="btn btn-dark">Watch Trailer</button>
              </Link>
            </div>
          </div>
          <Similar id={details.id} type={getType}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
