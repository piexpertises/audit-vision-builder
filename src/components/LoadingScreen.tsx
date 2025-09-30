import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center, MeshTransmissionMaterial } from '@react-three/drei';
import { Shield, Lock, Globe, Users, Calendar } from 'lucide-react';
import * as THREE from 'three';
import logoImage from '@/assets/logo-pi-expertises-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

// 3D Rotating Icon Component
const RotatingIcon = ({ 
  position, 
  icon, 
  orbitRadius = 3, 
  orbitSpeed = 1,
  delay = 0 
}: { 
  position: [number, number, number];
  icon: string;
  orbitRadius?: number;
  orbitSpeed?: number;
  delay?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
      meshRef.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={hovered ? "#1d9bf0" : "#D4AF37"}
          emissive="#1d9bf0"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Glow effect */}
      <pointLight
        position={[meshRef.current?.position.x || 0, 0, meshRef.current?.position.z || 0]}
        color="#1d9bf0"
        intensity={0.5}
        distance={2}
      />
    </Float>
  );
};

// Central Logo Component
const CentralLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textureRef = useRef<THREE.Texture>();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(logoImage, (loadedTexture) => {
      setTexture(loadedTexture);
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[2.5, 2.5]} />
        {texture && (
          <meshStandardMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
            emissive="#D4AF37"
            emissiveIntensity={0.2}
            metalness={0.6}
            roughness={0.4}
          />
        )}
      </mesh>
      {/* Glow around logo */}
      <pointLight position={[0, 0, 1]} color="#D4AF37" intensity={1} distance={5} />
      <pointLight position={[0, 0, -1]} color="#1d9bf0" intensity={0.5} distance={5} />
    </Float>
  );
};

// Orbiting Ring
const OrbitRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3.5, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#1d9bf0"
        emissive="#1d9bf0"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

// 3D Scene
const Scene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1d9bf0" />
      
      {/* Central Logo */}
      <CentralLogo />
      
      {/* Orbiting Ring */}
      <OrbitRing />
      
      {/* Rotating Icons */}
      <RotatingIcon position={[3, 0, 0]} icon="shield" orbitSpeed={0.3} delay={0} />
      <RotatingIcon position={[-3, 0, 0]} icon="lock" orbitSpeed={0.3} delay={1.26} />
      <RotatingIcon position={[0, 0, 3]} icon="globe" orbitSpeed={0.3} delay={2.52} />
      <RotatingIcon position={[0, 0, -3]} icon="users" orbitSpeed={0.3} delay={3.78} />
      <RotatingIcon position={[2, 0, 2]} icon="calendar" orbitSpeed={0.3} delay={5.04} />
    </>
  );
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Show 3D scene after initial mount
    const showTimer = setTimeout(() => setShow3D(true), 100);
    
    // Start fade out after 3 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    
    // Complete loading after fade out animation
    const completeTimer = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, #0D1B2A 0%, #1d9bf0 50%, rgba(255,255,255,0.1) 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* 3D Canvas */}
      {show3D && (
        <div className={`w-full h-full transition-all duration-1000 ${
          fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Company Name Overlay */}
      <div 
        className={`absolute bottom-20 left-0 right-0 text-center transition-all duration-1000 ${
          fadeOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Pi Expertises</h1>
        <p className="text-white/90 text-lg font-medium">מומחי הביטחון שלכם</p>
        
        {/* Loading bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full mt-6 mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#1d9bf0] rounded-full transition-all duration-3000 ease-out"
            style={{ width: fadeOut ? '100%' : '0%' }}
          />
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-lg" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-[#1d9bf0]/30 rounded-br-lg" />
    </div>
  );
};

export default LoadingScreen;