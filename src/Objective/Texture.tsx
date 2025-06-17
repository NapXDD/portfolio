import { useTexture } from "@react-three/drei";

export function Texture() {
  const textures = useTexture({
    map: "/texture/PavingStones092_1K-JPG_Color.jpg",
    displacementMap: "/texture/PavingStones092_1K-JPG_Displacement.jpg",
    normalMap: "/texture/PavingStones092_1K-JPG_NormalDX.jpg",
    roughnessMap: "/texture/PavingStones092_1K-JPG_Roughness.jpg",
    aoMap: "/texture/PavingStones092_1K-JPG_AmbientOcclusion.jpg",
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial {...textures} />
      </mesh>
    </>
  );
}
