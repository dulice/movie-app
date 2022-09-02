import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const PopularPerson = () => {
    const [popularPerson, setPopularPerson] = useState([]);
    const imagePath = "https://image.tmdb.org/t/p/w185/";
    const fetchTrending = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        // console.log(data.results);
        setPopularPerson(data.results);
    }
    useEffect(() => {
        fetchTrending();
    },[]);
  return (
    <div className="container-fluid">
        <div className="container mb-5">
            <h4 className="my-3">Popular People</h4>
            <Splide
             options={{
                 gap: "1rem",
                 autoplay: true,
                 pagination: false,
                 perPage: 5,
                 breakpoints: {
                    780: {
                       perPage: 4
                    },
                   640: {
                     perPage: 2
                   }
                 },
                 type: "loop",
             }}
             className="row">
                {popularPerson.map((person) => {
                    return (
                        <SplideSlide key={person.id} className="col-6 col-md-3">
                            <div className="">
                                <div className="text-center">
                                    <img className=" rounded-circle person-img" src={`${imagePath}${person.profile_path}`} alt={person.name} />
                                </div>
                                <h6 className="text-center mt-3">{person.name}</h6>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    </div>

  )
}

export default PopularPerson