// import video1 from "./";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import Banner from "./Banner";
import Row from "./Row";
// import DreiD from "./DreiD";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {};
  }, [loading]);

  const videoSources = [
    {
      src: "vorschau6.jpg",
      type: "video/mp4",
      text: "Pokemon Home Challenge",
      text2:
        "Beschreibung: Tracke deine Aufgaben die regelmäßig anstehen und sammel Punkte um dein Pokemon zu entwickeln oder neue Eier Schlüpfen zu lassen",
    },
    {
      src: "vorschau4.jpg",
      type: "video/mp4",
      text: "Myou ",
      text2:
        "Beschreibung: Lerne neue Leute kennen, die auf der Map in deiner Nähe sind. Du weist nix über sie, außer was sie tragen und was sie suchen: ein Gesprächspartner, ein Flirt, ein Handwerker?",
    },
    {
      src: "vorschau3.jpg",
      type: "video/mp4",
      text: "Model",
      text2: "Beschreibung: Eine kleiner digitaler Tourguide durch das Gebäude",
    },
    {
      src: "vorschau5.jpeg",
      type: "video/mp4",
      text: "Tattoostudio",
      text2:
        "Beschreibung: Ein Tattosudio, dass Reservierung nur mit Paypal akzeptiert und Termine telefonisch oder per Whatsapp ausmacht. ",
    },
    {
      src: "vorschau1.jpeg",
      type: "video/mp4",
      text: "Lesen lernen ",
      text2:
        "Beschreibung: Bring der Roboterspinne das Lesen bei, nutze dafür die lustigen Bildchen.",
    },
    {
      src: "vorschau2.jpeg",
      type: "video/mp4",
      text: "Buchstaben lernen",
      text2:
        "Beschreibung: Kinderleicht den Anfangsbuchstaben verschiedener Wörter lernen.",
    },
  ];

  const weitereProjekte = [
    {
      // src: "vorschau5.png",
      // type: "video/mp4",
      text: "Pygame 2D",
      // text2: "Quiz, Animation, Sound",
    },
    {
      // src: "vorschau4.jpg",
      // type: "video/mp4",
      text: "Python 3D Ursina",

      // text2: "Vorle",
    },
    {
      // src: "vorschau3.jpg",
      // type: "video/mp4",
      text: "Python SQLite",
      // text2: " Database",
    },
    {
      // src: "vorschau6.jpg",
      // type: "video/mp4",
      text: "MYSQL ",

      // text2: "Links",
    },
    {
      // src: "vorschau1.png",
      // type: "video/mp4",
      text: "Javascript",
      // text2: "3D Model",
    },
    {
      // src: "vorschau2.png",
      // type: "video/mp4",

      text: "React Js",
      // text2: "Authe, Animation, Sound ",
    },
    {
      // src: "vorschau2.png",
      // type: "video/mp4",

      text: "React Three Fiber ",
      // text2: "Authe, Animation, Sound ",
    },
    {
      // src: "vorschau5.png",
      // type: "video/mp4",
      text: "Node Js",
      // text2: "Quiz, Animation, Sound",
    },
    {
      // src: "vorschau4.jpg",
      // type: "video/mp4",
      text: "Next js",

      // text2: "Vorle",
    },
    {
      // src: "vorschau4.jpg",
      // type: "video/mp4",
      text: "Firebase Authentication",

      // text2: "Vorle",
    },

    {
      // src: "vorschau3.jpg",
      // type: "video/mp4",
      text: "Firebase Hosting",
      // text2: " Database",
    },
    {
      // src: "vorschau6.jpg",
      // type: "video/mp4",
      text: "Firebase Database",

      // text2: "Links",
    },
    {
      // src: "vorschau1.png",
      // type: "video/mp4",
      text: "GitHub",
      // text2: "3D Model",
    },
    {
      // src: "vorschau2.png",
      // type: "video/mp4",

      text: "Blender",
      // text2: "Authe, Animation, Sound ",
    },
    {
      // src: "vorschau2.png",
      // type: "video/mp4",

      text: "RPG Maker XP",
      // text2: "Authe, Animation, Sound ",
    },
    {
      text: "Github Pages",
    },
    {
      text: "Git",
    },
    {
      text: "Vite",
    },
    {
      text: "Arduino",
    },
    {
      text: "Raspberry",
    },
  ];

  return (
    <div className="App">
      {loading ? (
        <div className="loadingdiv">
          <h1 className="loading"> welcome..</h1>
        </div>
      ) : (
        <div className="geladen">
          <Banner />

          <div className="Website">
            <div className="leer"></div>
            <div className="weitereProjekte_Liste">
              {weitereProjekte.map((video, index) => (
                <div className="weitereProjekte_Rahmen" key={index}>
                  <h1>{video.text}</h1>
                </div>
              ))}
            </div>
            <div className="leer"></div>
            {/* <div className="titeltext3d">-projects-</div> */}
            <div className="VideosListe">
              {videoSources.map((video, index) => (
                <div className="Rahmen" key={index}>
                  <div className="videorahmen">
                    {/* <img
                      className="filterfotos"
                      // src={video.src}
                      height="180px"
                    ></img> */}
                    <h1>{video.text}</h1>
                    <p>{video.text2}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Row /> */}
          </div>
          {/* <DreiD selectedModel={3} /> */}
          {/* <DreiD selectedModel={4} /> */}
          <div className="leer"></div>
          <div className="leer">Hier folgen weitere Inhalte</div>
        </div>
      )}
    </div>
  );
}

export default App;
