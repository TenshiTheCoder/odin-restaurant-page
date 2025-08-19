import { createHome, createMenu, createAbout } from "./barrel.js";

export function initialLoad() {
  const savedPage = localStorage.getItem("currentPage") || "home";

  if (savedPage === "menu") {
    createMenu();
  } else if (savedPage === "about") {
    createAbout();
  } else {
    createHome();
  }
}
