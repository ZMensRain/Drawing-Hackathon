import { useState } from "react";

type props = { backgroundColor: string };

const CanvasDrawing = (props: props) => {
  const [pixelDimensions] = useState({ width: 100, height: 100 });

  window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas == null) return;
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
  });

  return (
    <canvas
      id="canvas"
      height={pixelDimensions.height}
      width={pixelDimensions.width}
      style={{
        backgroundColor: props.backgroundColor,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CanvasDrawing;
