import { useContext, useEffect, useState } from "react";
import { settingsContext } from "../context/settingsContext";

const ManageDrawing = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const settings = useContext(settingsContext).settings;
  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    let isRandomizingOffset = false;

    const randomizeOffset = () => {
      isRandomizingOffset = true;
      setTimeout(() => {
        setOffset({
          x: Math.random() * (5 - -5) + -5,
          y: Math.random() * (5 - -5) + -5,
        });
        isRandomizingOffset = false;
      }, (101 - settings.dysfunctionalModifier) * 1000);
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
    return () => {
      canvas.removeEventListener("mousemove", fn);
    };
  });

  //Updates background color when it is changed
  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    ctx.fillStyle = settings.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [settings.backgroundColor]);

  return null;
};

export default ManageDrawing;
