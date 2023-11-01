import React from "react";
import "./SignUp.css";
import MainNavBars from "../components/MainNavBars";
import SignUpForm from "../components/reusables/SignUpForm";
import Gradients from "../components/reusables/Gradients";



const SignUp = () => {
  return (
    <>
    <div className="signup">
      <MainNavBars />
      <div className="signup-container">
        <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
        <h2>Endless entertainment starts at just EUR5.49. Cancel anytime.</h2>
    
       <SignUpForm />
       
      </div>
      <Gradients />
    </div>
    </>
  );
};

export default SignUp;
