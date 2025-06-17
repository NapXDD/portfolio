import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function Model() {
  const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
  return <primitive object={gltf.scene} />;
}
