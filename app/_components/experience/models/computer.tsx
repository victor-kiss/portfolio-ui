
import * as THREE from 'three'
import React, { JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    tmpwk9pjwbsobj: THREE.Mesh
  }
  materials: {
    pbr_material: THREE.MeshStandardMaterial
  }
  animations: THREE.AnimationClip[]
}

export default function Computer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/computer-final.glb') as unknown as GLTFResult

  const { width } = useThree((state) => state.viewport)
  const responsiveScale = width < 3 ? width * 0.8 : 2
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tmpwk9pjwbsobj.geometry} material={materials.pbr_material} position={[0.048, -0.066, -0.069]} scale={responsiveScale} />
    </group>
  )
}

useGLTF.preload('/computer-final.glb')
