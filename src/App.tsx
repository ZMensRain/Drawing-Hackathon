import "./App.css";

import TopBar from "./componets/topbar";
import { useState, useEffect } from "react";
import SideBar from "./componets/sidebar";

import { useAnimate } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const currentColor = "#ff0000";
  const currentPixelSize = 12;
  const [currentTool, setCurrentTool] = useState(0);

  const [showSettings, setShowSettings] = useState(false);

  const [scope, animate] = useAnimate();

  console.log("aaaaa");
  useEffect(() => {
    const enterAnimation = async () => {
      if (showSettings) {
        animate(scope.current, { width: [0, 300] }, { duration: 0.2 });
      } else {
        animate(
          scope.current,
          { width: [scope.animations[0].state ?? 300, 0] },
          { duration: 0.1 }
        );
      }
    };
    enterAnimation();
  }, [animate, scope, showSettings]);

  return (
    <>
      <TopBar
        currentColor={currentColor}
        currentPixel={currentPixelSize}
        onSettingsPressed={() => {
          setShowSettings(!showSettings);
        }}
      />
      <div id="center">
        <SideBar selectedIndex={currentTool} setSelected={setCurrentTool} />
        <div id="drawingArea"></div>
        <div id="settingsBar" ref={scope}>
          <div style={{ margin: 10 }}>
            <button
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                alignItems: "center",
                gap: 4,
                display: "flex",
              }}
            >
              Theme
              <FontAwesomeIcon icon="sun" />
            </button>
            <label>Dysfunctional Frequency</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
