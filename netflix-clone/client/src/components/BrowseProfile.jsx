import React, { useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import ProImg1 from "../images/profile1.png";
import ProImg2 from "../images/profile2.png";
import ProImg3 from "../images/profile3.png";
import ProImg4 from "../images/profile4.png";
import ProImg5 from "../images/profile1.png";

import "./styles/BrowseProfile.css";
const BrowseProfile = ({handleClick}) => {
  const [currentUser, setCurrentUser] = useState(false);

  const { user } = useSelector(state=> state.auth)
  
//   const navigate = useNavigate();

//   const handleSelectProfile = () => {
//     console.log(currentUser)
//     setCurrentUser(true);
//     navigate('/browse')
    
//   };
  return (
    <>
      <div className="browse-profile">
        <div className="wrapper">
          <h1>¿Quién está biendo ahora?</h1>
          <div className="pic-profile">
            <div className="pic-box">
              <img src={ProImg1} alt="" />
              <h4>Erik Benjamin</h4>
              <BiLockAlt size={30} />
            </div>
            <div className="pic-box">
              <button className="btn-pro" onClick={()=>handleClick(user)}>
                <img src={ProImg2} alt="" />
                <h4>Erik Benjamin</h4>
              </button>
              <BiLockAlt size={30} />
            </div>
            <div className="pic-box">
              <img src={ProImg3} alt="" />
              <h4>Erik Benjamin</h4>
              <BiLockAlt size={30} />
            </div>
            <div className="pic-box">
              <img src={ProImg4} alt="" />
              <h4>Erik Benjamin</h4>
              <BiLockAlt size={30} />
            </div>
            <div className="pic-box">
              <FaPlusCircle size={80} />
              <h4>Agregar perfil</h4>
            </div>
          </div>
          <button className="btn-profile">Administrar perfiles</button>
        </div>
      </div>
    </>
  );
};

export default BrowseProfile;
