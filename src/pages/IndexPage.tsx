import React from "react";
import bars from "../../assets/bars.svg";
import logo from "../../assets/logo.svg";
import folderOutlined from "../../assets/folder-outlined.svg";
import folderWhite from "../../assets/folder_white.svg";
import menu from "../../assets/submenu.svg";
import menuActive from "../../assets/submenu_active.svg";
import mobileBars from "../../assets/mobile-bars.svg";
import Button from "../shared/Button";
import Tree, { Props } from "../shared/Tree";
import Input from "../shared/Input";
import Select from "../shared/Select";

export const data = [
  {
    title: "system management",
    treeSub: [
      {
        title: "System Management",
        treeSub: [
          {
            title: "Systems",
            treeSub: [
              {
                title: "System Code",
                treeItems: [{ title: "Code Registration" }],
              },
            ],
          },
        ],
        treeItems: [
          { title: "Code Registration - 2" },
          { title: "Properties" },
          {
            treeSub: [
              { title: "Menus", treeItems: [{ title: "Menu Registration" }] },
            ],
            itemsSubActive: true,
          },
          {
            treeSub: [
              {
                title: "API List",
                treeItems: [
                  { title: "API Registration" },
                  { title: "API Edit" },
                ],
              },
            ],
            itemsSubActive: true,
          },
        ],
      },
      {
        title: "Users & Groups",
        treeSub: [
          {
            title: "Users ",
            treeItems: [{ title: "User Account Registration" }],
          },
          {
            title: "사용자 승인",
          },
        ],
      },
    ],
    treeItems: [{ title: "사용자 승인 상세" }],
  },
] as Props[];

