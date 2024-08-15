import { useState } from "react";

type props = { backgroundColor: string };

const CanvasDrawing = (props: props) => {
  const updateBackgroundColor = () => {
    console.log("called");
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    ctx.fillStyle = props.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const drawingEntryPoint = (x: number, y: number) => {
    console.log(x, y);
  };

  window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas == null) return;
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;

    canvas.addEventListener("mousemove", function (e) {
      const cRect = canvas.getBoundingClientRect();
      const canvasX = Math.round(e.clientX - cRect.left);
      const canvasY = Math.round(e.clientY - cRect.top);

      if (e.buttons == 1) {
        drawingEntryPoint(canvasX, canvasY);
      }
    });
  });

  const [pixelDimensions] = useState({ width: 100, height: 100 });
  // Feature not bug draws background over drawings when background color changes
  updateBackgroundColor();

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
