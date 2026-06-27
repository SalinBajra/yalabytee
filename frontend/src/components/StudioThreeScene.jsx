import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function StudioThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.5, 8.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.set(-0.22, -0.38, 0.08);
    scene.add(group);

    const keyLight = new THREE.PointLight(0x65edff, 2.2, 13);
    keyLight.position.set(2.8, 2.8, 4.2);
    scene.add(keyLight);

    const violetLight = new THREE.PointLight(0x7457ff, 1.45, 12);
    violetLight.position.set(-3.6, -1.4, 3.8);
    scene.add(violetLight);
    scene.add(new THREE.AmbientLight(0x6f83a8, 0.95));

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0b1526,
      emissive: 0x13396f,
      emissiveIntensity: 0.62,
      metalness: 0.56,
      roughness: 0.2,
      transmission: 0.1,
      clearcoat: 0.85,
      clearcoatRoughness: 0.18
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 3), coreMaterial);
    group.add(core);

    const innerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.78, 48, 24),
      new THREE.MeshBasicMaterial({ color: 0x46def2, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending })
    );
    group.add(innerGlow);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x45d7ef,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    const violetRingMaterial = new THREE.MeshBasicMaterial({
      color: 0x8d65ff,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    const rings = [
      new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.012, 10, 180), ringMaterial),
      new THREE.Mesh(new THREE.TorusGeometry(2.68, 0.009, 10, 180), violetRingMaterial),
      new THREE.Mesh(new THREE.TorusGeometry(3.18, 0.007, 10, 180), ringMaterial)
    ];
    rings[0].rotation.set(1.38, 0.18, -0.2);
    rings[1].rotation.set(1.2, -0.7, 0.68);
    rings[2].rotation.set(1.62, 0.58, -0.88);
    rings.forEach((ring) => group.add(ring));

    const panelMaterial = new THREE.MeshBasicMaterial({
      color: 0xd8fbff,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const panels = [
      { position: [-2.15, 0.82, 0.36], rotation: [0.08, 0.58, -0.1], scale: [1.45, 0.55, 1] },
      { position: [2.22, 0.18, -0.1], rotation: [-0.06, -0.62, 0.08], scale: [1.6, 0.62, 1] },
      { position: [-1.28, -1.28, 0.74], rotation: [-0.28, 0.42, 0.2], scale: [1.24, 0.46, 1] }
    ].map(({ position, rotation, scale }) => {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), panelMaterial.clone());
      panel.position.set(...position);
      panel.rotation.set(...rotation);
      panel.scale.set(...scale);
      group.add(panel);
      return panel;
    });

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x5cecff });
    const nodes = [
      [-2.65, 1.28, 0.28],
      [2.92, -0.48, 0.36],
      [0.74, 2.3, -0.2],
      [-1.05, -2.38, 0.28],
      [2.02, 1.5, -0.5]
    ].map((position) => {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.055, 18, 12), nodeMaterial);
      node.position.set(...position);
      group.add(node);
      return node;
    });

    const particleCount = 190;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.8 + Math.random() * 2.4;
      const angle = Math.random() * Math.PI * 2;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.6;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius * 0.48;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x8ff4ff,
        size: 0.026,
        transparent: true,
        opacity: 0.68,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    group.add(particles);

    const pointer = new THREE.Vector2(0, 0);
    const handlePointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const handlePointerLeave = () => pointer.set(0, 0);
    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerleave', handlePointerLeave);

    let frameId = 0;
    const reducedMotion = prefersReducedMotion();

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();
      const time = reducedMotion ? 1.8 : elapsed;
      group.rotation.y += ((-0.38 + pointer.x * 0.16) - group.rotation.y) * 0.035;
      group.rotation.x += ((-0.22 - pointer.y * 0.12) - group.rotation.x) * 0.035;
      core.rotation.y = time * 0.28;
      core.rotation.x = time * 0.14;
      innerGlow.scale.setScalar(1 + Math.sin(time * 1.6) * 0.055);
      rings[0].rotation.z = time * 0.24;
      rings[1].rotation.z = -time * 0.18;
      rings[2].rotation.z = time * 0.12;
      panels.forEach((panel, index) => {
        panel.material.opacity = 0.13 + Math.sin(time * 1.2 + index) * 0.035;
      });
      nodes.forEach((node, index) => {
        node.scale.setScalar(1 + Math.sin(time * 1.8 + index * 0.7) * 0.28);
      });
      particles.rotation.y = time * 0.045;
      renderer.render(scene, camera);
      if (!reducedMotion) frameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerleave', handlePointerLeave);
      renderer.dispose();
      particleGeometry.dispose();
      core.geometry.dispose();
      innerGlow.geometry.dispose();
      rings.forEach((ring) => ring.geometry.dispose());
      panels.forEach((panel) => panel.geometry.dispose());
      nodes.forEach((node) => node.geometry.dispose());
      coreMaterial.dispose();
      ringMaterial.dispose();
      violetRingMaterial.dispose();
      panelMaterial.dispose();
      nodeMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="studio-three-scene" aria-hidden="true" />;
}
