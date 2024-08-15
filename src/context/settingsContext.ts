import { createContext } from "react";
import { settings } from "../models/settings";

type settingsContextType = {
  settings: settings;
  setSettings: (settings: settings) => void;
};

export const settingsContext = createContext<settingsContextType>({
  settings: {
    backgroundColor: "#ffffff",
    brushColor: "#000000",
    brushSize: 12,
    dysfunctionalModifier: 60,
    theme: "light",
    tool: 0,
    popups: true,
  },
  setSettings: () => {},
});
