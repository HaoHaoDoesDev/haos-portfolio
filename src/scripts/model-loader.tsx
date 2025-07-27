"use client";

import { useGLTF } from "@react-three/drei";

export default function My3DModel(props: any) {
  const gltf = useGLTF("/models/cats_space_suit_free_model.glb");
  return <primitive object={gltf.scene} {...props} />;
}
