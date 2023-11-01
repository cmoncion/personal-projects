import { useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./styles/List.css";
import ListItem from "./ListItem";

const List = () => {
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
  console.log(slideNumber)
  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <BsChevronLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
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
