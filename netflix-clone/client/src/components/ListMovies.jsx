import { useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./styles/List.css";
import ListItem from "./ListItem";


const ListMovies = ({movies}) => {
  const [slideNumber, setslideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
        setslideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
        setslideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <h3 className="list-title">
        Continue to watch{" "}
      </h3>
      <div className="wrapper">
        <BsChevronLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container"  ref={listRef}>
           <ListItem movies={movies} /> 
        </div>
        <BsChevronRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default ListMovies;
