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
      <input
        value={props.currentPixel}
        onChange={(event) => props.onPixelChange?.(event.target.value)}
      />
      <div style={{ flex: 1 }} />
      <button style={{ marginRight: 10 }} onClick={props.onSettingsPressed}>
        <FontAwesomeIcon icon="gear" fontSize={20} />
      </button>
    </div>
  );
};

export default TopBar;
