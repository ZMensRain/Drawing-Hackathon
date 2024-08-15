import { useContext, useEffect } from "react";
import { settingsContext } from "../context/settingsContext";

const ManageDrawing = () => {
  const settings = useContext(settingsContext).settings;
  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    let isRandomizingOffset = false;
    const offset = { x: 0, y: 0 };
    const randomizeOffset = () => {
      isRandomizingOffset = true;

      setTimeout(() => {
        offset.x =
          Math.random() *
            (settings.dysfunctionalModifier - -settings.dysfunctionalModifier) +
          -settings.dysfunctionalModifier;
        offset.y =
          Math.random() *
            (settings.dysfunctionalModifier - -settings.dysfunctionalModifier) +
          -settings.dysfunctionalModifier;
        isRandomizingOffset = false;
      }, (61 - settings.dysfunctionalModifier) * 1000);
    };
    function fn(e: MouseEvent) {
      const cRect = canvas.getBoundingClientRect();
      const canvasX = Math.round(e.clientX - cRect.left);
      const canvasY = Math.round(e.clientY - cRect.top);
      const ctx = canvas.getContext("2d");

      if (!isRandomizingOffset) randomizeOffset();

      if (ctx === null) return;
      if (e.buttons !== 1) return;

      ctx.beginPath();
      ctx.arc(
        canvasX + offset.x,
        canvasY + offset.y,
        settings.brushSize,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = settings.brushColor;
      ctx.fill();
    }
    if (canvas !== null) {
      canvas.addEventListener("mousemove", fn);
    }
    return () => canvas.removeEventListener("mousemove", fn);
  }, [settings]);
  const updateBackgroundColor = (color: string) => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  updateBackgroundColor(settings.backgroundColor);

  return null;
};

export default ManageDrawing;
