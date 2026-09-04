import * as THREE from 'three'
import { JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    tmp8lqeukjqobj: THREE.Mesh
  }
  materials: {
    pbr_material: THREE.MeshStandardMaterial
  }
  animations: THREE.AnimationClip[]
}

export default function AlienHand(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/alien-hand-final.glb') as unknown as GLTFResult

   const { width } = useThree((state) => state.viewport)
    const responsiveScale = width < 3 ? width * 0.8 : 2
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tmp8lqeukjqobj.geometry} material={materials.pbr_material} position={[0.017, 0.168, -0.01]} scale={responsiveScale}  />
    </group>
  )
}

useGLTF.preload('/alien-hand-final.glb')
