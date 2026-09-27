'use client';
import { useEffect, useRef } from 'react';

export default function CyberTerrainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Terrain Configuration
    const cols = 35;
    const rows = 40;
    const spacing = 90;
    const speed = 0.03;
    const amplitude = 120;
    const fov = 400; // Field of view for 3D projection

    const animate = () => {
      time -= speed; // Move the terrain forward

      // Create a gradient fade out towards the top/back
      const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height * 0.3);
      gradient.addColorStop(0, '#22de8c'); // Neon green at bottom
      gradient.addColorStop(1, 'rgba(34, 222, 140, 0)'); // Fade to transparent

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.5; // Horizon line slightly above center

      // 2D Array to store projected points for this frame
      const projected = Array(rows).fill(0).map(() => Array(cols).fill(null));

      // Calculate 3D points and project them to 2D
      for (let z = 0; z < rows; z++) {
        for (let x = 0; x < cols; x++) {
          // World coordinates
          const worldX = (x - cols / 2) * spacing;
          const worldZ = z * spacing;
          
          // Generate wave (y) using sine/cosine based on x, z, and time
          const distance = Math.sqrt(worldX * worldX + worldZ * worldZ);
          const worldY = 
            Math.sin(worldX * 0.01 + time) * amplitude * 0.5 + 
            Math.cos(worldZ * 0.01 + time) * amplitude * 0.5 +
            Math.sin(distance * 0.005 - time * 2) * amplitude * 0.3;

          // 3D Projection
          // To make it look like we are moving forward, we don't move the Z coordinate of the array,
          // instead we shift the phase of the wave (time).
          // We apply a tilt/perspective transformation
          
          // Move the grid lower so it sits at the bottom of the screen
          const adjustedY = worldY + 200; 
          
          // Depth scaling factor
          const scale = fov / (fov + worldZ);
          
          // Final 2D Screen coordinates
          const screenX = centerX + worldX * scale;
          const screenY = centerY + adjustedY * scale;

          projected[z][x] = { x: screenX, y: screenY, z: worldZ };
        }
      }

      // Draw the grid lines
      ctx.beginPath();
      
      // Draw horizontal lines (rows)
      for (let z = 0; z < rows - 1; z++) {
        for (let x = 0; x < cols - 1; x++) {
          const p = projected[z][x];
          const right = projected[z][x + 1];
          const bottom = projected[z + 1][x];
          
          // Only draw if point is somewhat visible
          if (p.y > 0) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(right.x, right.y);
            
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(bottom.x, bottom.y);
          }
        }
      }
      
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.25 // Subtle opacity so it doesn't distract from content
      }} 
    />
  );
}
