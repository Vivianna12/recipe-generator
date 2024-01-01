function displayRecipe(response) {
  new Typewriter("#recipeOutput", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "f42atbc02aod4017c837cbfe1c70ef22";
  let prompt = `Generate a recipe about ${userInput.value}`;
  let context =
    "You are a food expert. Your mission is to generate a yummy recipe in basic HTML. Make sure to follow the user instructions. Sign the recipe SheCode AI in a <strong> element at the bottom ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipeOutput");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">Whipping up the recipe for you ⏲️</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
