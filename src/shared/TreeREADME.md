import React from "react";
import bars from "../../assets/bars.svg";
import logo from "../../assets/logo.svg";
import folderOutlined from "../../assets/folder-outlined.svg";
import folderWhite from "../../assets/folder_white.svg";
import menu from "../../assets/submenu.svg";
import menuActive from "../../assets/submenu_active.svg";
import Button from "../shared/Button";
import Tree, { Props } from "../shared/Tree";

const data = [
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
const [active, setActive] = React.useState("Systems");

const handleClick = (name: string) => {
console.log(name);
setActive(() => name);
console.log(active);
};
return (
<div className="p-4">
<div className="fixed top-4 left-4 w-[240px] h-[96vh] rounded-[24px] bg-[#101828]">
<div className="flex items-center justify-between p-8">
<img src={logo} alt="" />
<img src={bars} alt="" />
</div>
<div className="flex items-center justify-center flex-col">
<div className="w-[208px] bg-[#1D2939] rounded-[16px]">
<Button
              name="Systems"
              variant="^transparent"
              img={folderWhite}
              classes="text-[#FFFFFF]"
            />
<Button
name="System Code"
variant={
active === "System Code"
? "menu^active^#9FF443"
: "^transparent"
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
variant={
active === "Properties" ? "menu^active^#9FF443" : "^transparent"
}
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
variant={
active === "Menus" ? "menu^active^#9FF443" : "^transparent"
}
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
variant={
active === "API List" ? "menu^active^#9FF443" : "^transparent"
}
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
            classes="w-[208px] text-[#667085]"
            variant="^transparent"
          />
<Button
            name="Competition"
            img={folderOutlined}
            classes="w-[208px] text-[#667085]"
            variant="^transparent"
          />
</div>
</div>
<div className="grid grid-cols-2">
<div>
<div className="flex">
<div className="w-[280px]"></div>
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
<div className="py-8">
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
{data.map((item, index) => (
<Tree
                  key={index}
                  open={true}
                  title={item.title}
                  treeSub={item.treeItems}
                  treeItems={item.treeItems}
                />
))}
</div>
</div>
</div>
<div>dqwdqw</div>
</div>
</div>
);
}

export default IndexPage;
