import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Range } from "react-range";

type props = {
  values: number[];
  popups: boolean;
  backgroundColor: string;
  theme: "light" | "dark";
  setValues?: (values: number[]) => void;
  onThemeButtonPressed?: () => void;
  onPopupsChange?: (value: boolean) => void;
  onBackgroundColorChange?: (value: string) => void;
};

const SettingsPanel = ({
  values,
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
          color: "black",
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
        max={60}
        values={values}
        onChange={(values) => setValues?.(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: 13,
              width: "100%",

              background: `linear-gradient(to right,#e7e0ec 0%, #e7e0ec ${
                (values[0] / 60) * 100
              }%,#2f27ce ${(values[0] / 60) * 100}%,#2f27ce ${
                (values[1] / 60) * 100
              }%,#e7e0ec ${(values[1] / 60) * 100}%,#e7e0ec 100% )`,
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
      <div>
        <label className="unselectable">Background Color</label>
        <input
          type="color"
          className="colorPicker"
          value={backgroundColor}
          onChange={(event) => onBackgroundColorChange?.(event.target.value)}
        />
      </div>
      <div style={{ flex: 2 }}></div>
      <h1 className="unselectable">Credits</h1>
      <div style={{ flex: 1 }}>TODO</div>
    </div>
  );
};

export default SettingsPanel;
