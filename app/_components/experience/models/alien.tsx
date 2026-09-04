import * as THREE from 'three'
import React, { JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    tmp5nrzl1scobj: THREE.Mesh
  }
  materials: {
    pbr_material: THREE.MeshStandardMaterial
  }
  animations: THREE.AnimationClip[]
}

export default  function Alien(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/alien-final.glb') as unknown as GLTFResult
  
  // Pegamos a largura do viewport 3D atual em tempo real
  const { width } = useThree((state) => state.viewport)

  // Definimos uma escala base que aumenta ou diminui proporcionalmente à largura da tela
  // Se a tela for estreita (mobile), a escala diminui; se for larga (desktop), cresce.
  const responsiveScale = width < 3 ? width * 1 : 2

  return (
    <group {...props} dispose={null}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.tmp5nrzl1scobj.geometry} 
        material={materials.pbr_material} 
        // Aplicamos a escala responsiva calculada dinamicamente
        scale={responsiveScale} 
      />
    </group>
  )
}

useGLTF.preload('/alien-final.glb')