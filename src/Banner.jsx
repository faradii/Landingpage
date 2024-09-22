import React, { useState, useEffect } from "react";
import "./Banner.css";
// import axios from "./axioscomponent";
// import requests from "./requests";

function Banner() {
  // const [movie, setmovie] = useState([]); // singular

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchActionMovies); // achtung erstes request singular , der plural requests aus dem component
  //     setmovie(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length)
  //       ]
  //     );
  //     return request;
  //   }

  //   fetchData();
  // }, []);

  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">welcome</h1>
        <button className="banner__button">skills</button>
        <button className="banner__button">projects</button>
        <button className="banner__button">3D</button>

        <h1 className="banner__discription">I am Faradii</h1>
      </div>
    </header>
  );
}

export default Banner;
