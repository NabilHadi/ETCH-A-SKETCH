const container = document.querySelector("#container");

let numOfSquaresPerSide = 20;
let numOfSquares = numOfSquaresPerSide * numOfSquaresPerSide;
let squareflexPercentage = 100 / numOfSquaresPerSide;
console.log(squareflexPercentage);
for (let i = 0; i < numOfSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.textContent = i;
  square.style.flex = `0 0 ${squareflexPercentage}%`;
  square.addEventListener("mouseenter", handleMouseEnter);
  container.appendChild(square);
}

function handleMouseEnter(e) {
  e.target.style.backgroundColor = "black";
}