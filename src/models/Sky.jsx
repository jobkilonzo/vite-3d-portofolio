import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'
const Sky = () => {
    const skyS = useGLTF(skyScene)
  return (
    <mesh>
        <primitive object={skyS.scene} />
    </mesh>
  )
}

export default Sky