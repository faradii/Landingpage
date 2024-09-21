// import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from "react";
// import { useEffect } from "react";

// import modelUrl from "./models/bfw4xy.glb";
// import modelUrl2 from "./models/woman.glb";
// import modelUrl3 from "./models/fischpoke.glb";
// import modelUrl4 from "./models/boardtexture4.glb";
// function DreiD({ selectedModel }) {
//   function Model1() {
//     const model = useGLTF(modelUrl);

//     return (
//       <primitive
//         scale={4.5}
//         position={[0, -2, 1]}
//         rotation={[0, 0.9, 0]}
//         object={model.scene}
//       />
//     );
//   }
//   function Model2() {
//     const model = useGLTF(modelUrl2);

//     return (
//       <primitive
//         scale={5}
//         position={[0, -4, 0]}
//         rotation={[0, 0, 0]}
//         object={model.scene}
//       />
//     );
//   }

//   function Model3() {
//     const model = useGLTF(modelUrl3);
//     const { actions } = useAnimations(model.animations, model.scene);

//     useEffect(() => {
//       actions?.laufen.play();
//     }, []);

//     return (
//       <primitive
//         scale={0.8}
//         position={[0, 0, 0]}
//         rotation={[0, 1.9, 0]}
//         object={model.scene}
//       />
//     );
//   }

//   function Model4() {
//     const model = useGLTF(modelUrl4);

//     return (
//       <primitive
//         scale={0.7}
//         position={[0, 0, 0]}
//         rotation={[0, 1.9, 1]}
//         object={model.scene}
//       />
//     );
//   }

//   const RenderModel = () => {
//     switch (selectedModel) {
//       case 1:
//         return <Model1 />;
//       case 2:
//         return <Model2 />;
//       case 3:
//         return <Model3 />;
//       case 4:
//         return <Model4 />;
//       default:
//         return null; // Wenn kein Modell ausgewählt ist
//     }
//   };

//   return (
//     <div className="container">
//       <Canvas className="d1">
//         <ambientLight intensity={5.5} />
//         <pointLight position={[0.0, 0.0, 0.0]} intensity={1} />
//         <Suspense fallback={null}>
//           <RenderModel />
//         </Suspense>
//         <OrbitControls
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 2}
//           minDistance={10}
//           maxDistance={10}
//           zoomSpeed={0.5}
//           zoom0={0}
//         />
//       </Canvas>
//       {/* <Canvas className="d1">
//         <ambientLight intensity={15.5} />
//         <pointLight position={[0.0, 0.0, 0.0]} intensity={1} />
//         <Suspense fallback={null}>
//           <Model2 />
//         </Suspense>
//         <OrbitControls
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 2}
//           minDistance={12}
//           maxDistance={12}
//           zoomSpeed={0.5}
//         />
//       </Canvas>
//       <Canvas className="d1">
//         <ambientLight intensity={1.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Suspense fallback={null}>
//           <Model3 />
//         </Suspense>
//         <OrbitControls
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 2}
//           minDistance={5}
//           maxDistance={5}
//           zoomSpeed={0.5}
//         />
//       </Canvas>
//       <Canvas className="d1">
//         <ambientLight intensity={20} />
//         <pointLight position={[-4.0, 2.0, -2.0]} intensity={25} />
//         <Suspense fallback={null}>
//           <Model4 />
//         </Suspense>
//         <OrbitControls
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 2}
//           minDistance={10}
//           maxDistance={10}
//           zoomSpeed={0.5}
//           zoom0={0}
//         />
//       </Canvas> */}
//     </div>
//   );
// }

// export default DreiD;
