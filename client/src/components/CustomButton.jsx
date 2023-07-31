import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) => {
    if (type === "filled")
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    else if (type === "outlined")
      return {
        backgroundColor: "transparent",
        borderColor: snap.color,
        color: snap.color,
        border: "1px solid #000",
      };
  };
  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default CustomButton;
