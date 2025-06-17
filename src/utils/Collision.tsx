import { useRef, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

type CollisionCheckerProps = {
  children: ReactNode;
  targetPosition: [number, number, number]; // position of the sphere
  targetRadius: number;
  onCollide?: () => void;
};

export function CollisionChecker({
  children,
  targetPosition,
  targetRadius,
  onCollide,
}: CollisionCheckerProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    const pos = meshRef.current.position;
    const [tx, ty, tz] = targetPosition;
    const dx = pos.x - tx;
    const dy = pos.y - ty;
    const dz = pos.z - tz;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const boxHalfSize = 0.5; // assuming box is 1x1x1

    if (distance < targetRadius + boxHalfSize) {
      onCollide && onCollide();
    }
  });

  // Clone the child and attach the ref
  return (
    <>
      {children &&
        // Only works if children is a single mesh
        // For multiple children, you can use React.Children.map
        // and attach ref to the first mesh you want to check
        // or use a group ref
        // Here is for a single mesh:
        // @ts-ignore
        React.cloneElement(children, { ref: meshRef })}
    </>
  );
}
