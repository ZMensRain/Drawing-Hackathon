import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  currentColor: string;
};

const TopBar = (props: props) => {
  console.log(props);

  return (
    <div id="topBar">
      <input type="color" className="colorPicker" />
      <input></input>
      <div style={{ flex: 1 }}></div>
      <button style={{ marginRight: 10 }}>
        <FontAwesomeIcon icon="gear" color="black" fontSize={20} />
      </button>
    </div>
  );
};

export default TopBar;
