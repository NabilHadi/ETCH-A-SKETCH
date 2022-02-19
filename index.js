const container = document.querySelector("#main-container");
const resetBtn = document.querySelector("#resetBtn");



function drawGrid(numOfS) {
  for (let i = 0; i < numOfS; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("grid-row");
    container.appendChild(rowDiv);
    for (let j = 0; j < numOfS; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("grid-item");
      rowDiv.appendChild(columnDiv);
    }
  }
}



container.addEventListener("mouseover", (e) => {
  if (e.target === container) return;
  if (!e.target.darken) e.target.darken = 0;
  e.target.darken += 25;
  e.target.style["background-color"] = `rgb(${Math.floor(Math.random() * 255) - e.target.darken},${Math.floor(Math.random() * 255) - e.target.darken},${Math.floor(Math.random() * 255) - e.target.darken})`;
});

resetBtn.addEventListener("click", () => {
  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  container.textContent = "";

  let userInput = prompt("Enter number of sqaures per side");
  console.log(userInput);
  let numOfSquares = parseInt(userInput);

  while (!Number.isInteger(numOfSquares) || numOfSquares < 0 ||
    numOfSquares > 100) {
    if (userInput === "quit") break;

    console.log("is not number", userInput);
    userInput = prompt("Please Enter a correct number of sqaures per side\n" +
      "or enter quit");
    numOfSquares = parseInt(userInput);
  }
  console.log("is number", userInput);
  drawGrid(userInput);
});

drawGrid(16);

