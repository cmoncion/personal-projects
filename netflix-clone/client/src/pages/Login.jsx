import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";


import "./Login.css";
import MainNavBars from "../components/MainNavBars";
import FooterSignin from "../components/FooterSignin";


const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const dispath = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispath(signInUser(inputs))
    navigate('/browse')
  }
  return (
    <>
      <div className="signin">
        <MainNavBars signin />
        <div className="wrapper-form">
          <div className="signin-form">
            <h1>Sign In</h1>

            <div className="inputs-content">
              <input
                className="input-control"
                type="email"
                name="email"
                placeholder="Enter email or phone number"
                onChange={handleChange}
                value={inputs.email}
              />
              <input
                className="input-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={inputs.password}
              />
              <button className="btn-signin" onClick={handleSubmit}>Sign In</button>
            </div>
            <div className="remember-signin">
              <label htmlFor="">
                <input type="checkbox" name="" id="" /> Remember me
              </label>
              <span>Need Help?</span>
            </div>
            <div className="new-signup">
              <div className="sgn-text">
                <p>New to Netflix?</p>
                <a href="">Sign up now</a>
              </div>
              <p>
                This page is protected by Google reCAPTCHA to <br /> ensure
                you're not a bot.
                <a href="" className="lmore">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <FooterSignin />
      </div>
    </>
  );
};

export default Login;
