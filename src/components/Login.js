import React from "react";
import logo from "../assest/logo.png";
import webEngage from "../assest/webEngage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const navigate = useNavigate();

  const data = {
    email: userEmail,
    number: userNumber,
  };

  const handleLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (userEmail == "" || !regex.test(userEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (userNumber == ""|| !(userNumber?.length ==10  ) ) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
    if (userEmail == "" || userNumber == "") return;

    navigate("/thankyou", { state: data });
  
  };

  



  return (
    
    <div className="main-container">
      <img src={logo} className="image" height="50%" width="50%"></img>
      <div className="right-container">
        <div
          style={{ fontWeight: "bold", fontSize: "80px", marginBottom: "35px" }}
        >
          <img src={webEngage} className="logo" height="50%" width="50%"></img>
        </div>

        <div className="heading">Get a FREE</div>
        <div className="subHeading">consultation with an expert</div>
        <div className="container-btn" style={{ alignItems: "center" }}>
          <input
            placeholder="Email your email"
            style={{ width: "70%", height: "50px", marginTop: "20px" }}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          {emailError ? (
            <span style={{ color: "red", marginLeft: "50%" }}>
              {" "}
              Required field
            </span>
          ) : (
            ""
          )}
          <input
            placeholder="Enter your mobile"
            style={{ width: "70%", height: "50px", marginTop: "20px" }}
            
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
          />
          {numberError ? (
            <span style={{ color: "red", marginLeft: "50%" }}>
              Required field
            </span>
          ) : (
            ""
          )}
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              width: "70%",
              height: "50px",
              marginTop: "25px",
            }}
            onClick={handleLogin}
          >
            Talk to us
          </button>
        </div>
      </div>
    </div>


  );
};

export default Login;
