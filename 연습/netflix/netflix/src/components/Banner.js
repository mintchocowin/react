import React from "react";

const Banner = ({ movie }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "URL(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <h1>{movie.overview}</h1>
      </div>
    </div>
  );
};
