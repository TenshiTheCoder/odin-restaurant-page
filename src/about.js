// Module to create the About page of the website
const contentContainer = document.querySelector("#content");
import "./about.css";

export function createAbout() {
  const aboutDescription = document.createElement("p");
  aboutDescription.classList.add("about-description");
  aboutDescription.textContent =
    "Welcome to Bell Cafe! A small restaurant filled with delicious appetizers like mozzarella sticks. Entrees including all of your favorite pastas, and delicious lava cakes for dessert. Located in Paterson, New Jersey, Bell Cafe aims to deliver a divine experience and leave you craving more!";

  const aboutHeading = document.createElement("h1");
  aboutHeading.classList.add("about-heading");
  aboutHeading.textContent = "What is Bell Cafe?";

    contentContainer.appendChild(aboutHeading);
    contentContainer.appendChild(aboutDescription);

     // Container for the email container info
  const emailContainer = document.createElement("div");
  emailContainer.classList.add("email-container");

  const emailLabel = document.createElement("strong");
  emailLabel.textContent = "Email: ";
  emailLabel.classList.add("email-label");

  const emailAddress = document.createElement("p");
  emailAddress.textContent = "bellCafe540@business.com";
  emailAddress.classList.add("email-info");

  emailContainer.append(emailLabel, emailAddress);

  // Address Info
  const addressContainer = document.createElement("div");
  addressContainer.classList.add("address-container");

  const addressLabel = document.createElement("strong");
  addressLabel.textContent = "Visit us in store at: ";
  addressLabel.classList.add("address-label");

  const addressInfo = document.createElement("p");
  addressInfo.textContent = "540 Bell Ave, New York City";
  addressInfo.classList.add("address-info");

  addressContainer.append(addressLabel, addressInfo);

  // Container for the phone info 
  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("phone-container");

  const phoneLabel = document.createElement("strong");
  phoneLabel.textContent = "Phone Number: ";
  phoneLabel.classList.add("phone-label");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-1234-4512";
  phoneNumber.classList.add("phone-info");

  phoneContainer.append(phoneLabel, phoneNumber);

  // contactContainer.append(phoneContainer, emailContainer, addressContainer);
};