function IndexPage(): React.ReactElement {
  const [value,setValue] = React.useState<string>()
  const [open,setOpen] = React.useState(0)
  const [dataSelect,setDataSelect] = React.useState([])
  const [active, setActive] = React.useState("Systems");

  const handleClick = (name: string) => {
    setActive(() => name);
  };

  const onChange = (value: string) => {
    setValue(() => value)
  }

  React.useEffect(() => {
    const saveData  =[]
    data.map((item) => {
      saveData.push(item.title)
      item.treeSub.map((i) => {
        saveData.push(i.title)
        i.treeSub?.map((j) => {
          saveData.push(j.title)
        })
        i.treeItems?.map((c) => {
          saveData.push(c.title)
        })
      })
      item.treeItems.map((i) => {
        saveData.push(i.title)
        i.treeSub?.map((j) => {
          saveData.push(j.title)
        })
        i.treeItems?.map((c) => {
          saveData.push(c.title)
        })
      })
    })

    setDataSelect(() => saveData.filter((item) => item))
    
  },[])

  const handleOpen = () => {
    setOpen(() => open === 1 ? 2 : 1)
  }

  return (
    <div className="p-4">
      <div className={`fixed top-4 left-4 w-[240px] z-10 h-[96vh] rounded-[24px] bg-[#101828] ${open === 1 ? 'menu-open !w-full max-w-[390px]' : open === 2 ? 'menu-close !w-full max-w-[390px]' : 'laptop:hidden'}`}>
        <div className="flex items-center justify-between p-8">
          <img src={logo} alt="" />
          <img src={bars} alt="" onClick={handleOpen}/>
        </div>
        <div className="flex items-center justify-center flex-col mobile:px-6">
          <div className="w-[208px] mobile:w-full bg-[#1D2939] rounded-[16px]">
            <Button
              name="Systems"
              variant="transparent"
              img={folderWhite}
              classes="text-[#FFFFFF]"
            />
            <Button
              name="System Code"
              variant={
                active === "System Code" ? "bg-[#9FF443]" : "transparent"
              }
              img={active === "System Code" ? menuActive : menu}
              classes={
                active === "System Code"
                  ? "text-[#101828] w-full rounded-[16px]"
                  : "text-[#667085] w-full"
              }
              onClick={() => handleClick("System Code")}
            />
            <Button
              name="Properties"
              variant={active === "Properties" ? "bg-[#9FF443]" : "transparent"}
              img={active === "Properties" ? menuActive : menu}
              classes={
                active === "Properties"
                  ? "text-[#101828] w-full rounded-[16px]"
                  : "text-[#667085] w-full"
              }
              onClick={() => handleClick("Properties")}
            />
            <Button
              name="Menus"
              variant={active === "Menus" ? "bg-[#9FF443]" : "transparent"}
              img={active === "Menus" ? menuActive : menu}
              classes={
                active === "Menus"
                  ? "text-[#101828] w-full rounded-[16px]"
                  : "text-[#667085] w-full"
              }
              onClick={() => handleClick("Menus")}
            />
            <Button
              name="API List"
              variant={active === "API List" ? "bg-[#9FF443]" : "transparent"}
              img={active === "API List" ? menuActive : menu}
              classes={
                active === "API List"
                  ? "text-[#101828] w-full rounded-[16px]"
                  : "text-[#667085] w-full"
              }
              onClick={() => handleClick("API List")}
            />
          </div>
          <Button
            name="Users & Group"
            img={folderOutlined}
            classes="w-[208px] mobile:w-full text-[#667085]"
            variant="transparent"
          />
          <Button
            name="Competition"
            img={folderOutlined}
            classes="w-[208px] mobile:w-full text-[#667085]"
            variant="transparent"
          />
        </div>
      </div>
      <img
        src={mobileBars}
        alt=""
        onClick={handleOpen}
        className="min-laptop:hidden laptop:block mt-10 mb-4"
      />
      <div className="grid grid-cols-2 mobile:grid-cols-1 flex flex-wrap">
        <div>
          <div className="flex">
            <div className="w-[280px] laptop:hidden"></div>
            <div>
              <div className="flex items-center text-[14px]">
                <img
                  src={folderWhite}
                  alt=""
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(90%) sepia(5%) saturate(298%) hue-rotate(178deg) brightness(94%) contrast(93%)",
                  }}
                />
                <span className="mx-2 text-[#D0D5DD]">/</span>
                {active}
              </div>
              <div className="py-8 laptop:hidden">
                <div className="flex items-center">
                  <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#253BFF]">
                    <img
                      src={menuActive}
                      alt=""
                      className="w-[24px] h-[24px]"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(37deg) brightness(112%) contrast(101%)",
                      }}
                    />
                  </div>
                  <span className="text-[32px] ml-3 font-semibold">
                    {active}
                  </span>
                </div>
              </div>
              <Select value={value} onChange={onChange} data={dataSelect} placeholder="Search" classes="mb-4" />
              <div className="pb-6 flex items-center mobile:pt-6">
                <Button
                  name="Expand All"
                  variant="bg-[#1D2939]"
                  classes="text-[#ffffff] !h-[38px] rounded-[48px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] whitespace-nowrap"
                />
                <Button
                  name="Collapse All"
                  variant="border-[1px] border-[#D0D5DD]"
                  classes="text-[#475467] ml-2 !h-[38px] rounded-[48px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] whitespace-nowrap"
                />
              </div>
              {data.map((item) => (
                <Tree
                  title={item.title}
                  open={true}
                  treeSub={item.treeSub}
                  treeItems={item.treeItems}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="min-mobile:pt-32 mobile:pt-16 min-mobile:px-10">
          <Input
            label="Menu ID"
            classes="laptop:w-auto w-[532px]"
            placeholder="Menu ID"
          />
          <div className="pt-4">
            <Input
              label="Depth"
              type="number"
              classes="mobile:w-full w-[262px]"
              placeholder="Depth"
            />
          </div>
          <div className="pt-4">
            <Input
              label="Parent Data"
              classes="mobile:w-full w-[262px]"
              placeholder="Parent Data"
            />
          </div>
          <div className="pt-4">
            <Input
              label="Name"
              classes="mobile:w-full w-[262px]"
              placeholder="Name"
            />
          </div>
          <div className="py-4">
            <Button
              name="Save"
              variant="bg-[#253BFF]"
              classes="w-[263px] mobile:w-[159px] flex items-center justify-center rounded-[48px] text-[#ffffff]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
