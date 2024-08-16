import { useContext, useEffect } from "react";
import { settingsContext } from "../context/settingsContext";

const RandomizeColor = () => {
  const { setSettings } = useContext(settingsContext);

  useEffect(() => {
    let id = 0;

    const changeBrushColor = () => {
      function componentToHex(c: number) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }

      function rgbToHex(r: number, g: number, b: number) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      setSettings((prevSettings) => {
        return {
          ...prevSettings,
          brushColor: rgbToHex(r, g, b),
        };
      });

      id = setTimeout(changeBrushColor, 10000);
    };

    changeBrushColor(); // Initial call

    return () => clearTimeout(id); // Cleanup on unmount
  }, [setSettings]);

  return null;
};

export default RandomizeColor;
