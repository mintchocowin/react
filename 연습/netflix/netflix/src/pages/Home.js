import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "./Redux/actions/movieAction";
import Banner from "./components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader
          color="#fff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div clnassName="slide">
        <div classNAme="movieContents">
          <h1>Popular Movie</h1>
          <MovieSlide movies={popularMovies} />
          <h1>TopRated Movie</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>Upcoming Movie</h1>
          <MovieSlide movies={upComingMovies} />
        </div>
      </div>
    );
  }
};
