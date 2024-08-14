import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  currentColor: string;
  currentPixel: number;
  onSettingsPressed?: () => void;
  onChooseColor?: (color: string) => void;
  onPixelChange?: (pixels: string) => void;
};

const TopBar = (props: props) => {
  return (
    <div id="topBar">
      <input
        className="colorPicker"
        type="color"
        value={props.currentColor}
        onChange={(event) => props.onChooseColor?.(event.target.value)}
        style={{ marginLeft: 70 }}
      />
      <div id="brushSizeInput" className="unselectable">
        <input
          value={props.currentPixel}
          onChange={(event) => {
            if (isNaN(Number(event.target.value))) return;
            props.onPixelChange?.(event.target.value);
          }}
          size={5}
          maxLength={6}
          minLength={1}
        />
        <div>px</div>
      </div>

      <div style={{ flex: 1 }} />
      <button style={{ marginRight: 10 }} onClick={props.onSettingsPressed}>
        <FontAwesomeIcon icon="gear" fontSize={20} />
      </button>
    </div>
  );
};

export default TopBar;
