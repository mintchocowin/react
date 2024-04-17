import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About page</div>
      <button onClick={gotoHomepage}>Go to Homepage</button>
    </div>
  );
};

export default About;
