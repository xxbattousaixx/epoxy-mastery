import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';

interface Section {
  title: string;
  subtitle: string;
  color: number;
  particles: number;
  depth: number;
}

const ScrollThreeD: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const layersRef = useRef<Array<{
    particles: THREE.Points[];
    meshes: THREE.Mesh[];
    position: number;
  }>>([]);
  const [currentSection, setCurrentSection] = useState(-1); // Start hidden until scrolled into view
  const { t } = useTranslation();

  // Epoxy flooring process sections - no CTA buttons
  const displaySections: Section[] = [
    {
      title: t('process.steps.prep.title'),
      subtitle: t('process.steps.prep.description'),
      color: 0xd4a574,
      particles: 120,
      depth: 0
    },
    {
      title: t('process.steps.primer.title'),
      subtitle: t('process.steps.primer.description'),
      color: 0xb8956e,
      particles: 180,
      depth: -60
    },
    {
      title: t('process.steps.base.title'),
      subtitle: t('process.steps.base.description'),
      color: 0x2d3748,
      particles: 200,
      depth: -120
    },
    {
      title: t('process.steps.decorative.title'),
      subtitle: t('process.steps.decorative.description'),
      color: 0x4a5568,
      particles: 180,
      depth: -180
    },
    {
      title: t('process.steps.topcoat.title'),
      subtitle: t('process.steps.topcoat.description'),
      color: 0x718096,
      particles: 150,
      depth: -240
    },
    {
      title: t('process.steps.cure.title'),
      subtitle: t('process.steps.cure.description'),
      color: 0xecc94b,
      particles: 120,
      depth: -300
    }
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.0015);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Create layers for each section
    displaySections.forEach((section, index) => {
      const layer = {
        particles: [] as THREE.Points[],
        meshes: [] as THREE.Mesh[],
        position: section.depth
      };

      // Create particle system for this layer
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = section.particles || 100;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color = new THREE.Color(section.color);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = section.depth + (Math.random() - 0.5) * 20;

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
      layer.particles.push(particles);

      // Create geometric shapes for visual interest
      const geometries = [
        new THREE.TorusGeometry(5, 0.5, 16, 100),
        new THREE.OctahedronGeometry(4),
        new THREE.IcosahedronGeometry(4)
      ];

      const geometry = geometries[index % geometries.length];
      const material = new THREE.MeshPhongMaterial({
        color: section.color,
        transparent: true,
        opacity: 0.4,
        wireframe: true,
        emissive: section.color,
        emissiveIntensity: 0.2,
        shininess: 100
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = section.depth;
      mesh.position.x = (index % 2 === 0 ? 15 : -15);
      scene.add(mesh);
      layer.meshes.push(mesh);

      layersRef.current.push(layer);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd4a574, 0.8);
    pointLight2.position.set(-20, -20, -50);
    scene.add(pointLight2);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 10, 5);
    scene.add(directionalLight);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate meshes
      layersRef.current.forEach((layer) => {
        layer.meshes.forEach(mesh => {
          mesh.rotation.x += 0.001;
          mesh.rotation.y += 0.002;
        });

        // Animate particles
        layer.particles.forEach(particleSystem => {
          const positions = particleSystem.geometry.attributes.position.array as Float32Array;
          for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
          }
          particleSystem.geometry.attributes.position.needsUpdate = true;
          particleSystem.rotation.y += 0.0005;
        });
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      
      layersRef.current.forEach(layer => {
        layer.particles.forEach(p => {
          p.geometry.dispose();
          (p.material as THREE.PointsMaterial).dispose();
          scene.remove(p);
        });
        layer.meshes.forEach(m => {
          m.geometry.dispose();
          (m.material as THREE.MeshPhongMaterial).dispose();
          scene.remove(m);
        });
      });
      
      layersRef.current = [];
      renderer.dispose();
    };
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !cameraRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Only start showing content when user has scrolled the section into view
      if (containerTop > windowHeight * 0.3) {
        setCurrentSection(-1); // Hide all sections when not yet scrolled to this area
        return;
      }
      
      // Calculate progress based on how far we've scrolled through this section
      const scrolledIntoContainer = -containerTop;
      const scrollableDistance = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolledIntoContainer / scrollableDistance));

      // Move camera through layers based on scroll
      const totalDepth = Math.abs(displaySections[displaySections.length - 1].depth);
      cameraRef.current.position.z = 30 - (progress * (totalDepth + 30));

      // Determine current section with clear boundaries
      const sectionIndex = Math.min(
        Math.floor(progress * displaySections.length),
        displaySections.length - 1
      );
      setCurrentSection(Math.max(0, sectionIndex));

      // Add slight camera rotation based on scroll
      cameraRef.current.rotation.y = progress * 0.2;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [displaySections]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${displaySections.length * 100}vh` }}>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Fixed content overlay - only show one section at a time */}
      <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
        <div className="text-center px-6">
          {displaySections.map((section, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                currentSection === index ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <h2 
                className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 transition-all duration-500 ${
                  currentSection === index ? 'translate-y-0 scale-100' : 'translate-y-8 scale-90'
                }`}
                style={{
                  color: `#${section.color.toString(16).padStart(6, '0')}`,
                  textShadow: '0 0 40px rgba(0,0,0,0.5)'
                }}
              >
                {section.title}
              </h2>
              <p 
                className={`text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4 transition-all duration-500 leading-relaxed ${
                  currentSection === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
              >
                {section.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="flex flex-col items-center gap-2">
          {displaySections.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSection === index ? 'bg-primary scale-150' : 'bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator (only on first section) */}
      {currentSection === 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white/60 animate-pulse">
          <p className="text-sm mb-2 font-display">{t('hero.scrollExplore')}</p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollThreeD;
