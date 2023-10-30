import React from 'react';
import '../../../styles/register.css';
import facebook from "../../../assets/icons/facebook.png";
import linkedIn from "../../../assets/icons/linkedin.png";
import googlePlus from "../../../assets/icons/google-plus.png";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [err, setErr] = useState(false);
  
  
   const handleSubmit = (e) => {
          e.preventDefault();
          if (email === "" || password === "") {
              setErr(true);
              return;
          }
          fetch(" API URL ")
              .then((response) => {
                  if (response.ok) {
                      return response.json();
                  } else {
                      throw new Error('Error occurred while fetching user data');
                  }
              })
              .then((data) => {
                  const foundUser = data.find((user) => user.email === email && user.password === password);
                  if (foundUser) {
  
                      alert("Login successful");
                      console.log('Login successful:', foundUser);
                     
                  } else {
                      alert('Login failed: Invalid email or password');
                      
                  }
              })
              .catch((error) => {
                  console.log('Error occurred during login:', error);
              });
      };
  
    return (
      <div className="signup-container login-container">
        <div className="form-section">
          <div className="content">
            <center className="text-center mb-5 p-2">
              <h1>SOFT WASH</h1>
            </center>
  
            <center className=''>
              <h4>Sign In to Soft Wash</h4>
              <div className="icons-section">
                <div className="icon">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="icon">
                  <img src={googlePlus} alt="google plus" />
                </div>
                <div className="icon">
                  <img src={linkedIn} alt="linkedin" />
                </div>
              </div>
              or use your email account
            </center>
  
            <form onSubmit={handleSubmit}>
              <div className="input-section">
                <div>
                  {" "} 
                  <label htmlFor="email" className='mb-2 login-label'>YOUR EMAIL</label>
                </div>
                <input
                  type="text"
                  value={email}
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@provider.com"
                />
                 {err === true && email === "" ? <p className="error">Email Address Required</p> : null}
              </div>
  
              <div className="input-section">
                <div className="d-flex justify-content-between mb-2 login-labell ">
                  {" "}
                  <label htmlFor="password login-label2" >PASSWORD</label>{" "}
                  <span className="forgot-password pointer">
                    Forgot your password?
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="5+ characters"
                />
                {err === true && password === "" ? <p className="error">Password Required</p> : null}
              </div>
  
              <div className="button-section">
                <button type="submit">Sign In</button>
              </div>
  
              <center
                className="for-mobile note pointer"
                onClick={() => navigate("/UserRegister")}>
               New User?  <span className=" mt-3  fw-bolder">Signup Here</span>
              </center>
            </form>
          </div>
        </div>
  
        <div className="banner-section">
          <center className="logo-sectio">{/* <h5>Eventbux</h5> */}</center>
  
          <div className="welcome-section">
            <center>
              <p className="note text-light">New here?</p>
              <p className="welcome">Join Us Today!</p>
  
              <div className="button-section">
                <button onClick={() => navigate("/UserRegister")}>
                  Sign Up
                </button>
              </div>
            </center>
          </div>
            <center className="copyright">Copyright © 2023</center>
        </div>
      </div>
    );
  }
  