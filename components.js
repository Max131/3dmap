"use strict";
(async function () {
  const scene = document.querySelector("a-scene");
  const cam = document.querySelector("#cam");
  const { data } = await fetch("./info.json").then((res) => res.json());
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
      card: {
        type: "int",
        default: 0,
      },
    },
    init() {
      const el = this.el;
      const targetElement = el.getAttribute("pinbutton").target;
      const targetData = el.getAttribute("pinbutton").card;
      const target = targetElement ? document.querySelector(`${targetElement}`) : "";
      const title = target.querySelector(".modal__title");
      const subtitle = target.querySelector(".modal__subtitle");
      const text = target.querySelector(".modal__text");
      //target.setAttribute("visible", false);
      el.addEventListener("click", () => {
        //target.setAttribute("visible", !target.getAttribute("visible"));
        target.classList.add("is-active");
        title.textContent = data[targetData].title;
        subtitle.textContent = data[targetData].subtitle;
        text.textContent = data[targetData].text;
      });
    },
  });
})();
