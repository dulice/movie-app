import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'

const Trailer = () => {
    const [trailer, setTrailer] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const fetchTrailer = async(index) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${index}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        const data = await res.json();
        // console.log(data.results[0].key)
        setTrailer(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchTrailer(params.movie)
    },[params.movie]);

  return (
    <div>
      {loading ?
       (<h4>Loading...</h4>):
       (
         <div className="contaner-fluid pt-5">
            <ReactPlayer
              url={`https://youtu.be/${trailer.results[0].key}`}
              controls = {false}
              width = "100%"
              height = "90vh"
              playing = {true}
          />
        </div>
       )
     }
    </div>
  )
}

export default Trailer