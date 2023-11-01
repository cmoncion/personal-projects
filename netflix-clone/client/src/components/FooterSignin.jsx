import "./styles/FooterSignin.css";
import { Link } from "react-router-dom";

const FooterSignin = () => {
  return (
    <>
      <footer className="footer-signin">
        <div className="container">
          <div className="q-contact">
            <Link>Questions? Contact us.</Link>
          </div>
          <div className="links">
            <div className="colum">
              <Link>FAQ</Link>
              <Link>Cookie Preferences</Link>
            </div>
            <div className="colum">
              <Link>Help Center</Link>
              <Link>Corporate Information</Link>
            </div>
            <div className="colum">
              <Link>Terms of Use</Link>
              <Link>Ad Choices</Link>
            </div>
            <div className="colum">
              <Link>Privacy</Link>
            </div>
          </div>

          <select name="" id="">
            <option value="">English</option>
            <option value="">Español</option>
          </select>
        </div>
      </footer>
    </>
  );
};

export default FooterSignin;
