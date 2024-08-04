function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "13dt81a8acado8bdf8d44ea66063d4e7";
  let context =
    "You are a romantic and an expert in writing French love poems.Your mission is to write a 4 line French poem that follows basic HTML format and separate each line with <br/>.Please make sure to follow the user instructions. Sign the poem with SheCodes AI inside <strong> element at the botton of the poem. Do not include the title to the poem";
  let prompt = `User Instructions:Generate a French poem about ${instructionInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
