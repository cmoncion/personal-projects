import { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import "./styles/List.css";
import ListItem from "./ListItem";
import { fetchMovies } from "../features/movieSlice";

export const MY_API_KEY = "4842b541b44a56c09d75624d0e72cde0";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const List = () => {
  const [slideNumber, setslideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const listRef = useRef();

  const {movies, isLoading, isError } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
console.log(movies)
   //console.log(allMovies)
   
  useEffect(() => {
    const fetchMovies = () => {
      // fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${MY_API_KEY}`)
      fetch(`${TMDB_BASE_URL}/trending/${"all"}/week?api_key=${MY_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setAllMovies(data.results.slice(0, 12)));
    };

    fetchMovies();

  }, []);

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])
  

  // 

  // useEffect(() => {
  //   const fetchMovies = () => {
  //   // fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${MY_API_KEY}`)
  //   fetch(`${TMDB_BASE_URL}/trending/${"all"}/week?api_key=${MY_API_KEY}`)
  //   .then(response => response.json())
  //   .then(data => setMovies(data.results.slice(0, 12)))
  // }
  // fetchMovies()

  // }, [])

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setslideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setslideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  // console.log(movies)
  return (
    <div className="list">
      <span className="list-title">
        Continue to watch{" "}
      </span>
      <div className="wrapper">
        <BsChevronLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem movies={allMovies} />
        </div>
        <BsChevronRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
