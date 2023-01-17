const gridContainer = document.querySelector(".grid-container");

function squareEnterHandler(event) {
  const square = event.target;
  if (event.buttons === 1 || event.buttons === 3) {
    const blackPercentage = Number(square.getAttribute("data-black"));

    if (blackPercentage < 100) {
      square.setAttribute("data-black", blackPercentage + 10);
      square.style.backgroundColor = `rgba(0,0,0,${
        (blackPercentage + 10) / 100
      })`;
    }
  }
}

function generateSquares(size) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.flexBasis = `${100 / size}%`;
      square.setAttribute("data-black", "0");
      square.addEventListener("mouseenter", squareEnterHandler);
      gridContainer.appendChild(square);
    }
  }
}

generateSquares(50);

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", (event) => {
  const size = Number(prompt("Enter grid size | (Max is 50)", 30));
  generateSquares(size);
});
