const contentContainer = document.querySelector("#content");
import fettuccineImg from "./imgs/fettuccine-f.jpg";
import "./home.css";

export function createHome() {
  const homeHeadingContainer = document.createElement("div");
  homeHeadingContainer.classList.add("heading-container");

  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Bell Cafe";
  homeHeading.classList.add("home-heading-main");

  const homeSubHeading = document.createElement("h2");
  homeSubHeading.textContent = "Discover heavenly pasta and warm vibes at New York's most beautiful cafe.";
  homeSubHeading.classList.add("home-heading-sub");

  homeHeadingContainer.append(homeHeading, homeSubHeading);

  // Container for the testimonial(s)
  const testContainer = document.createElement("div");

  const testimonial = document.createElement("p");
  testimonial.classList.add("testimonial");
  testimonial.textContent = "Bell Cafe is a hidden gem in New York! The ambiance is heavenly, and the pasta truly lives up to its divine reputation. Every visit feels like a special occasion.";

  const testAttr = document.createElement("p");
  testAttr.classList.add("testimonial-attrition");
  testAttr.textContent = "— Sophia M.";

  testContainer.append(testimonial, testAttr);

  // Container for the featured dish
  const featuredContainer = document.createElement("div");

  const dishImg = document.createElement("img");
  dishImg.classList.add("fettuccine-img");
  dishImg.src = fettuccineImg;

  const dishDescription = document.createElement("p");
  dishDescription.classList.add("featured-description");
  dishDescription.textContent = "Creamy, rich Fettuccine Alfredo made with fresh parmesan and buttery sauce — a timeless classic that comforts and delights every bite."
  
  featuredContainer.append(dishImg, dishDescription);
  // Container for the phone contact info
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";
  contactHeading.classList.add("contact-heading");

  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("phone-container");

  const phoneLabel = document.createElement("strong");
  phoneLabel.textContent = "Phone Number: ";
  phoneLabel.classList.add("phone-label");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-1234-4512";
  phoneNumber.classList.add("phone-info");

  phoneContainer.append(phoneLabel, phoneNumber);

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

  // Appending the different sections to the parent contact container
  contactContainer.append(phoneContainer, emailContainer, addressContainer);

  // Store hours info
  const hoursContainer = document.createElement("section");
  hoursContainer.classList.add("hours-container");

  const hoursArticle = document.createElement("article");
  hoursArticle.classList.add("hours-article");

  const hoursLabel = document.createElement("strong");
  hoursLabel.classList.add("hours-label");
  hoursLabel.textContent = "Hours: ";

  const monday = document.createElement("p");
  monday.textContent = "Monday: 9am - 8pm";
  monday.classList.add("hours");

  const tuesday = document.createElement("p");
  tuesday.textContent = "Tuesday: 9am - 8pm";
  tuesday.classList.add("hours");

  const wednesday = document.createElement("p");
  wednesday.textContent = "Wednesday: 9am - 8pm";
  wednesday.classList.add("hours");

  const thursday = document.createElement("p");
  thursday.textContent = "Thursday: 9am - 8pm";
  thursday.classList.add("hours");

  const friday = document.createElement("p");
  friday.textContent = "Friday: 9am - 9pm";
  friday.classList.add("hours");

  const saturday = document.createElement("p");
  saturday.textContent = "Saturday: 9am - 9pm";
  saturday.classList.add("hours");

  const sunday = document.createElement("p");
  sunday.textContent = "Sunday: 9am - 3pm";
  sunday.classList.add("hours");

  hoursArticle.append(hoursLabel, monday, tuesday, wednesday, thursday, friday, saturday, sunday);
  hoursContainer.appendChild(hoursArticle);

  // Appending the finished containers to the #content parent div
  contentContainer.append(homeHeadingContainer, testContainer, featuredContainer, contactContainer, hoursContainer);
}; 
