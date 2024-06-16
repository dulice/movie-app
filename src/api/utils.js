import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
export const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`;
export const fetcher = (url) =>
  axios.get(url).then((response) => response.data);
export const imagePath = "https://image.tmdb.org/t/p/w342/";

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

export const slideUp = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: "50",
    },
  },
  exit: {
    y: "100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};
