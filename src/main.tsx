import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHand,
  faPen,
  faEraser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHand, faPen, faEraser, faGear);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
