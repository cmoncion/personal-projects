import { BsPlusLg } from "react-icons/bs";
import "./styles/FAQ.css";
import SignUpForm from "./reusables/SignUpForm";

const FAQ = () => {
  return (
    <>
      <div className="faq">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="faq-boxes">
            <div className="faq-box">
              <div className="title-icon">
                <h3>What is Netflix?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
            <div className="faq-box">
              <div className="title-icon">
                <h3>How much does Netflix cost?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
            <div className="faq-box">
              <div className="title-icon">
                <h3>Where can I watch?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
            <div className="faq-box">
              <div className="title-icon">
                <h3>Wow do I cancel?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
            <div className="faq-box">
              <div className="title-icon">
                <h3>What can I watch on Netflix?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
            <div className="faq-box">
              <div className="title-icon">
                <h3>Is Netflix good for kids?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
            <div className="faq-box">
              <div className="title-icon">
                <h3>What is Netflix?</h3>
                <BsPlusLg className="plus-icon" />
              </div>
            </div>
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default FAQ;
