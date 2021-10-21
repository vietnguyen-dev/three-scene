import { Layout } from '../components/Layout'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
   <Layout title='Home'>
     <Canvas>
     <color attach="background" args={["#012E40"]} />
       <mesh>
        <boxGeometry args={[1, 2, 4]}/>
        <meshStandardMaterial />
       </mesh>
       <ambientLight intensity={0.1} />
       <directionalLight color="red" position={[0, 0, 5]} />
     </Canvas>
   </Layout>
  )
}
