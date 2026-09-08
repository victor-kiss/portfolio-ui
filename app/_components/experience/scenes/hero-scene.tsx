"use client";

import { Center, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import dynamic from "next/dynamic";
import ModelLoader from "../../ui/model-loader";
import { Suspense } from "react";
import { TOUCH } from "three";

const Alien = dynamic(() => import("../models/alien"));
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [-1, 0, 3.8], fov: 45 }}
      gl={{ antialias: true }}
      className="w-full h-full !touch-pan-y"
    >
      <ambientLight intensity={0.8} />

      {/* O Center calcula os limites da malha (bounding box) e centraliza perfeitamente */}
      <Center position={[0, -0.75, 0]}>
        <Suspense
          fallback={
            <Html center>
              <ModelLoader />
            </Html>
          }
        >
          <Alien />
        </Suspense>
      </Center>
      <Environment preset="studio" />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 2 - 0.1}
        touches={{
          ONE: undefined,
          TWO: TOUCH.ROTATE,
        }}
      />
    </Canvas>
  );
}
