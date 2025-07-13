'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FluidText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/fluid-text.js'; // You must place this file in public/scripts/
    script.async = true;
    script.onload = () => {
      // After the script loads, it will auto-initialize on the canvas
      console.log('Fluid text effect loaded');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Canvas for fluid animation */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none" />

      {/* SVG mask to blend fluid effect with text */}
      <div className="mask pointer-events-none fixed inset-0 z-20">
        <svg
          viewBox="0 0 1040 205.1"
          className="absolute w-[90%] max-w-[1200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="60"
              fill="white"
              fontWeight="bold"
              fontFamily="Inter, sans-serif"
            >
              Claims Simplified.
            </text>
            <text
              x="50%"
              y="120%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="60"
              fill="white"
              fontWeight="bold"
              fontFamily="Inter, sans-serif"
            >
              Revenue Accelerated.
            </text>
          </g>
        </svg>
      </div>
    </>
  );
}
