import React from "react";
import { render } from "react-dom";

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener(
    "contextmenu",
    event => {
      const { x, y } = event;
      window.api.inspectElement({ x, y });
    },
    false
  );
});

const mainElement = document.createElement("div");
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

render(<App />, mainElement);
