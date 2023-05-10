import _ from "lodash";
import "../src/style.scss";
import icon from "./assets/icon.png";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  btn.className = "btn";

  btn.innerHTML = ` Click me and check the console!
  <img src="${icon}" alt="icon" />
  `;
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
