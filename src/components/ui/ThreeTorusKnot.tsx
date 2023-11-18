"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const torusKnotParams = {
  radius: 1,
  tube: 0.4,
  tubularSegments: 256,
  radialSegments: 8,
  p: 2,
  q: 3,
};

const ThreeTorusKnot = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mousePositionRef = useRef(mousePosition);
  const maxRotationSpeed = 0.03;

  useEffect(() => {
    mousePositionRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const aspectRatio = 600 / 450;

    const resizeCanvas = () => {
      const maxWidth = Math.min(window.innerWidth * 0.45, 600);
      const minWidth = window.innerWidth * 0.9;
      const width = window.innerWidth > 768 ? maxWidth : minWidth;
      const height = width / aspectRatio;
      return { width, height };
    };

    const { width, height } = resizeCanvas();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    light.castShadow = true;
    scene.add(light);

    const geometry = new THREE.TorusKnotGeometry(
      torusKnotParams.radius,
      torusKnotParams.tube,
      torusKnotParams.tubularSegments,
      torusKnotParams.radialSegments,
      torusKnotParams.p,
      torusKnotParams.q
    );
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.castShadow = true;
    torusKnot.receiveShadow = true;
    torusKnot.scale.set(1.5, 1.5, 1.5);
    scene.add(torusKnot);

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      const rotationX = Math.max(
        -maxRotationSpeed,
        Math.min(maxRotationSpeed, mousePositionRef.current.y * 0.1)
      );
      const rotationY = Math.max(
        -maxRotationSpeed,
        Math.min(maxRotationSpeed, mousePositionRef.current.x * 0.1)
      );

      torusKnot.rotation.x += rotationX;
      torusKnot.rotation.y += rotationY;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const { width, height } = resizeCanvas();
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    const currentRef = mountRef.current;

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (currentRef) currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeTorusKnot;
