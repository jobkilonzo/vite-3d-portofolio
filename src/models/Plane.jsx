import React from 'react'
import planeScen from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'
const Plane = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(planeScen)
  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane