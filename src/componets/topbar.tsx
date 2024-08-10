import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  currentColor: string;
  currentPixel: number;
  onSettingsPressed?: () => void;
  onChooseColor?: (color: string) => void;
  onPixelChange?: (pixels: string) => void;
};

const TopBar = (props: props) => {
  console.log(props);

  return (
    <div id="topBar">
      <input
        type="color"
        className="colorPicker"
        value={props.currentColor}
        onChange={(event) => props.onChooseColor?.(event.target.value)}
      />
      <input
        value={props.currentPixel}
        onChange={(event) => props.onPixelChange?.(event.target.value)}
      />
      <div style={{ flex: 1 }} />
      <button style={{ marginRight: 10 }} onClick={props.onSettingsPressed}>
        <FontAwesomeIcon icon="gear" color="black" fontSize={20} />
      </button>
    </div>
  );
};

export default TopBar;
