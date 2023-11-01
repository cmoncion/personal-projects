import { useState } from "react";
import "./styles/Card.css";

const Card = ({ movies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* <div className="card">
        <img src="https://placehold.it/300x200" alt="" />
        <div className="overlay">
          <h3>Card Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div> */}

      <div className="card">
        <div className="cover card-image">
          <div className="content">
            <img src="" alt="" />
            <h3>Cards</h3>
          </div>
        </div>
        <div className="cover card-info">
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minima accusamus tempora animi fugit rerum, eum dolore
            inventore quas laborum error similique suscipit voluptas soluta
            consequatur debitis nisi sed? Ea?
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
