import React, { FC, useEffect, useState } from "react";

export const WaitForIt: FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => (r + 15) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-24 h-24">
      <div
        className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full"
        style={{ transform: `rotate(${rotation}deg)` }}
      />

      {/* V shapes rotating in opposite direction */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex gap-1"
          style={{ transform: `rotate(${-rotation * 2}deg)` }}
        >
          <div className="w-3 h-8 bg-blue-500 rounded-sm origin-bottom -rotate-[30deg]" />
          <div className="w-3 h-8 bg-blue-500 rounded-sm origin-bottom rotate-[30deg]" />
        </div>
      </div>

      {/* Inner pulsing circle */}
      <div className="absolute inset-4">
        <div className="w-full h-full rounded-full bg-blue-500/20 animate-pulse" />
      </div>
    </div>
  );
};
