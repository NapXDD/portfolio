import { useEffect } from "react";

export function usePointerLock() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const handleClick = () => {
      canvas.requestPointerLock();
    };
    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, []);
}
