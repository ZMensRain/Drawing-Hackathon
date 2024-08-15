import { useContext, useState } from "react";
import { settingsContext } from "../context/settingsContext";

const CanvasDrawing = () => {
  const settings = useContext(settingsContext);
  const offset = { x: 0, y: 0 };
  let isRandomizingOffset = false;

  const randomizeOffset = () => {
    isRandomizingOffset = true;
    setTimeout(() => {
      offset.x =
        Math.random() *
          (settings.settings.dysfunctionalModifier -
            -settings.settings.dysfunctionalModifier) +
        -settings.settings.dysfunctionalModifier;
      offset.y =
        Math.random() *
          (settings.settings.dysfunctionalModifier -
            -settings.settings.dysfunctionalModifier) +
        -settings.settings.dysfunctionalModifier;
      isRandomizingOffset = false;
    }, (61 - settings.settings.dysfunctionalModifier) * 1000);
  };

  let canvas: HTMLCanvasElement | undefined;
  const updateBackgroundColor = () => {
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    ctx.fillStyle = settings.settings.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const drawingEntryPoint = (x: number, y: number) => {
    if (!isRandomizingOffset) randomizeOffset();

    if (canvas === undefined) return;
    const ctx = canvas.getContext("2d");

    if (ctx === null) return;

    ctx.beginPath();
    ctx.arc(
      x + offset.x,
      y + offset.y,
      settings?.settings.brushSize,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = settings?.settings.brushColor;
    ctx.fill();
    ctx.stroke();
  };

  window.addEventListener("load", () => {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas === undefined) return;

    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;
    canvas.addEventListener("mousemove", function (e) {
      if (canvas === undefined) return;
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
        backgroundColor: settings.settings.backgroundColor,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CanvasDrawing;
