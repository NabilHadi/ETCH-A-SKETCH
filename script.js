const container = document.querySelector(".container");
const squaresArray = [];

for (let i = 0; i < 16; i++) {
  const square = document.createElement("div");
  square.setAttribute("data-index", i);
  square.classList.add("square");

  square.addEventListener("mouseenter", (e) => {
    e.target.style["background-color"] = "black";
  });

  container.appendChild(square);
  squaresArray.push(square);
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
  squaresArray.forEach((sqaure) => {
    sqaure.style["background-color"] = "transparent";
  });
});

const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener("click", (e) => {
  const numOfSquares = Number(prompt("Enter number of squares"));
  if (Number.isNaN(numOfSquares)) return;

  squaresArray.forEach((square) => {
    square.remove();
  });
  for (let i = 0; i < numOfSquares; i++) {
    const square = document.createElement("div");
    square.setAttribute("data-index", i);
    square.classList.add("square");

    square.addEventListener("mouseenter", (e) => {
      e.target.style["background-color"] = "black";
    });

    container.appendChild(square);
    squaresArray.push(square);
  }
});
