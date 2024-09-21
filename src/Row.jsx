import React, { useState, useEffect } from "react";
// import axios from "./axioscomponent";
import "./Row.css";
import itachi from "./itachi.jpg";

// const base_url = "https://image.tmdb.org/t/p/original/";

function Row({}) {
  const [movies, setMovies] = useState([itachi, itachi, itachi, itachi]);
  const [model, setModel] = useState(false);

  const betrachte3D = () => {
    setModel(!model);
  };
  return (
    <>
      <div className="row">
        <div className="row__posters">
          {movies.map((el) => (
            <div key={el.id}>
              <img
                onClick={betrachte3D}
                className="row__poster"
                // src={`${base_url}${el.poster_path}`}
                src={itachi}
                alt={el.name}
              />
            </div>
          ))}
        </div>
      </div>
      {/* {model ? <h2>HI</h2> : <h2>Ciao</h2>} */}
    </>
  );
}

export default Row;
