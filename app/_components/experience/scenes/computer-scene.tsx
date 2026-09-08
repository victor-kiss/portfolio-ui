"use client";

import { Center, OrbitControls, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ModelLoader from "../../ui/model-loader";
import { TOUCH } from "three";

const Computer = dynamic(() => import("../models/computer"));

export default function ComputerScene() {
  return (
    <Canvas
      camera={{ position: [2, -2, 4.5], fov: 45 }}
      gl={{ antialias: true }}
      className="w-full h-full !touch-pan-y"
    >
      <ambientLight intensity={0.8} />

      <Center>
        <Suspense
          fallback={
            <Html center>
              <ModelLoader />
            </Html>
          }
        >
          <Computer />
        </Suspense>
      </Center>
      <Environment preset="sunset" />
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 2 - 0.1}
      />
    </Canvas>
  );
}
