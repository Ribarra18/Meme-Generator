const form = document.querySelector("form");
const submitButton = document.querySelector("#submit");
const memeSection = document.querySelector(".memes");
const inputs = document.querySelectorAll("input:not(#submit)");

submitButton.addEventListener("click", (event) => {
  if (form.checkValidity()) {
    event.preventDefault();

    const inputsArr = [...inputs];
    const formattedData = formatData(inputsArr);

    clearInputs(inputsArr);

    addMeme(formattedData);
  }
});

function formatData(data) {
  return data.reduce(
    (data, input) => ({ ...data, [input.id]: input.value }),
    {}
  );
}

function clearInputs(data) {
  data.forEach((input) => (input.value = ""));
}

function addMeme(data) {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const topText = document.createElement("p");
  const bottomText = document.createElement("p");

  image.src = data.imageUrl;
  topText.textContent = data.topText;
  bottomText.textContent = data.bottomText;

  topText.classList.add("top-text");
  bottomText.classList.add("bottom-text");

  div.append(image);
  div.append(topText);
  div.append(bottomText);

  div.addEventListener("click", () => {
    div.remove();
  });

  memeSection.append(div);
}
