import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../features/authSlice";

import "./SignUpForm.css";

import { FaChevronRight } from "react-icons/fa6";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isPassword, setIsPassword] = useState(false);

  const dispatch = useDispatch();
const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(inputs));
    navigate('/login')
  };
  return (
    <>
      <div className="signup-form">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="form-controls">
          {isPassword ? (
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={inputs.password}
            />
          ) : (
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              value={inputs.email}
            />
          )}
          {!isPassword ? (
            <button className="btn-signup" onClick={() => setIsPassword(true)}>
              Get Started <FaChevronRight className=" arr-icon" />
            </button>
          ) : (
            <button className="btn-signup" onClick={handleSubmit}>
              Sign Up <FaChevronRight className=" arr-icon" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
