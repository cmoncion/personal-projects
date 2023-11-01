import "./styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="q-contact">
            <Link>Questions? Contact us.</Link>
          </div>
          <div className="links">
            <div className="colum">
              <Link>FAQ</Link>
              <Link>Investor Relations</Link>
              <Link>Ways to Watch</Link>
              <Link>Corporate Information</Link>
              <Link>Legal Notices</Link>
            </div>
            <div className="colum">
              <Link>Help Center</Link>
              <Link>Jobs</Link>
              <Link>Terms of Use</Link>
              <Link>Contact us</Link>
              <Link>Only on Netflix</Link>
            </div>
            <div className="colum">
              <Link>Account</Link>
              <Link>Redeem Gift Cards</Link>
              <Link>Privacy</Link>
              <Link>Speed Test</Link>
              <Link>Ad Choices</Link>
            </div>
            <div className="colum">
              <Link>Media Center</Link>
              <Link>Buy Gift Cards</Link>
              <Link>Cookie Preferences</Link>
              <Link>Legal Guarantee</Link>
            </div>
          </div>
          <div className="language">
            <select name="" id="">
              <option value="">English</option>
              <option value="">Español</option>
            </select>

            <span>Netflix Spain</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
