import React, { useEffect } from "react";
import useSWR from "swr";
import { apiKey, fadeIn, fetcher, imagePath } from "../api/utils";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { CardImg, Col, Container, Row, Table } from "react-bootstrap";
import MoviePerson from "../components/MoviePerson";
import { motion } from "framer-motion";

const DetailPerson = () => {
  const { id } = useParams();
  const {
    data: person,
    isLoading,
    isError,
    error,
  } = useSWR(`person/${id}${apiKey}`, fetcher);

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
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <CardImg src={`${imagePath}${person.profile_path}`} alt="" />
          </Col>
          <Col sm={6} md={8}>
            <h4>Biography</h4>
            <p>{person.biography}</p>
            <Table responsive="sm" striped>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td className="h6">{person.name}</td>
                </tr>
                <tr>
                  <td>Date Of Birth</td>
                  <td>{person.birthday}</td>
                </tr>
                {person.deathday && (
                  <tr>
                    <td>Date Of Death</td>
                    <td>{person.deathday}</td>
                  </tr>
                )}
                <tr>
                  <td>Place of Birth</td>
                  <td>{person.place_of_birth}</td>
                </tr>
                <tr>
                  <td>Known For</td>
                  <td>{person.known_for_department}</td>
                </tr>
                <tr>
                  <td>Also Known As</td>
                  {person.also_known_as.length === 0 ? (
                    <td>-</td>
                  ) : (
                    <td>
                      {person.also_known_as.map((val, index) => (
                        <p key={index}>{val}</p>
                      ))}
                    </td>
                  )}
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <MoviePerson />
      </Container>
    </motion.div>
  );
};

export default DetailPerson;
