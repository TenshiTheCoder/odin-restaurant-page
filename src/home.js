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
  testContainer.classList.add("test-container");

  const testimonial = document.createElement("p");
  testimonial.classList.add("testimonial-text");
  testimonial.textContent = "Bell Cafe is a hidden gem in New York! The ambiance is heavenly, and the pasta truly lives up to its divine reputation. Every visit feels like a special occasion.";

  const testAttr = document.createElement("p");
  testAttr.classList.add("testimonial-attrition");
  testAttr.textContent = "— Sophia M.";

  testContainer.append(testimonial, testAttr);

  // Container for the featured dish
  const featuredContainer = document.createElement("div");
  featuredContainer.classList.add("featured-container");

  const dishImg = document.createElement("img");
  dishImg.classList.add("fettuccine-img");
  dishImg.src = fettuccineImg;

  const dishDescription = document.createElement("p");
  dishDescription.classList.add("featured-description");
  dishDescription.textContent = "Creamy, rich Fettuccine Alfredo made with fresh parmesan and buttery sauce — a timeless classic that comforts and delights every bite."
  
  featuredContainer.append(dishImg, dishDescription,);

  // Container for the phone contact info
  

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

  // Why Us Section
  const whyContainer = document.createElement("div");
  whyContainer.classList.add("why-container");

  const whyHeading = document.createElement("h3");
  whyHeading.classList.add("why-heading"); 
  whyHeading.textContent = "Why Us?";
  
  const whyText = document.createElement("p");
  whyText.classList.add("why-text");
  whyText.textContent = "At Bell Cafe, we believe every meal should feel like a moment of serenity. Nestled in the heart of New York, we craft each dish with the finest ingredients and a deep love for tradition. Whether you're savoring our heavenly pasta or sipping a warm cappuccino under the soft morning light, our welcoming atmosphere and attentive service make every visit feel special. Come for the food — stay for the feeling."
  
  whyContainer.append(whyHeading, whyText);
  // Container to properly position the hours, featured dish and Why Us Container
  const midSection = document.createElement("div");
  midSection.classList.add("mid-section");
  midSection.append(whyContainer, featuredContainer, hoursContainer);

  // Appending the finished containers to the #content parent div
  contentContainer.append(homeHeadingContainer, testContainer, midSection);
}; 
