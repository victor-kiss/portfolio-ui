"use client";

import { Center, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import dynamic from "next/dynamic";
import ModelLoader from "../../ui/model-loader";
import { Suspense } from "react";

const Alien = dynamic(() => import("../models/alien"));

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [-1, 0, 3.8], fov: 45 }}
      gl={{ antialias: true }}
      className="w-full h-full !touch-pan-y"
    >
      {/* Reduz levemente a iluminação global para não lavar o contraste do modelo */}
      <ambientLight intensity={0.5} />

      {/* Rim Light (Luz de contorno traseira/lateral):
          Cria uma borda luminosa esverdeada/ciano que separa o alien do fundo roxo */}
      <directionalLight 
        position={[3, 2, -3]} 
        intensity={2.5} 
        color="#00ffcc" 
      />

      {/* Key Light (Luz principal frontal):
          Luz branca suave vindo de cima/frente para revelar os detalhes e texturas do alien */}
      <directionalLight 
        position={[-2, 3, 2]} 
        intensity={1.2} 
        color="#ffffff" 
      />

      {/* Fill Light (Luz de preenchimento inferior):
          Rebate um tom arroxeado nas sombras inferiores para integrar o alien ao ambiente */}
      <directionalLight 
        position={[0, -3, 1]} 
        intensity={0.6} 
        color="#a855f7" 
      />

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

      {/* Ajustado o ambiente do studio para um tom mais sutil */}
      <Environment preset="sunset" />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 2 - 0.1}
      />
    </Canvas>
  );
}