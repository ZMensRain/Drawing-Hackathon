import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHand,
  faPen,
  faEraser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import TopBar from "./componets/topbar";

library.add(faHand, faPen, faEraser, faGear);

function App() {
  const currentColor = "#ff0000";

  return (
    <>
      <TopBar currentColor={currentColor} />
      <div id="center">
        <div id="sideBar">
          <button onClick={() => console.log("hand")}>
            <FontAwesomeIcon icon="hand" color="black" fontSize={30} />
          </button>
          <button onClick={() => console.log("hand")}>
            <FontAwesomeIcon icon="eraser" color="black" fontSize={30} />
          </button>
          <button onClick={() => console.log("hand")}>
            <FontAwesomeIcon icon="pen" color="black" fontSize={30} />
          </button>
        </div>
        <div id="drawingArea"></div>
      </div>
    </>
  );
}

export default App;
