import "./App.css";

import TopBar from "./componets/topbar";
import { useState } from "react";
import SideBar from "./componets/sidebar";

function App() {
  const currentColor = "#ff0000";
  const [currentTool, setCurrentTool] = useState(0);
  return (
    <>
      <TopBar currentColor={currentColor} />
      <div id="center">
        <SideBar selectedIndex={currentTool} setSelected={setCurrentTool} />
        <div id="drawingArea"></div>
      </div>
    </>
  );
}

export default App;
