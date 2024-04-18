import React from "react";
import { useNavigate } from "React-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About page</div>
      <button onClick={goToHomePage}>Go to Home page</button>
    </div>
  );
};
