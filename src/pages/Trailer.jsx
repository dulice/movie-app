import { useLocation, useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { Card, Container } from "react-bootstrap";
import { RiArrowLeftLine } from "react-icons/ri";
import ReactPlayer from "react-player";
import { apiKey, fetcher } from "../api/utils";
import useSWR from "swr";
import Error from "../components/Error";

const Trailer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const getType = new URLSearchParams(search).get("type");

  const {
    data: trailer,
    isLoading,
    isError,
    error,
  } = useSWR(`/${getType}/${params.movie}/videos${apiKey}`, fetcher);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            <RiArrowLeftLine onClick={() => navigate(-1)} />
          </Card.Title>
          <ReactPlayer
            url={`https://youtu.be/${trailer.results[0]?.key}`}
            controls={true}
            width="100%"
            height="80vh"
            playing={false}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Trailer;
