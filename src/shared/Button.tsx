import React from "react";

interface Props {
  name: string;
  img?: string;
  classes?: string;
  variant:
    | "transparent"
    | "bg-[#9FF443]"
    | "bg-[#1D2939]"
    | "border-[1px] border-[#D0D5DD]"
    | "bg-[#253BFF]";
  onClick?: () => void;
}

function Button(props: Props): React.ReactElement {
  console.log();
  return (
    <button
      className={`h-[48px] flex items-center px-3 ${props.classes} ${props.variant}`}
      onClick={props.onClick}
    >
      {props.img ? <img src={props.img} alt="" /> : null}
      <span className={`text-[14px] font-medium ${props.img ? "ml-4" : ""}`}>
        {props.name}
      </span>
    </button>
  );
}

export default Button;
