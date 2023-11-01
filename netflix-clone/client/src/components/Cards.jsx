import { useState, useEffect, useRef } from "react";

import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./styles/Cards.css";
import Card from "./Card";

export const MY_API_KEY = "4842b541b44a56c09d75624d0e72cde0";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const Cards = () => {
  const [movies, setMovies] = useState([])
  const [slideNumber, setslideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const cardRef = useRef();
  const MY_API_KEY = "4842b541b44a56c09d75624d0e72cde0";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc?api_key=${MY_API_KEY}`;

      fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${MY_API_KEY}&page=1?limit=10`)
        .then((res) => res.json())
        .then((json) => setMovies(json.results.slice(0, 1)))
        .catch((err) => console.error("error:" + err));
    };
    fetchMovies();
  }, []);
// console.log(movies)
  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <BsChevronLeft
          className="sliderArrow left"
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={cardRef}>
          
          <Card movies={movies} />
        </div>
        <BsChevronRight className="sliderArrow right" />
      </div>
    </div>
  );
};

export default Cards;
