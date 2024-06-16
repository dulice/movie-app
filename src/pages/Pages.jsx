import React from "react";
import Home from "./home";
import { Routes, Route, useLocation } from "react-router-dom";
import Movie from "./Movie";
import TVshow from "./TVshow";
import Nav from "../components/Nav";
import Search from "./search";
import Detail from "./Detail";
import Trailer from "./Trailer";
import SignIn from "./SignIn";
import DetailPerson from "./DetailPerson";
import MovieGenre from "./MovieGenre";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/tvshow" element={<TVshow />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detailPerson/:id" element={<DetailPerson />} />
          <Route path="/trailer/:movie" element={<Trailer />} />
          <Route path="/genre/:id" element={<MovieGenre />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Pages;
