import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../api/utils";
import Loading from "./Loading";
import Error from "./Error";

const PopularPerson = () => {
  const imagePath = "https://image.tmdb.org/t/p/w185/";

  const {
    data: popularPerson,
    isLoading,
    isError,
    error,
  } = useSWR(`/person/popular${apiKey}`, fetcher);
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  
  return (
    <div className="container-fluid">
      <div className="container mb-5">
        <h4 className="my-3">Popular People</h4>
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
          {popularPerson.results.map((person) => {
            return (
              <SplideSlide key={person.id} className="col-6 col-md-3">
                <Link to={`/detailPerson/${person.id}`}>
                  <div className="text-center">
                    <img
                      className=" rounded-circle person-img"
                      src={`${imagePath}${person.profile_path}`}
                      alt={person.name}
                    />
                  </div>
                  <h6 className="text-center mt-3">{person.name}</h6>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default PopularPerson;
