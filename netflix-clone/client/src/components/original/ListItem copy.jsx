import { useState } from "react";
import "./styles/ListItem.css";

const ListItem = ({index}) => {
    
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{let: isHovered && index * 225 - 50 + index * 2.5}} className="list-item" onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <div className="image">
        <img
          src="https://slidechef.net/wp-content/uploads/2022/08/The-Gray-Man-Template.jpg"
          alt=""
        />
      </div>
      <div className="item-info">
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
        <div className="item-info-top">
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
      
    </div>
  );
};

export default ListItem;
