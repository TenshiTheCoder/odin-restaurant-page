const contentContainer = document.querySelector("#content");
import "./menu.css"; 
import fettuccinePhoto from "./imgs/fettuccine-f.jpg";

export function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuHeading = document.createElement("h1");
  menuHeading.classList.add("menu-heading");
  menuHeading.textContent = "Menu";

  // Beginning of the 
  const entreeContainer = document.createElement("div");
  entreeContainer.classList.add("entree-container");

  const entreeHeading = document.createElement("h2");
  entreeHeading.classList.add("entree-heading");
  entreeHeading.textContent = "Entrees";

  // Container for the fettuccine 
  const fettuccineSection = document.createElement("section");
  fettuccineSection.classList.add("fettuccine-section");

  const fettuccineArticle = document.createElement("article");
  fettuccineArticle.classList.add("fettuccine-article");

  const fettuccineHeading = document.createElement("h3");
  fettuccineHeading.classList.add("fettuccine-heading");
  fettuccineHeading.textContent = "Fettuccine Alfredo";

  const fettuccinePrice = document.createElement("p");
  fettuccinePrice.classList.add("fettuccine-price");
  fettuccinePrice.textContent = "$18";

  const fettuccineItem = document.createElement("div");
  fettuccineItem.classList.add("fettuccine-item");
  fettuccineItem.append(fettuccineHeading, fettuccinePrice);

  const fettuccineImg = document.createElement("img");
  fettuccineImg.classList.add("fettuccine-photo");
  fettuccineImg.src = fettuccinePhoto;

  const fettuccineDescription = document.createElement("p");
  fettuccineDescription.classList.add("fettuccine-description");
  fettuccineDescription.textContent = "A beautiful plate of fettuccine noodles topped with a rich and creamy alfredo sauce."

  fettuccineArticle.append(fettuccineItem, fettuccineImg, fettuccineDescription);
  fettuccineSection.appendChild(fettuccineArticle);

  // Container for the Vodka Penne
  const penneSection = document.createElement("section");
  penneSection.classList.add("penne-section");

  const penneArticle = document.createElement("article");
  penneArticle.classList.add("penne-article");

  const penneHeading = document.createElement("h3");
  penneHeading.classList.add("penne-heading");
  penneHeading.textContent = "Vodka Penne";

  const pennePrice = document.createElement("p");
  pennePrice.classList.add("penne-price");
  pennePrice.textContent = "$19";

  const penneItem = document.createElement("div");
  penneItem.classList.add("penne-item");
  penneItem.append(penneHeading, pennePrice);

  const penneDescription = document.createElement("p");
  penneDescription.classList.add("penne-description");
  penneDescription.textContent = "A filling plate of penne shells coated in a beautiful Vodka sauce";

  penneArticle.append(penneItem, penneDescription);
  penneSection.appendChild(penneArticle);

  entreeContainer.append(entreeHeading, fettuccineSection, penneSection);

  // Beginning of the beverages section
  const beveragesContainer = document.createElement("div");
  beveragesContainer.classList.add("beverages-container");

  const beveragesHeading = document.createElement("h2");
  beveragesHeading.classList.add("beverages-heading");
  beveragesHeading.textContent = "Beverages";

  // Container for strawberry lemonade
  const strawberryContainer = document.createElement("section");
  strawberryContainer.classList.add("strawberry-section");

  const strawBerryArticle = document.createElement("article");
  strawBerryArticle.classList.add("strawberry-article");

  const strawberryHeading = document.createElement("h3");
  strawberryHeading.classList.add("strawberry-heading");
  strawberryHeading.textContent = "Strawberry Lemonade";

  const strawberryPrice = document.createElement("p");
  strawberryPrice.classList.add("strawberry-price");
  strawberryPrice.textContent = "$5";

  const strawberryItem = document.createElement("div"); 
  strawberryItem.classList.add("strawberry-item");
  strawberryItem.append(strawberryHeading, strawberryPrice);

  const strawberryDescription = document.createElement("p");
  strawberryDescription.classList.add("strawberry-description");
  strawberryDescription.textContent = "A sweet and refreshing glass of strawberry lemonade made from freshly picked strawberries";

  strawBerryArticle.append(strawberryItem, strawberryDescription);
  strawberryContainer.appendChild(strawBerryArticle);  

  // Container for sweetened iced tea
  const teaContainer = document.createElement("section");
  teaContainer.classList.add("tea-section");

  const teaArticle = document.createElement("article");
  teaArticle.classList.add("tea-article");

  const teaHeading = document.createElement("h3");
  teaHeading.classList.add("tea-heading");
  teaHeading.textContent = "Iced Tea";

  const teaPrice = document.createElement("p");
  teaPrice.classList.add("tea-price");
  teaPrice.textContent = "$4";

  const teaItem = document.createElement("div");
  teaItem.classList.add("tea-item");
  teaItem.append(teaHeading, teaPrice);

  const teaDescription = document.createElement("p");
  teaDescription.classList.add("tea-description");
  teaDescription.textContent = "A brisk and soothing glass of sweetened ice tea, comes with an optional lemon for more flavor";

  teaArticle.append(teaItem, teaDescription);
  teaContainer.appendChild(teaArticle);

  beveragesContainer.append(beveragesHeading, strawberryContainer, teaContainer);

  // Container for desserts
  const dessertContainer = document.createElement("div");
  dessertContainer.classList.add("dessert-container");

  const dessertHeading = document.createElement("h2");
  dessertHeading.classList.add("dessert-heading");
  dessertHeading.textContent = "Dessert";

  // Container for the lava cake
  const lavaContainer = document.createElement("section");
  lavaContainer.classList.add("lava-section");

  const lavaArticle = document.createElement("article");
  lavaArticle.classList.add("lava-article");

  const lavaHeading = document.createElement("h3");
  lavaHeading.classList.add("lava-heading");
  lavaHeading.textContent = "Chocolate Lava Cake";

  const lavaPrice = document.createElement("p");
  lavaPrice.classList.add("lava-price");
  lavaPrice.textContent = "$14";

  const lavaItem = document.createElement("div");
  lavaItem.classList.add("lava-item")
  lavaItem.append(lavaHeading, lavaPrice);

  const lavaCakeDescription = document.createElement("p");
  lavaCakeDescription.classList.add("lava-description");
  lavaCakeDescription.textContent = "A soft and spongy chocolate cake with warm and delectable melted chocolate inside";

  lavaArticle.append(lavaItem, lavaCakeDescription);
  lavaContainer.appendChild(lavaArticle);

  // Container for the Cupcakes 
  const cupcakeContainer = document.createElement("section");
  cupcakeContainer.classList.add("cupcake-section");

  const cupcakeArticle = document.createElement("article");
  cupcakeArticle.classList.add("cupcake-article");

  const cupcakeHeading = document.createElement("h3");
  cupcakeHeading.classList.add("cupcake-heading");
  cupcakeHeading.textContent = "Cupcakes";

  const cupcakePrice = document.createElement("p");
  cupcakePrice.classList.add("cupcake-price");

  const cupcakeItem = document.createElement("div");
  cupcakeItem.classList.add("cupcake-item");
  cupcakeItem.append(cupcakeHeading, cupcakePrice);

  const cupcakeDescription = document.createElement("p");
  cupcakeDescription.classList.add("cupcake-description");
  cupcakeDescription.textContent = "Enjoy cupcakes in 3 different flavors. Chocolate, Vanilla and Strawberry with options for additional toppings";

  cupcakeArticle.append(cupcakeItem, cupcakeDescription);
  cupcakeContainer.appendChild(cupcakeArticle);
  dessertContainer.append(dessertHeading, lavaContainer, cupcakeContainer);

  // Appending the Heading and 3 sections of the menu to the main parent container
  menuContainer.append(menuHeading, entreeContainer, beveragesContainer, dessertContainer);
  contentContainer.append(menuContainer);
};

