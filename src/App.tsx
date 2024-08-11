import "./App.css";

import TopBar from "./componets/topbar";
import { useState, useEffect } from "react";
import SideBar from "./componets/sidebar";
import SettingsPanel from "./componets/settingsPanel";

import { useAnimate } from "framer-motion";
import { settings } from "./models/settings";

function App() {
  const [settings, setSettings] = useState<settings>({
    backgroundColor: "#ffffff",
    brushColor: "#000000",
    brushSize: 12,
    dysfunctionalRange: [1, 60],
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

  return (
    <>
      <TopBar
        currentColor={settings.brushColor}
        currentPixel={settings.brushSize}
        onSettingsPressed={() => setShowSettings(!showSettings)}
        onChooseColor={(color) =>
          setSettings({ ...settings, brushColor: color })
        }
        onPixelChange={(brushSize) =>
          setSettings({
            ...settings,
            brushSize: Number(brushSize.replace("px", "")),
          })
        }
      />
      <div id="center">
        <SideBar
          selectedIndex={settings.tool}
          setSelected={(toolIndex) =>
            setSettings({ ...settings, tool: toolIndex })
          }
        />
        <div id="drawingArea"></div>
        <div ref={scope} id="settingsBar">
          <SettingsPanel
            values={settings.dysfunctionalRange}
            backgroundColor={settings.backgroundColor}
            popups={settings.popups}
            theme={settings.theme}
            setValues={(range) =>
              setSettings({ ...settings, dysfunctionalRange: range })
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
    </>
  );
}

export default App;
