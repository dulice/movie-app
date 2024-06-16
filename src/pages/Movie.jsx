import NowPlaying from "../components/Lastest";
import React, { useEffect } from "react";
import Upcoming from "../components/Upcoming";
import TopRated from "../components/TopRated";
import { motion } from "framer-motion";
import { fadeIn } from "../api/utils";

const Movie = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Upcoming />
      <NowPlaying />
      <TopRated />
    </motion.div>
  );
};

export default Movie;
