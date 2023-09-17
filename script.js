const container = document.querySelector(".container");
const newGridBtn = document.querySelector("#new-grid-btn");
const onHoverInput = document.querySelector("#on_hover_input");
const onClickInput = document.querySelector("#on_click_input");
let drawOnHover = true;
let size = 20;

function onRadiInputChange(e) {
  if (e.target.checked) {
    if (e.target.value === "hover") {
      drawOnHover = true;
    } else if (e.target.value === "click") {
      drawOnHover = false;
    }
  }
}

function getRandomRgbValue() {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

onClickInput.addEventListener("change", onRadiInputChange);
onHoverInput.addEventListener("change", onRadiInputChange);

function hoverHandler(e) {
  if (drawOnHover || e.buttons == 1 || e.buttons == 3) {
    e.target.style.background = getRandomRgbValue();
    let newLightness = Number(e.target.dataset.light) - 10;
    if (newLightness > -10) {
      e.target.style.filter = `brightness(${newLightness}%)`;
      e.target.dataset.light = newLightness;
    }
  }
}

function squareMouseDownHandler(e) {
  e.preventDefault();
  if (!drawOnHover) {
    e.target.style.background = getRandomRgbValue();
    let newLightness = Number(e.target.dataset.light) - 10;
    if (newLightness > -10) {
      e.target.style.filter = `brightness(${newLightness}%)`;
      e.target.dataset.light = newLightness;
    }
  }
  return false;
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
    square.setAttribute("draggable", "false");
    square.addEventListener("mouseover", hoverHandler);
    square.addEventListener("mousedown", squareMouseDownHandler);
    square.addEventListener("dragstart", () => false);
    square.setAttribute("data-light", "100");
    container.appendChild(square);
  }
}

drawGrid();

newGridBtn.addEventListener("click", newGridBtnClickHandler);
