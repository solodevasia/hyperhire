import React, { useState } from "react";
import chevronDown from "../../assets/chevron-down.svg";

export interface Props {
  open?: boolean;
  title: string;
  treeSub?: Props[];
  subActive?: boolean;
  itemsSubActive?: boolean;
  treeItems: Props[];
}

function SubTree({
  children,
  ...item
}: Props & { children?: React.ReactElement }): React.ReactElement {
  return (
    <div
      className={"relative rounded- pt-4 pl-7 border-l-2 border-l-[#98A2B3]"}
    >
      <div
        className={"absolute top-[30px] w-[15px] h-[2px] bg-[#98A2B3] ".concat(
          item.subActive ? "left-[-32px]" : "left-[-34px]"
        )}
      ></div>

      <div className="absolute top-0 left-[-2px] w-2 h-[20px] bg-white z-1"></div>
      <div className="absolute bottom-0 left-[-2px] w-2 h-[8.8px] bg-white"></div>

      <div className="absolute top-[19px] left-[-7px] bg-white pb-3 pt-1">
        <img src={chevronDown} alt="" className="w-[12px] h-[12px]" />
      </div>

      <span className="text-[14px]">{item.title}</span>

      {item.treeSub?.map((sub) => (
        <SubTree
          title={sub.title}
          treeSub={sub.treeSub}
          treeItems={sub.treeItems}
          subActive={true}
        />
      ))}

      {item.treeItems?.map((i, index) => {
        return (
          <div
            className={"relative ".concat(
              i.itemsSubActive ? "pl-[2px]" : "pl-6 pt-4"
            )}
            key={index}
          >
            {i.treeSub?.length ? (
              i.treeSub?.map((sub) => (
                <SubTree
                  title={sub.title}
                  treeSub={sub.treeSub}
                  treeItems={sub.treeItems}
                />
              ))
            ) : (
              <div>
                <div className="absolute top-[29px] left-[-28px] w-[43px] h-[2px] bg-[#98A2B3]"></div>
                <span className="text-[14px]">{i.title}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Tree({
  children,
  ...props
}: { children?: React.ReactElement } & Props): React.ReactElement {
  const [state, setState] = useState(props.open);

  const handleCollapse = () => {
    setState(() => !state);
  };
  return (
    <div className="relative border-l-2 border-l-[#98A2B3] pl-8 flex flex-col">
      <div onClick={handleCollapse}>
        <div className="absolute top-0 left-[-5px] bg-white pb-3 pt-2">
          <img src={chevronDown} alt="" className="w-[12px] h-[12px]" />
        </div>
        {state ? (
          <div className="absolute bottom-0 left-[-2px] w-1 h-[8.8px] bg-white"></div>
        ) : null}
        <span className="text-[14px]">{props.title}</span>
      </div>
      {state ? (
        <div>
          {props.treeSub?.map((item) => (
            <SubTree
              title={item.title}
              treeSub={item.treeSub}
              treeItems={item.treeItems}
            />
          ))}
          {props.treeItems?.map((item) => (
            <div className="relative pt-4 pl-6">
              <div>
                <div className="absolute top-[29px] left-[-32px] w-[43px] h-[2px] bg-[#98A2B3]"></div>
                <span className="text-[14px]">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Tree;
