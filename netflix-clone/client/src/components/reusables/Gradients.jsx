import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import "./Gradients.css";

const Gradients = () => {
  return (
    <div className="gradient-box">
      <div className="gradient">
        <div className="grad-info">
          <h3>The Netflix you love for just EUR5.49.</h3>
          <p>Get the Standard with ads plan.</p>
          <Link>
            Learn More <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gradients;
