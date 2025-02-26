import { FC, useEffect, useState } from "react";

type WaitForItSize = "small" | "medium" | "large";

type WaitForItProps = {
  size?: WaitForItSize;
};

const sizeClasses: Record<
  WaitForItSize,
  {
    container: string;
    border: string;
    vShape: string;
    vShapeWidth: string;
  }
> = {
  small: {
    container: "w-6 h-6",
    border: "border",
    vShape: "h-3",
    vShapeWidth: "w-1.5",
  },
  medium: {
    container: "w-24 h-24",
    border: "border-4",
    vShape: "h-8",
    vShapeWidth: "w-3",
  },
  large: {
    container: "w-32 h-32",
    border: "border-6",
    vShape: "h-10",
    vShapeWidth: "w-4",
  },
};

export const WaitForIt: FC<WaitForItProps> = ({ size = "medium" }) => {
  const [rotation, setRotation] = useState(0);
  const { container, border, vShape, vShapeWidth } = sizeClasses[size];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => (r + 15) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${container}`}>
      <div
        className={`absolute inset-0 ${border} border-transparent border-t-blue-500 rounded-full`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />

      {/* V shapes rotating in opposite direction */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex gap-0.5"
          style={{ transform: `rotate(${-rotation * 2}deg)` }}
        >
          <div
            className={`${vShapeWidth} ${vShape} bg-blue-500 rounded-sm origin-bottom -rotate-[30deg]`}
          />
          <div
            className={`${vShapeWidth} ${vShape} bg-blue-500 rounded-sm origin-bottom rotate-[30deg]`}
          />
        </div>
      </div>

      {/* Inner pulsing circle */}
      <div className="absolute inset-2">
        <div className="w-full h-full rounded-full bg-blue-500/20 animate-pulse" />
      </div>
    </div>
  );
};
