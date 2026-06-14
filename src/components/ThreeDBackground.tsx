import React, { useEffect, useRef } from 'react';

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for parallax interaction
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle object class in 3D space (x, y, z)
    class Particle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      speedZ: number;

      constructor() {
        this.x = Math.random() * width - width / 2;
        this.y = Math.random() * height - height / 2;
        this.z = Math.random() * 1000 + 100; // Depth factor (Z-axis)
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.8;
        this.speedZ = Math.random() * 0.4 + 0.15; // Speed moving forward (creates "starfield" depth flow)
        
        // Randomize shades of theme-conforming colors
        const colors = [
          'rgba(59, 130, 246, 0.25)',  // Blue-500
          'rgba(99, 102, 241, 0.2)',   // Indigo-500
          'rgba(45, 212, 191, 0.15)',  // Teal-400
          'rgba(14, 165, 233, 0.2)'    // Sky-500
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number, mouseY: number) {
        // Slowly advance particles along the z-axis (depth) towards the observer
        this.z -= this.speedZ;

        // Reset particle if it drifts too close to the screen or goes behind
        if (this.z <= 10) {
          this.z = 1000;
          this.x = Math.random() * width - width / 2;
          this.y = Math.random() * height - height / 2;
        }

        // Apply mouse position parallax displacement offsets based on depth (closer items shift more)
        const parallaxFactor = (1000 - this.z) / 1000;
        const targetOffsetX = (mouseX - width / 2) * -0.06 * parallaxFactor;
        const targetOffsetY = (mouseY - height / 2) * -0.06 * parallaxFactor;

        this.baseX += (targetOffsetX - (this.baseX - this.x)) * 0.05;
        this.baseY += (targetOffsetY - (this.baseY - this.y)) * 0.05;
      }

      draw() {
        if (!ctx) return;

        // 3D perspective projection onto 2D screen coordinate geometry
        const fov = 400; // Field of view / focal distance multiplier
        const scale = fov / (fov + this.z);
        const projX = (this.x) * scale + width / 2;
        const projY = (this.y) * scale + height / 2;

        // Fade in when distant, brighter when near
        const alpha = Math.min((1000 - this.z) / 800, 0.75);

        // Ensure we draw only within display boundaries
        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          ctx.beginPath();
          ctx.arc(projX, projY, this.size * scale * 2.5, 0, Math.PI * 2);
          
          // Detect whether class dark is present on HTML
          const isDarkMode = document.documentElement.classList.contains('dark');
          if (isDarkMode) {
            ctx.fillStyle = this.color.replace(/0\.\d+/, alpha.toString());
          } else {
            // Darker colors in light mode for proper contrast
            ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.12})`;
          }
          ctx.fill();
        }
      }
    }

    const particles: Particle[] = [];
    const count = 120; // Number of perspective nodes

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    // Parallax Depth 3D Grid drawing helper
    const drawGrid = (mouseX: number, mouseY: number) => {
      if (!ctx) return;
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      const gridColor = isDarkMode 
        ? 'rgba(59, 130, 246, 0.015)' 
        : 'rgba(59, 130, 246, 0.04)';

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;

      const step = 45;
      const offsetX = (mouseX - width / 2) * -0.02;
      const offsetY = (mouseY - height / 2) * -0.02;

      // Vertical lines
      for (let x = offsetX % step; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetY % step; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    // Animation Loop
    const tick = () => {
      if (!ctx) return;

      // Clear the canvas on each frame update
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation easing coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw subtle responsive grid layer
      drawGrid(mouse.x, mouse.y);

      // Update and draw each floating particle
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse.x, mouse.y);
        particles[i].draw();
      }

      // Inter-connecting interactive lines configuration for proximate nodes
      const isDarkMode = document.documentElement.classList.contains('dark');
      if (isDarkMode) {
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.035)';
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const pi = particles[i];
            const pj = particles[j];

            // 3D projected screen coordinates logic for connecting logic
            const fov = 400;
            const scaleI = fov / (fov + pi.z);
            const scaleJ = fov / (fov + pj.z);
            const x1 = pi.x * scaleI + width / 2;
            const y1 = pi.y * scaleI + height / 2;
            const x2 = pj.x * scaleJ + width / 2;
            const y2 = pj.y * scaleJ + height / 2;

            const dist = Math.hypot(x1 - x2, y1 - y2);
            if (dist < 100) {
              ctx.lineWidth = 0.35 * (1 - dist / 100);
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 block bg-transparent"
      id="three-d-particle-bg"
    />
  );
}
