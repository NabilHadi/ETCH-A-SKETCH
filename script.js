const container = document.querySelector(".container");
const newGridBtn = document.querySelector("#new-grid-btn");
let size = 20;

function hoverHandler(e) {
  e.target.classList.add("hovered");
}

function newGridBtnClickHandler(e) {
  let newSize = Number(prompt("Enter new grid size (max is 100)"));
  while (newSize < 0 || newSize > 100) {
    newSize = Number(prompt("Please enter valid grid size (max is 100)"));
  }

  size = newSize;
  drawGrid();
}

function drawGrid() {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.setAttribute("data-index", i);
    square.classList.add("square");
    square.style.width = `${400 / size}px`;
    square.addEventListener("mouseover", hoverHandler);
    container.appendChild(square);
  }
}

drawGrid();

newGridBtn.addEventListener("click", newGridBtnClickHandler);
