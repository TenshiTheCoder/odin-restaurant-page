const homeButton = document.querySelector(".home-button");
const aboutButton = document.querySelector(".about-button");
const menuButton = document.querySelector(".menu-button");
const contentContainer = document.querySelector("#content");
import {createHome, createMenu, createAbout} from "./barrel.js";

export function buttonListeners() {
  homeButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    createHome();
  })

  aboutButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    createAbout();
  })

  menuButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    createMenu();
  })
}