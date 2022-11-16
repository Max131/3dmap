"use strict";
const scene = document.querySelector("a-scene");
const cam = document.querySelector("#cam");
let zoom = 1;
const ZOOM_FACTOR = 0.25;

scene.addEventListener("wheel", (e) => {
  zoom += (e.deltaY < 0 ? 1 : -1) * ZOOM_FACTOR;

  if (zoom > 4 || zoom < 1) {
    zoom = zoom > 4 ? 4 : 1;
  }

  cam.setAttribute("zoom", zoom);
});

AFRAME.registerComponent("pinbutton", {
  schema: {
    target: {
      type: "string",
      default: "",
    },
  },
  init() {
    const el = this.el;
    const targetElement = el.getAttribute("pinbutton").target;
    const target = targetElement ? document.querySelector(`${targetElement}`) : "";
    target.setAttribute("visible", false);
    el.addEventListener("click", () => {
      target.setAttribute("visible", !target.getAttribute("visible"));
    });
  },
});
