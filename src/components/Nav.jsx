import React, { useState } from "react";
import {
  BiHomeCircle,
  BiCameraMovie,
  BiSearch,
  BiLogOut,
} from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useSWR from "swr";
import { apiKey, fetcher } from "../api/utils";
import Loading from "./Loading";

const Navs = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { data: categories, isLoading } = useSWR(`/genre/movie/list${apiKey}`, fetcher);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
    setSearch("");
  };
  return (
    <Navbar
      expand="lg"
      collapseOnSelect="true"
      sticky="top"
      className="shadow"
      bg="light"
    >
      <Container>
        <Navbar.Brand>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search..."
              />
              <InputGroup.Text disabled={search === ""} as="button" type="submit">
                <BiSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link className="d-flex just-content-center align-items-center gap-1">
                <BiHomeCircle />
                <h6 className="m-0">Home</h6>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/movies">
              <Nav.Link className="d-flex just-content-center align-items-center gap-1">
                <BiCameraMovie />
                <h6 className="m-0">Movie</h6>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tvshow">
              <Nav.Link className="d-flex just-content-center align-items-center gap-1">
                <RiMovie2Line />
                <h6 className="m-0">TV shows</h6>
              </Nav.Link>
            </LinkContainer>
            
            {isLoading ? (
              <Loading />
            ) : (
              <NavDropdown title="Categories">
                {categories.genres.map((genre) => (
                  <LinkContainer key={genre.id} to={`genre/${genre.id}`}>
                    <NavDropdown.Item>{genre.name}</NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
            )}
            <LinkContainer to="/signin">
              <Nav.Link className="d-flex just-content-center align-items-center gap-1">
                <BiLogOut />
                <h6 className="m-0">Sign In</h6>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
