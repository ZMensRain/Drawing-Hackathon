import { useEffect, useState } from "react";

const CanvasDrawing = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    if (canvas === undefined) return;
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
  }, []);
  const [pixelDimensions] = useState({ width: 100, height: 100 });

  return (
    <canvas
      id="canvas"
      height={pixelDimensions.height}
      width={pixelDimensions.width}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CanvasDrawing;
