import React from "react";
import renderDOM from "react-dom/client";
import "./tailwind.scss";
import { Home } from "./pages";

const dom = renderDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

dom.render(<Home />);
