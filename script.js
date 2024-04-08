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
  let numOfPasses = Number(e.target.dataset.numOfPasses);
  if (numOfPasses >= 10) return;
  numOfPasses++;
  console.log(numOfPasses);
  let red = Math.floor(Math.random() * 256) - numOfPasses * 25.6;
  let green = Math.floor(Math.random() * 256) - numOfPasses * 25.6;
  let blue = Math.floor(Math.random() * 256) - numOfPasses * 25.6;
  e.target.style.background = `rgb(${red} ${green} ${blue} / 510%)`;
  e.target.dataset.numOfPasses = numOfPasses;
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
    square.dataset.numOfPasses = 0;
    container.appendChild(square);
  }
}

drawGrid(15);