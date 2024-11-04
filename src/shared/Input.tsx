import React from "react";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  type?: "text" | "number" | "password";
  classes?: string;
  value?: string;
  onChange?: (value: unknown) => React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

function Input(props: Props): React.ReactElement {
  return (
    <div>
      {props.label ? (
        <div className="mb-1">
          <span className="text-[14px] text-[#475467]">{props.label}</span>
        </div>
      ) : null}
      <div
        className={`bg-[#F9FAFB] py-2 px-4 rounded-[16px] h-[52px] flex items-center font-light text-[#667085] text-[16px] ${props.classes}`}
      >
        <input
          id={props.id}
          className={"bg-transparent w-full outline-none border-none ".concat(
            props.type === "number"
              ? " appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              : ""
          )}
          type={props.type}
          name={props.name}
          defaultValue={props.value}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
