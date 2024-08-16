import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Range } from "react-range";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type props = {
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
  popups,
  backgroundColor,
  theme,
  setValues,
  onThemeButtonPressed,
  onPopupsChange,
  onBackgroundColorChange,
}: props) => {
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
        <FontAwesomeIcon icon={theme == "light" ? "sun" : "moon"} />
      </button>

      <label className="unselectable">Dysfunctional Frequency</label>
      <Range
        step={1}
        min={1}
        max={100}
        values={[dysfunctionalModifier]}
        onChange={(values) => setValues?.(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: 13,
              width: "100%",

              background: `linear-gradient(to right,#2f27ce ${dysfunctionalModifier}%,#e7e0ec ${dysfunctionalModifier}%,#e7e0ec 100% )`,
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
      <div>
        <label className="unselectable">Pop-ups</label>
        <input
          type="checkbox"
          checked={popups}
          onChange={(event) => {
            console.log(event.target.checked);
            onPopupsChange?.(event.target.checked);
          }}
        ></input>
      </div>

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
        <label className="unselectable" style={{}}>
          Background Color
        </label>
        <input
          type="color"
          className="colorPicker"
          value={backgroundColor}
          onChange={(event) => onBackgroundColorChange?.(event.target.value)}
        />
      </div>

      <div style={{ flex: 2 }}></div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <button
          id="saveImageButton"
          onClick={() => {
            const canvas = document.getElementById(
              "canvas"
            ) as HTMLCanvasElement;
            const image = canvas
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

            window.location.href = image;
          }}
        >
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
