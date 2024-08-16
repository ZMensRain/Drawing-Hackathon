import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = { selectedIndex: number; setSelected: (index: number) => void };

const SideBar = (props: props) => {
  return (
    <div id="sideBar">
      <button
        onClick={() => props.setSelected(0)}
        style={{
          backgroundColor:
            props.selectedIndex == 0
              ? "rgba(156, 156, 156, 0.123)"
              : "transparent",
        }}
      >
        <FontAwesomeIcon icon="pen" fontSize={30} />
      </button>
      <button
        onClick={() => props.setSelected(1)}
        style={{
          backgroundColor:
            props.selectedIndex == 1
              ? "rgba(156, 156, 156, 0.123)"
              : "transparent",
        }}
      >
        <FontAwesomeIcon icon="eraser" fontSize={30} />
      </button>
    </div>
  );
};

export default SideBar;
