import React, { useEffect } from "react";
import TvTopRated from "../components/TvTopRated";
import OnAir from "../components/OnAir";
import { motion } from "framer-motion";
import { fadeIn } from "../api/utils";

const TVshow = () => {
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
      <OnAir />
      <TvTopRated />
    </motion.div>
  );
};

export default TVshow;
