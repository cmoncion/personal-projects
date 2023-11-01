import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <header className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <nav>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
                alt=""
              />
              <ul>
                <Link>Inicio</Link>
                <Link>Series</Link>
                <Link>Películas</Link>
                <Link>Novedades Populares</Link>
                <Link>Mi Lista</Link>
                <Link>Explorar por idiomas</Link>
              </ul>
            </nav>
          </div>
          <div className="right">
            <i className="ri-search-line icons"></i>
            <span>Niños</span>
            <i className="ri-notification-2-fill icons"></i>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              alt=""
            />
            <div className="profile">
              <i className="ri-arrow-down-s-fill icons"></i>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
