// Will come back to this later
import { initialLoad } from "./initialLoad";
import { createHome, createMenu, createAbout } from "./barrel.js";
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");
const contentContainer = document.querySelector("#content");

initialLoad();

function buttonListeners() {
  homeButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", "home");
    contentContainer.innerHTML = "";
    createHome();
  })

  aboutButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", "about");
    contentContainer.innerHTML = "";
    createAbout();
  })

  menuButton.addEventListener("click", () => {
    localStorage.setItem("currentPage", "menu");
    contentContainer.innerHTML = "";
    createMenu();
  })
}

buttonListeners();