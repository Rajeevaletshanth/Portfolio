import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PresentationControls } from '@react-three/drei';


const Cubes = (props) => {
  const modelRef = useRef();
  const { camera } = useThree();
  const { scene } = useGLTF('/3 cubes.gltf');

  let cubeScale = 0.4;

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 768) {
  //       cubeScale = 0.4;
  //     } else {
  //       cubeScale = 0.4;
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  useFrame(() => {
    const { current } = modelRef;
    if (current) {
      current.rotation.y += 0.005;
    }
  });

  
  return <primitive ref={modelRef}  object={scene} scale={cubeScale} {...props} />;
};

const Model = () => {
  
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute', left: 0,  top:0, opacity:0.2 }}>
      <directionalLight position={[-10, 10, 5]} intensity={40} color={"#0400ff"}/>
      <directionalLight position={[10, 10, 5]} intensity={50} color={"#ff5100"}/>
      <PresentationControls speed={1.5} global zoom={1.2} polar={[-0.1, Math.PI / 4]}>
          <Cubes  />
      </PresentationControls>
    </Canvas>
  );
};

export default Model;
