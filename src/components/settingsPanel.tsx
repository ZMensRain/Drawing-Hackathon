import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Range } from "react-range";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
  dysfunctionalModifier: number;
  popups: boolean;
  backgroundColor: string;
  theme: "light" | "dark";
  setValues?: (values: number[]) => void;
  onThemeButtonPressed?: () => void;
  onPopupsChange?: (value: boolean) => void;
  onBackgroundColorChange?: (value: string) => void;
};

const SettingsPanel = ({
  dysfunctionalModifier,
  backgroundColor,
  theme,
  setValues,
  onThemeButtonPressed,
  onBackgroundColorChange,
}: Props) => {
  const handleSaveImage = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    try {
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream"); // Replace MIME type

      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = image;
      link.download = "Pain..T.png"; // Set desired file name
      link.click();
    } catch (error) {
      console.error("Failed to save image:", error);
    }
  };

  return (
    <div
      style={{
        margin: 12,
        display: "flex",
        gap: 10,
        flexDirection: "column",
        height: "100%",
      }}
    >
      <button
        onClick={onThemeButtonPressed}
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignItems: "center",
          gap: 4,
          display: "flex",
        }}
      >
        Theme
        <FontAwesomeIcon icon={theme === "light" ? "sun" : "moon"} />
      </button>

      <label className="unselectable">Dysfunctional Frequency</label>
      <Range
        step={1}
        min={1}
        max={60}
        values={[dysfunctionalModifier]}
        onChange={(values) => setValues?.(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: 13,
              width: "100%",
              background: `linear-gradient(to right,#2f27ce ${
                (dysfunctionalModifier / 60) * 100
              }%,#e7e0ec ${(dysfunctionalModifier / 60) * 100}%,#e7e0ec 100% )`,
              borderRadius: 10,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: 20,
              width: 20,
              backgroundColor: "#2f27ce",
              borderRadius: 10,
            }}
          />
        )}
      />
      {/* Didn't have time to implement so removed<div>
        <label className="unselectable">Pop-ups</label>
        <input
          type="checkbox"
          checked={popups}
          onChange={(event) => {
            console.log(event.target.checked);
            onPopupsChange?.(event.target.checked);
          }}
        />
      </div> */}

      <div
        className="secondary-container"
        style={{
          alignItems: "stretch",
          display: "flex",
          gap: 10,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <label className="unselectable">Background Color</label>
        <input
          type="color"
          className="colorPicker"
          value={backgroundColor}
          onChange={(event) => onBackgroundColorChange?.(event.target.value)}
        />
      </div>

      <div style={{ flex: 2 }}></div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <button id="saveImageButton" onClick={handleSaveImage}>
          Save Image
        </button>
      </div>

      <h1>Credits</h1>
      <div style={{ flex: 1 }}>
        <a href="https://github.com/ZMensRain">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ alignSelf: "center" }}
            fontSize={25}
          />
          ZMR
        </a>

        <a href="https://github.com/Enderneale">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ alignSelf: "center" }}
            fontSize={25}
          />
          Enderneale
        </a>
        <a href="https://github.com/Eclypsis5133">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ alignSelf: "center" }}
            fontSize={25}
          />
          Eclypsis
        </a>
      </div>
    </div>
  );
};

export default SettingsPanel;
