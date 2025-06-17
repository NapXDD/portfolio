import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function MyAnimatedBox() {
  const myMesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (myMesh.current) {
      myMesh.current.rotation.x = Math.sin(clock.elapsedTime);
      //   myMesh.current.rotation.y = clock.elapsedTime;
    }
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}
