import { useEffect, useState } from "react";

type props = { backgroundColor: string };

const CanvasDrawing = (props: props) => {
  const [pixelDimensions] = useState({ width: 100, height: 100 });

  window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas == null) return;
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
  });

  // Feature not bug draws background over drawings when background color changes
  // TODO test that this only gets called when background color changes
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    ctx.fillStyle = props.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [props.backgroundColor]);

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
