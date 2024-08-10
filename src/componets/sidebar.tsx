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
        <FontAwesomeIcon icon="hand" color="black" fontSize={30} />
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
        <FontAwesomeIcon icon="eraser" color="black" fontSize={30} />
      </button>
      <button
        onClick={() => props.setSelected(2)}
        style={{
          backgroundColor:
            props.selectedIndex == 2
              ? "rgba(156, 156, 156, 0.123)"
              : "transparent",
        }}
      >
        <FontAwesomeIcon icon="pen" color="black" fontSize={30} />
      </button>
    </div>
  );
};

export default SideBar;
