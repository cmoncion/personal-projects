import { useState } from "react";
import "./styles/Card.css";

const Card = ({ movies }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <>
      {movies.map((movie, index) => (
        <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
            /> */}
          {isHovered && (
            <>
              {/* <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
              /> */}
              <div className="card-info">
                <div className="icons">
                  <span className="icons-left">
                    <i className="ri-play-fill  icon-circle"></i>
                    <i className="ri-add-line  icon-circle"></i>
                    <i className="ri-thumb-up-line  icon-circle"></i>
                  </span>
                  <span className="icon-right">
                    <i className="ri-arrow-down-s-line icon-circle"></i>
                  </span>
                </div>
                <div className="card-info-top">
                  <span>Nuevo</span>
                  <span>R</span>
                  <span>2h 16 min</span>
                  <span>HD</span>
                </div>
                <ul className="genre">
                  <li>Comedy</li>
                  <li>Adventure</li>
                  <li>Action</li>
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Card;
