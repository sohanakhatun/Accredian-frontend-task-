import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/register");
  };
  return (
    <div className="home">
      <h1 className="heading">WELCOME TO MY REACT APPLICATION</h1>
      <button className="btn" onClick={handleclick}>
        Signup
      </button>
    </div>
  );
};

export default Home;
