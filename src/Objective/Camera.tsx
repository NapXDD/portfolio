import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

import * as THREE from "three";

type ThirdPersonCameraProps = {
  targetRef: React.RefObject<THREE.Object3D | null>;
  cameraDistance?: number;
};

export function ThirdPersonCamera({
  targetRef,
  cameraDistance = 5,
}: ThirdPersonCameraProps) {
  const { camera } = useThree();
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);

  // Mouse movement to rotate camera
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement) {
        setYaw((y) => y - e.movementX * 0.002);
        setPitch((p) =>
          Math.max(
            -Math.PI / 2 + 0.1,
            Math.min(Math.PI / 2 - 0.1, p - e.movementY * 0.002)
          )
        );
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(() => {
    if (targetRef.current) {
      const target = targetRef.current.position;
      // Calculate camera position in spherical coordinates
      const offset = new THREE.Vector3(
        Math.sin(yaw) * Math.cos(pitch) * cameraDistance,
        Math.sin(pitch) * cameraDistance + 1.5,
        Math.cos(yaw) * Math.cos(pitch) * cameraDistance
      );
      camera.position.copy(target.clone().add(offset));
      camera.lookAt(target);
    }
  });

  return null;
}
