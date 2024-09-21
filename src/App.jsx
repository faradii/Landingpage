// import video1 from "./";
import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import "./App.css";
import { OrbitControls, Sky, useAnimations, useGLTF } from "@react-three/drei";
import modelUrl from "./models/bfw4xy.glb";
import modelUrl4 from "./models/boardtexture4.glb";

import modelUrl3 from "./models/fischpoke.glb";
import modelUrl2 from "./models/woman.glb";

function App() {
  const [loading, setLoading] = useState(true);
  function Model1() {
    const model = useGLTF(modelUrl);

    return (
      <primitive
        scale={4}
        position={[0, -2, 1]}
        rotation={[0, 0.9, 0]}
        object={model.scene}
      />
    );
  }
  function Model2() {
    const model = useGLTF(modelUrl2);

    return (
      <primitive
        scale={5}
        position={[0, -4, 0]}
        rotation={[0, 0, 0]}
        object={model.scene}
      />
    );
  }

  function Model3() {
    // const { scene } = useGLTF("fischpoke.glb");

    const model = useGLTF(modelUrl3);
    const { actions } = useAnimations(model.animations, model.scene);

    useEffect(() => {
      actions?.laufen.play();
    }, []);

    return (
      <primitive
        scale={0.7}
        position={[0, 0, 0]}
        rotation={[0, 1.9, 0]}
        object={model.scene}
      />
    );
  }

  function Model4() {
    const model = useGLTF(modelUrl4);

    return (
      <primitive
        scale={0.7}
        position={[0, 0, 0]}
        rotation={[0, 1.9, 1]}
        object={model.scene}
      />
    );
  }

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
          <h1 className="loading"> geladen...</h1>
        </div>
      ) : (
        <div className="geladen">
          <div className="banner">
            <div className="Spruch">Faradii</div>
            {/* <div className="Spruch2"> Schau dich ruhig um..</div> */}
          </div>
          <div className="Website">
            <div className="weitereProjekte_Liste">
              {weitereProjekte.map((video, index) => (
                <div className="weitereProjekte_Rahmen" key={index}>
                  <h1>{video.text}</h1>
                </div>
              ))}
            </div>
            <div className="titeltext3d">Web</div>
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
            <div className="titeltext3d">3d</div>
            <div className="container">
              <Canvas className="d1">
                <ambientLight intensity={5.5} />
                <pointLight position={[0.0, 0.0, 0.0]} intensity={1} />
                <Suspense fallback={null}>
                  <Model1 />
                </Suspense>
                <OrbitControls
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 2}
                  minDistance={10}
                  maxDistance={10}
                  zoomSpeed={0.5}
                  zoom0={0}
                />
              </Canvas>
              <Canvas className="d1">
                <ambientLight intensity={15.5} />
                <pointLight position={[0.0, 0.0, 0.0]} intensity={1} />
                <Suspense fallback={null}>
                  <Model2 />
                </Suspense>
                <OrbitControls
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 2}
                  minDistance={12}
                  maxDistance={12}
                  zoomSpeed={0.5}
                />
              </Canvas>
              <Canvas className="d1">
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <Model3 />
                </Suspense>
                <OrbitControls
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 2}
                  minDistance={5}
                  maxDistance={5}
                  zoomSpeed={0.5}
                />
              </Canvas>
              <Canvas className="d1">
                <ambientLight intensity={20} />
                <pointLight position={[-4.0, 2.0, -2.0]} intensity={25} />
                <Suspense fallback={null}>
                  <Model4 />
                </Suspense>
                <OrbitControls
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 2}
                  minDistance={10}
                  maxDistance={10}
                  zoomSpeed={0.5}
                  zoom0={0}
                />
              </Canvas>
            </div>
            <div className="container2"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
