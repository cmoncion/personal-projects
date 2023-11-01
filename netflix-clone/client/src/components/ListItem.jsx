import { useState } from "react";
import "./styles/ListItem.css";
//  import cardImage from '../'
const ListItem = ({ index, movies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {movies?.map((movie, index) => (
        <div
          key={movie.id}
          style={{ let: isHovered && index * 225 - 50 + index * 2.5 }}
          className="list-item"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* {isHovered && ( */}
             <><div className="image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                alt=""
              />
            </div>
              {/* <video src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4" /> */}
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
                  {movie?.genres.map((genre, i)=>(
                    <li key={i}>{genre}</li>
                  ))}
                </ul>
              </div>
            </>
          {/* )} */}
        </div>
      ))}
    </>
  );
};

export default ListItem;

// {movies?.map((movie, index) => (
//   <div
//     key={movie.id}
//     style={{ let: isHovered && index * 225 - 50 + index * 2.5 }}
//     className="list-item"
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//   >
//     {!isHovered ? (
//       <div className="image">
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//           alt=""
//         />
//       </div>
//     ) : (
//       <>
//         <video src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4" />
//         <div className="item-info">
//           <div className="icons">
//             <span className="icons-left">
//               <i className="ri-play-fill  icon-circle"></i>
//               <i className="ri-add-line  icon-circle"></i>
//               <i className="ri-thumb-up-line  icon-circle"></i>
//             </span>
//             <span className="icon-right">
//               <i className="ri-arrow-down-s-line icon-circle"></i>
//             </span>
//           </div>
//           <div className="item-info-top">
//             <span>Nuevo</span>
//             <span>R</span>
//             <span>2h 16 min</span>
//             <span>HD</span>
//           </div>
//           <ul className="genre">
//             <li>Comedy</li>
//             <li>Adventure</li>
//             <li>Action</li>
//           </ul>
//         </div>
//       </>
//     )}
//   </div>
// ))}
