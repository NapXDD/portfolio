import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { ControllableBox } from "./Objective/ControllableBox";
import type { Group } from "three";
import { ThirdPersonCamera } from "./Objective/Camera";
import { usePointerLock } from "./utils/usePointerLock";

function App() {
  const boxRef = useRef<Group>(null);
  const yawRef = useRef(0);

  // Share yaw between camera and box movement
  usePointerLock();

  return (
    <div id="canvas-container" className="App">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Environment preset="sunset" background />
          <ThirdPersonCamera targetRef={boxRef} />
          <ControllableBox ref={boxRef} getDirection={() => yawRef.current}>
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="orange" />
            </mesh>
          </ControllableBox>
          <mesh position={[2, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
