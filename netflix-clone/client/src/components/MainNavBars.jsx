import "./styles/MainNavBars.css";
import { useNavigate, Link } from "react-router-dom";

const MainNavBars = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <nav>
          {props.signin ? (
            <Link to="/">
              <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
                alt=""
              />
            </Link>
          ) : (
            <img
              className="nav-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
              alt=""
            />
          )}

          <div
            className="nav-right"
            style={{ display: `${props.signin ? "none" : ""}` }}
          >
            <select name="" id="">
              <option value="">English</option>
              <option value="">Español</option>
            </select>
            <Link to="/login" className="btn-signin">
              Sign Ing
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainNavBars;
