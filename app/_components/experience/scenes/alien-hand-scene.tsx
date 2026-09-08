"use client";

import { Center, OrbitControls, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import ModelLoader from "../../ui/model-loader";
import { TOUCH } from "three";

const AlienHand = dynamic(() => import("../models/alien-hand"));
export default function AlienHandScene() {
  return (
    <>
      <Canvas
        camera={{ position: [2, -0.5, 5], fov: 45 }}
        gl={{ antialias: true }}
        className="w-full h-full !touch-pan-y"
      >
        <ambientLight intensity={0.5} />

        {/* O Center calcula os limites da malha (bounding box) e centraliza perfeitamente */}
        <Center>
          <Suspense
            fallback={
              <Html center>
                <ModelLoader />
              </Html>
            }
          >
            <AlienHand />
          </Suspense>
        </Center>
        <Environment preset="lobby" />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2 - 0.1}
          touches={{
            ONE: undefined,
            TWO: TOUCH.ROTATE,
          }}
        />
      </Canvas>
    </>
  );
}
