import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom"

const Detail = () => {
    const [details, setDetails] = useState([]);
    const params = useParams();
    const imagePath = "https://image.tmdb.org/t/p/original/";
    const fetchDetail = async(index) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${index}?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data);
        setDetails(data);
    }
    useEffect(() => {
        fetchDetail(params.id);
    },[params.id]);
  return (
    <div className="">
        <div key={details.id} className="container-fluid vh-100 detail-hero" style={{background: `url(${imagePath}${details.backdrop_path})`}}>
                    <div className="container">
                        <div className="row d-flex align-items-center vh-100">
                            <div className="col-12 col-md-5 text-white">
                                <h4>{details.name}</h4>
                                <p className="text-white-50">{details.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="text-white-50">{details.first_air_date}</p>
                                    <div className="d-flex align-items-center">
                                    <FaThumbsUp/>
                                    <h6 className="text-white-50 m-0 ps-1">{details.vote_average}</h6>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center my-3">
                                    <button className="btn btn-outline-dark">
                                        <p className="m-0">Total episode - {details.number_of_episodes}</p>
                                    </button>
                                    <button className="btn btn-outline-dark">
                                        <p className="m-0">Total seasons - {details.number_of_seasons}</p>
                                    </button>
                                </div>
                                {/* <div className="d-flex align-items-center">
                                    {details.genres.map(detail => {
                                        return (
                                            <div key={detail.id} className="me-3 mb-3">
                                                <button className="btn btn-outline-dark">{detail.name}</button>
                                            </div>
                                        )
                                    })}
                                </div> */}
                                <Link to={`/trailer/${details.id}`}>
                                    <button className="btn btn-dark">Watch Trailer</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Detail