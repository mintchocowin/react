import React from "react";

const cityName = (city) => {
  switch (city) {
    case "Paris":
      return "파리";
    case "New York":
      return "뉴욕";
    case "Tokyo":
      return "도쿄";
    case "Seoul":
      return "서울";
    case "Jamwon-dong":
      return "잠원동";
  }
};

const WeatherBox = ({ weather }) => {
  <div className="weatherBox">
    return(
    <div className="weatherBox">
      <h2>도시명:{weather?.name && cityName(weather.name)}</h2>
      <h2>
        온도:{weather?.main.temp}/ 습도:{weather?.main.humity}%
      </h2>
      <h2>현재날씨:{weather?.weather[0].description}</h2>
    </div>
    )
  </div>;
};

export default WeatherBox;
