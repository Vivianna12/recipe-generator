function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipeOutput", {
    strings: "Recipe will appear here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
