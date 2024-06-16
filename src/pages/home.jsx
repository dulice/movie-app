import React, { useEffect } from "react";
import Hero from "../components/hero";
import PopularPerson from "../components/PopularPerson";
import Trending from "../components/Trending";
import { motion } from "framer-motion";
import { fadeIn } from "../api/utils";

const Home = () => {
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
      <Hero />
      <PopularPerson />
      <Trending />
    </motion.div>
  );
};

export default Home;
