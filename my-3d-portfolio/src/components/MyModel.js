// src/components/MyModel.js
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function MyModel({ scrollY }) {
  const ref = useRef();
  const { scene } = useGLTF("/model/MyModel.glb");

  // Rotate the model based on scroll
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY.current * 0.005;
    }
  });

  return <primitive object={scene} ref={ref} scale={2} position={[0, -1.5, 0]} />;
}
