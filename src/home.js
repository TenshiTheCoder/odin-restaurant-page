const contentContainer = document.querySelector("#content");

export function createHome() {
  const homeHeadingContainer = document.createElement("div");
  homeHeadingContainer.classList.add("heading-container");

  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Bell Cafe";
  homeHeading.classList.add("home-heading-main")

  const homeSubHeading = document.createElement("h2");
  homeSubHeading.textContent = "A beautiful cafe located in New York that serves the most divine pasta you'll ever have";
  homeSubHeading.classList.add("home-heading-sub");

  homeHeadingContainer.append(homeHeading, homeSubHeading);

  // Container for the phone contact info
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";
  contactHeading.classList.add("contact-heading");

  const phoneContainer = document.createElement("div");

  const phoneLabel = document.createElement("strong");
  phoneLabel.textContent = "Phone Number: ";
  phoneLabel.classList.add("phone-label");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-1234-4512";
  phoneNumber.classList.add("phone-number");

  phoneContainer.append(phoneLabel, phoneNumber);

  // Container for the email container info
  const emailContainer = document.createElement("div");
  emailContainer.classList.add("email-container")

  const emailLabel = document.createElement("strong");
  emailLabel.textContent = "Email: ";
  emailLabel.classList.add("email-label");

  const emailAddress = document.createElement("p");
  emailAddress.textContent = "bellCafe540@business.com";
  emailAddress.classList.add("email-address");

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

  // Appending the contact info which is then appended with the home heading to the main content div
  contactContainer.append(phoneContainer, emailContainer, addressContainer);

  contentContainer.append(homeHeadingContainer, contactContainer);
}; 
