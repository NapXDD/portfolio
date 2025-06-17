import {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
} from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

type ControllableBoxProps = {
  children?: ReactNode;
  speed?: number;
  getDirection: () => number;
};

interface PressedKeys {
  [key: string]: boolean;
}

interface ControllableBoxHandle extends Group {}

export const ControllableBox = forwardRef<ControllableBoxHandle, ControllableBoxProps>(
  (
    { children, speed = 0.05, getDirection }: ControllableBoxProps,
    ref
  ) => {
    const groupRef = useRef<Group>(null);
    const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
    const pressed = useRef<PressedKeys>({});

    useImperativeHandle(ref, () => groupRef.current as Group, []);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        pressed.current[e.key] = true;
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        pressed.current[e.key] = false;
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, []);

    useFrame(() => {
      let [x, y, z] = position;
      let moved = false;
      const dir = getDirection();
      if (pressed.current["w"] || pressed.current["ArrowUp"]) {
        x -= Math.sin(dir) * speed;
        z -= Math.cos(dir) * speed;
        moved = true;
      }
      if (pressed.current["s"] || pressed.current["ArrowDown"]) {
        x += Math.sin(dir) * speed;
        z += Math.cos(dir) * speed;
        moved = true;
      }
      if (pressed.current["a"] || pressed.current["ArrowLeft"]) {
        x -= Math.cos(dir) * speed;
        z += Math.sin(dir) * speed;
        moved = true;
      }
      if (pressed.current["d"] || pressed.current["ArrowRight"]) {
        x += Math.cos(dir) * speed;
        z -= Math.sin(dir) * speed;
        moved = true;
      }
      if (moved) setPosition([x, y, z]);
      if (groupRef.current) groupRef.current.position.set(x, y, z);
    });

    return <group ref={groupRef}>{children}</group>;
  }
);
