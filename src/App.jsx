import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import './App.css'

const Cube = ({position, size, color }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
  })

  return(
    <mesh position={position} ref={ref}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <group position={[0, -1, 0]}>
      <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
      <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1] }/>

      <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
      <Cube position={[1, 2, 0]} color={"yellow"} size={[1, 1, 1]} />
      </group>

      <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"orange"} />
      
    </Canvas>
  )
}

export default App
