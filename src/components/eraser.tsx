import { useContext, useEffect } from "react";
import { settingsContext } from "../context/settingsContext";

const Eraser = () => {
  const { settings, setSettings } = useContext(settingsContext);

  useEffect(() => {
    if (settings.tool === 1) {
      const canvas: HTMLCanvasElement = document.getElementById(
        "canvas"
      ) as HTMLCanvasElement;
      if (canvas == null) return;
      const ctx = canvas.getContext("2d");
      if (ctx == null) return;
      ctx.fillStyle = settings.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setSettings({ ...settings, tool: 0 });
    }
  }, [setSettings, settings, settings.backgroundColor, settings.tool]);

  return null;
};

export default Eraser;
