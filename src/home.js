const contentContainer = document.querySelector("#content");

export function createHome() {
  const homeHeadingContainer = document.createElement("div");

  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Bell Cafe";

  const homeSubHeading = document.createElement("h2");
  homeSubHeading.textContent = "A beautiful cafe located in New York that serves the most divine pasta you'll ever have";

  homeHeadingContainer.append(homeHeading, homeSubHeading);

  // Container for the phone contact info
  const contactContainer = document.createElement("div");
  
  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";

  const phoneContainer = document.createElement("div");

  const phoneLabel = document.createElement("strong");
  phoneLabel.textContent = "Phone Number: ";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = " 123-1234-4512";

  phoneContainer.append(phoneLabel, phoneNumber);

  // Container for the email container info
  const emailContainer = document.createElement("div");

  const emailLabel = document.createElement("strong");
  emailLabel.textContent = "Email: ";

  const emailAddress = document.createElement("p");
  emailAddress.textContent = "bellCafe540@business.com";

  emailContainer.append(emailLabel, emailAddress);

  // Address Info
  const addressContainer = document.createElement("div");

  const addressLabel = document.createElement("strong");
  addressLabel.textContent = "Visit us in store at: ";

  const addressInfo = document.createElement("p");
  addressInfo.textContent = "540 Bell Ave, New York City";

  addressContainer.append(addressLabel, addressInfo);

  // Appending the contact info which is then appended with the home heading to the main content div
  contactContainer.append(phoneContainer, emailContainer, addressContainer);

  contentContainer.append(homeHeadingContainer, contactContainer);
}; 
