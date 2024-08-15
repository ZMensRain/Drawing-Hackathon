import { useContext, useState } from "react";
import { settingsContext } from "../context/settingsContext";

const CanvasDrawing = () => {
  const settings = useContext(settingsContext).settings;

  window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas === undefined) return;
    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
  });

  const [pixelDimensions] = useState({ width: 100, height: 100 });

  return (
    <canvas
      id="canvas"
      height={pixelDimensions.height}
      width={pixelDimensions.width}
      style={{
        backgroundColor: settings.backgroundColor,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CanvasDrawing;
