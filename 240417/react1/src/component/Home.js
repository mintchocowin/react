import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div className="homepage">
      <div>Home page</div>
      <Link to="/about">Go to about Page</Link>
      <button onClick={goProductPage}>Go to Product page</button>
    </div>
  );
};

export default Home;
