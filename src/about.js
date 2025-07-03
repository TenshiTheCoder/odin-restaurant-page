// Module to create the About page of the website
const contentContainer = document.querySelector("#content");
import "./about.css";

export function createAbout() {
  const aboutDescription = document.createElement("p");
  const aboutHeading = document.createElement("h1");

  aboutDescription.classList.add("about-description");
  aboutHeading.classList.add("about-heading");

  aboutHeading.textContent = "What is Bell Cafe?";

  pageDescription.textContent =
    "Welcome to Bell Cafe! A small restaurant filled with delicious appetizers like mozzarella sticks. Entrees including all of your favorite pastas, and delicious lava cakes for dessert. Located in Paterson, New Jersey, Bell Cafe aims to deliver a divine experience and leave you craving more!";

    contentContainer.appendChild(aboutHeading);
    contentContainer.appendChild(aboutDescription);
};


