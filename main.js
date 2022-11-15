"use strict";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

modal?.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

modalClose?.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

document.addEventListener("keyup", (e) => {
  const isModalShow = e.code === "Escape" && modal.classList.contains("is-active");
  if (isModalShow) modal.classList.remove("is-active");
});
