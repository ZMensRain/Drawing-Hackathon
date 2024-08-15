import "./App.css";

import TopBar from "./components/topbar";
import { useState, useEffect } from "react";
import SideBar from "./components/sidebar";
import SettingsPanel from "./components/settingsPanel";

import { useAnimate } from "framer-motion";
import { settings } from "./models/settings";
import CanvasDrawing from "./components/drawingArea";
import { settingsContext } from "./context/settingsContext";
import ManageDrawing from "./components/manageDrawing";

function App() {
  const [settings, setSettings] = useState<settings>({
    backgroundColor: "#ffffff",
    brushColor: "#000000",
    brushSize: 12,
    dysfunctionalModifier: 60,
    theme: "light",
    tool: 0,
    popups: true,
  });

  const [showSettings, setShowSettings] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const enterAnimation = async () => {
      if (showSettings) {
        animate(scope.current, { x: 300 }, { duration: 0.2 });
      } else {
        animate(scope.current, { x: 0 }, { duration: 0.1 });
      }
    };
    enterAnimation();
  }, [animate, scope, showSettings]);

  useEffect(() => {
    const changeBrushSize = () => {
      const rangeFactor = settings.dysfunctionalModifier;
      const randomBrushSize = Math.floor(
        Math.random() * rangeFactor + 5 // Random brush size between 5 and the rangeFactor
      );

      setSettings((prevSettings) => ({
        ...prevSettings,
        brushSize: randomBrushSize,
      }));

      const randomInterval = Math.floor(
        Math.random() * (1000 - 100 / rangeFactor) + 100
      );

      setTimeout(changeBrushSize, randomInterval); // Call recursively with a varying interval
    };

    changeBrushSize(); // Initial call

    return () => clearTimeout(); // Cleanup on unmount
  }, [settings.dysfunctionalModifier]);

  return (
    <settingsContext.Provider
      value={{ settings: settings, setSettings: setSettings }}
    >
      <div className={settings.theme} style={{ height: "100%", width: "100%" }}>
        <TopBar
          currentColor={settings.brushColor}
          currentPixel={settings.brushSize}
          onSettingsPressed={() => setShowSettings(!showSettings)}
          onChooseColor={(color) =>
            setSettings({ ...settings, brushColor: color })
          }
          onPixelChange={(brushSize) => {
            setSettings({
              ...settings,
              brushSize: Number(brushSize),
            });
          }}
        />
        <div id="center">
          <SideBar
            selectedIndex={settings.tool}
            setSelected={(toolIndex) =>
              setSettings({ ...settings, tool: toolIndex })
            }
          />
          <div id="drawingArea">
            <CanvasDrawing />
            <div
              style={{
                position: "absolute",
                top: 45,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              }}
            >
              <div ref={scope} id="settingsBar" style={{ height: "100%" }}>
                <SettingsPanel
                  dysfunctionalModifier={settings.dysfunctionalModifier}
                  backgroundColor={settings.backgroundColor}
                  popups={settings.popups}
                  theme={settings.theme}
                  setValues={(range) =>
                    setSettings({
                      ...settings,
                      dysfunctionalModifier: range[0],
                    })
                  }
                  onBackgroundColorChange={(color) =>
                    setSettings({ ...settings, backgroundColor: color })
                  }
                  onPopupsChange={(value) =>
                    setSettings({ ...settings, popups: value })
                  }
                  onThemeButtonPressed={() =>
                    setSettings({
                      ...settings,
                      theme: settings.theme == "light" ? "dark" : "light",
                    })
                  }
                />
              </div>
            </div>
            <ManageDrawing />
          </div>
        </div>
      </div>
    </settingsContext.Provider>
  );
}

export default App;
