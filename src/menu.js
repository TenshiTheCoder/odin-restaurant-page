const contentContainer = document.querySelector("#content");

export function createMenu() {
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
  const fettuccineArticle = document.createElement("article");

  const fettuccineHeading = document.createElement("h3");
  fettuccineHeading.textContent = "Fettuccine Alfredo";

  const fettuccineDescription = document.createElement("p");
  fettuccineDescription.textContent = "A beautiful plate of fettuccine noodles topped with a rich and creamy alfredo sauce."

  fettuccineArticle.append(fettuccineHeading, fettuccineDescription);
  fettuccineSection.appendChild(fettuccineArticle);

  // Container for the Vodka Penne
  const penneSection = document.createElement("section");
  const penneArticle = document.createElement("article");

  const penneHeading = document.createElement("h3");
  penneHeading.textContent = "Vodka Penne";

  const penneDescription = document.createElement("p");
  penneDescription.textContent = "A filling plate of penne shells coated in a beautiful Vodka sauce";

  penneArticle.append(penneHeading, penneDescription);
  penneSection.appendChild(penneArticle);
  entreeContainer.append(entreeHeading, fettuccineSection, penneSection);

  // Beginning of the beverages section
  const beveragesContainer = document.createElement("div");
  beveragesContainer.classList.add("beverages-container");

  const beveragesHeading = document.createElement("h2");
  beveragesHeading.textContent = "Beverages";

  // Container for strawberry lemonade
  const strawberryContainer = document.createElement("section");
  const strawBerryArticle = document.createElement("article");

  const strawberryHeading = document.createElement("h3");
  strawberryHeading.textContent = "Strawberry Lemonade";

  const strawberryDescription = document.createElement("p");
  strawberryDescription.textContent = "A sweet and refreshing glass of strawberry lemonade made from freshly picked strawberries";

  strawBerryArticle.append(strawberryHeading, strawberryDescription);
  strawberryContainer.appendChild(strawBerryArticle);  

  // Container for sweetened iced tea
  const teaContainer = document.createElement("section");
  const teaArticle = document.createElement("article");

  const teaHeading = document.createElement("h2");
  teaHeading.textContent = "Iced Tea";

  const teaDescription = document.createElement("p");
  teaDescription.textContent = "A brisk and soothing glass of sweetened ice tea, comes with an optional lemon for more flavor";

  teaArticle.append(teaHeading, teaDescription);
  teaContainer.appendChild(teaArticle);

  beveragesContainer.append(beveragesHeading, strawberryContainer, teaContainer);

  // Container for desserts
  const dessertContainer = document.createElement("div");
  dessertContainer.classList.add("dessert-container");

  const dessertHeading = document.createElement("h2");
  dessertHeading.classList.add("dessert-heading");
  dessertHeading.textContent = "Dessert";

  // Container for the lava cake
  const lavaCakeContainer = document.createElement("section");
  const lavaCakeArticle = document.createElement("article");

  const lavaCakeHeading = document.createElement("h3");
  lavaCakeHeading.textContent = "Chocolate Lava Cake";

  const lavaCakeDescription = document.createElement("p");
  lavaCakeDescription.textContent = "A soft and spongy chocolate cake with warm and delectable melted chocolate inside";

  lavaCakeArticle.append(lavaCakeHeading, lavaCakeDescription);
  lavaCakeContainer.appendChild(lavaCakeArticle);

  // Container for the Cupcakes 
  const cupcakeContainer = document.createElement("section");
  const cupcakeArticle = document.createElement("article");

  const cupcakeHeading = document.createElement("h3");
  cupcakeHeading.textContent = "Cupcakes of all flavors";

  const cupcakeDescription = document.createElement("p");
  cupcakeDescription.textContent = "Enjoy cupcakes in 3 different flavors. Chocolate, Vanilla and Strawberry with options for additional toppings";

  cupcakeArticle.append(cupcakeHeading, cupcakeDescription);
  cupcakeContainer.appendChild(cupcakeArticle);
  dessertContainer.append(dessertHeading, lavaCakeContainer, cupcakeContainer);

  // Appending the Heading and 3 sections of the menu to the main parent container
  contentContainer.append(menuHeading, entreeContainer, beveragesContainer, dessertContainer);
};

