import React from "react";
import chevronDown from "../../assets/chevron-down.svg";

interface Props {
  id?: string;
  name?: string;
  classes?: string;
  placeholder?: string;
  data?: string[];
  value?: string;
  onChange?: (value: string) => void;
}

function Select(props: Props): React.ReactElement {
  const [open, setOpen] = React.useState(0);
  const [data, setData] = React.useState([]);

  const onMouseOut = () => {
    setOpen(() => 2);
  };

  const onMouseEnter = () => {
    setOpen(() => 1);
  };

  const handleClick = (value: string) => {
    setOpen(() => 2);
    props.onChange(value);
  };

  React.useEffect(() => {
    setData(() => props.data);
  }, [props.data]);

  return (
    <div
      className="relative"
      onMouseLeave={onMouseOut}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={"h-[52px] px-4 flex items-center bg-[#F9FAFB] w-[327px] rounded-[16px] ".concat(
          props.classes
        )}
      >
        <input
          id={props.id}
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(val) => {
            setData(() =>
              props.data.filter(
                (item) =>
                  item.toLowerCase().indexOf(val.target.value.toLowerCase()) >
                  -1
              )
            );
            props.onChange(val.target.value);
          }}
          className="outline-none bg-transparent border-none w-full text-[#101828] text-[16px]"
        />
        <img src={chevronDown} alt="" className="w-3 h-3" />
      </div>
      <div
        className={`${
          open === 1
            ? "dropdown-open"
            : open === 0
            ? "hidden"
            : "dropdown-close"
        } shadow bg-white w-full absolute top-0 left-0 rounded-md p-2 z-10`}
      >
        {(data.length ? data : props.data).map((item) => (
          <button
            onClick={() => handleClick(item)}
            className="text-[14px] block p-2 cursor-pointer active:bg-gray-200 hover:bg-gray-100 w-full text-left"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Select;
