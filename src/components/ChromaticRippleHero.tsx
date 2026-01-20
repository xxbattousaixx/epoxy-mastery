import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface ChromaticRippleHeroProps {
  className?: string;
}

const ChromaticRippleHero: React.FC<ChromaticRippleHeroProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create ripple geometry
    const geometry = new THREE.PlaneGeometry(6, 4, 128, 128);
    
    // Custom shader material for chromatic epoxy effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uResolution: { value: new THREE.Vector2(width, height) },
        uColorA: { value: new THREE.Color('#D4AF37') }, // Gold
        uColorB: { value: new THREE.Color('#8B4513') }, // Saddle brown
        uColorC: { value: new THREE.Color('#C0C0C0') }, // Silver
        uColorD: { value: new THREE.Color('#1a1a1a') }, // Dark charcoal
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          
          vec3 pos = position;
          
          // Multiple wave layers for organic epoxy flow
          float wave1 = sin(pos.x * 2.0 + uTime * 0.5) * 0.15;
          float wave2 = sin(pos.y * 3.0 + uTime * 0.7) * 0.1;
          float wave3 = sin((pos.x + pos.y) * 1.5 + uTime * 0.3) * 0.12;
          float wave4 = sin(length(pos.xy) * 4.0 - uTime * 0.4) * 0.08;
          
          // Ripple effect
          float ripple = sin(length(pos.xy - vec2(0.0)) * 6.0 - uTime * 0.8) * 0.05;
          
          pos.z = wave1 + wave2 + wave3 + wave4 + ripple;
          vElevation = pos.z;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        uniform vec3 uColorD;
        varying vec2 vUv;
        varying float vElevation;
        
        // Simplex noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          
          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        void main() {
          // Create flowing noise patterns
          float noise1 = snoise(vec3(vUv * 3.0, uTime * 0.15));
          float noise2 = snoise(vec3(vUv * 5.0 + 100.0, uTime * 0.1));
          float noise3 = snoise(vec3(vUv * 2.0 - 50.0, uTime * 0.2));
          
          // Combine noises for organic flow
          float combinedNoise = (noise1 + noise2 * 0.5 + noise3 * 0.3) / 1.8;
          
          // Create chromatic color mixing
          vec3 color1 = mix(uColorA, uColorB, smoothstep(-0.5, 0.5, noise1));
          vec3 color2 = mix(uColorC, uColorD, smoothstep(-0.3, 0.7, noise2));
          vec3 finalColor = mix(color1, color2, smoothstep(-0.2, 0.6, combinedNoise));
          
          // Add iridescent highlights based on elevation
          float highlight = smoothstep(0.1, 0.4, vElevation);
          finalColor = mix(finalColor, uColorC, highlight * 0.4);
          
          // Add chromatic aberration effect
          float chromatic = sin(vUv.x * 20.0 + uTime) * 0.05;
          finalColor.r += chromatic;
          finalColor.b -= chromatic;
          
          // Add metallic sheen
          float fresnel = pow(1.0 - abs(dot(vec3(0.0, 0.0, 1.0), normalize(vec3(vUv - 0.5, 1.0)))), 2.0);
          finalColor += fresnel * 0.15;
          
          // Subtle vignette
          float vignette = 1.0 - length(vUv - 0.5) * 0.5;
          finalColor *= vignette;
          
          gl_FragColor = vec4(finalColor, 0.9);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.3;
    scene.add(mesh);

    // Mouse interaction
    let mouseX = 0.5;
    let mouseY = 0.5;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth;
      mouseY = event.clientY / window.innerHeight;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uMouse.value.set(mouseX, mouseY);
      
      // Subtle camera movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 0.1;
      camera.position.y = Math.cos(elapsedTime * 0.1) * 0.05;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
      material.uniforms.uResolution.value.set(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 ${className}`}
      style={{ 
        background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)'
      }}
    />
  );
};

export default ChromaticRippleHero;
