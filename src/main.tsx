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
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faHand, faPen, faEraser, faGear, faSun, faMoon, faGithub);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
