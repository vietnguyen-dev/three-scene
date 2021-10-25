import { Layout } from '../components/Layout'
import { Canvas, useLoader, useThree} from '@react-three/fiber'
// import {useResource} from '@react-three/drei'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Home() {
  // const myCamera = useResource()

  const Model = () =>{
    const gltf = useLoader(GLTFLoader, '/Morphing_Jar.gltf')
    return <primitive object={gltf.scene} scale={.5} />
  }

  return (
   <Layout title='Home'>
     <Canvas>
       
     <color attach="background" args={["#012E40"]} />
       <Suspense fallback={null}>
          <Model />
          {/* <PerspectiveCamera ref={myCamera} position={[0, 5, 5]} />
          <OrbitControls camera={myCamera.current} /> */}
          {/* <mesh>
        <boxGeometry args={[1, 2, 4]}/>
        <meshStandardMaterial />
       </mesh> */}
          {/* <OrbitControls /> */}
         </Suspense>
       <ambientLight intensity={0.1} />
       <directionalLight color="red" position={[0, 0, 5]} />
     </Canvas>
   </Layout>
  )
}
