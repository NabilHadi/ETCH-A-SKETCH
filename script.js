const body = document.querySelector("body");
const container = document.querySelector("#container");

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "Create New Grid";
newGridBtn.addEventListener("click", () => {
  let numOfSquaresPerSide = Number(prompt("Enter number of squares per side of the grid (max is 100)"));
  if (numOfSquaresPerSide > 100) {
    alert("Please enter number less than 100");
  } else if (numOfSquaresPerSide < 0 || Number.isNaN(numOfSquaresPerSide)) {
    alert("Please enter a number between 0 and 100");
  } else {
    drawGrid(numOfSquaresPerSide);
  }
});
body.appendChild(newGridBtn);
body.appendChild(container);

function handleMouseEnter(e) {
  e.target.style.backgroundColor = "black";
}

function drawGrid(numOfSquaresPerSide) {
  document.querySelectorAll(".square").forEach((square) => {
    square.remove();
  });
  let numOfSquares = numOfSquaresPerSide * numOfSquaresPerSide;
  let squareflexPercentage = 100 / numOfSquaresPerSide;
  for (let i = 0; i < numOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex = `0 0 ${squareflexPercentage}%`;
    square.addEventListener("mouseenter", handleMouseEnter);
    container.appendChild(square);
  }
}

drawGrid(15);