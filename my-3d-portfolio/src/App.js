// src/App.js
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from "./components/MyModel.js";

function App() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 1]} />
        <MyModel scrollY={scrollY} />
        <OrbitControls />
      </Canvas>

      <div style={{ height: "200vh", background: "#111", color: "#fff", padding: "20px" }}>
        <h1 style={{ marginTop: "100vh" }}>Scroll Down to Animate 3D Model!</h1>
      </div>
    </>
  );
}

export default App;
