const container = document.querySelector(".container");
const rowsArray = [];
const squaresArray = [];

let isChangeOnHover = true;

function mouseHoverListener(e) {
  if (!isChangeOnHover && e.buttons != 1 && e.buttons != 3) {
    return;
  }
  const wearPrecentage = Number(e.target.getAttribute("data-wear"));
  function getRandNum(max) {
    return Math.floor(Math.random() * max) - wearPrecentage;
  }

  if (wearPrecentage < 256) {
    e.target.style["background-color"] = `rgba(${getRandNum(256)},${getRandNum(
      256
    )},${getRandNum(256)})`;
    e.target.setAttribute("data-wear", wearPrecentage + 26);
  }
}

function createGrid(size) {
  squaresArray.forEach((square) => {
    square.remove();
  });
  rowsArray.forEach((row) => {
    row.remove();
  });

  let index = 0;
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.setAttribute("data-index", index);
      square.setAttribute("data-wear", 0);
      square.classList.add("square");

      square.addEventListener("mouseenter", mouseHoverListener);
      square.addEventListener("mousedown", mouseHoverListener);

      row.appendChild(square);
      squaresArray.push(square);
      index++;
    }
    container.appendChild(row);
    rowsArray.push(row);
  }
}

createGrid(10);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
  squaresArray.forEach((sqaure) => {
    sqaure.style["background-color"] = "transparent";
    sqaure.setAttribute("data-wear", 0);
  });
});

const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener("click", (e) => {
  const size = Number(prompt("Enter number of squares per side (max is 100)"));
  if (Number.isNaN(size)) return;
  if (size > 100) {
    alert("Max size is 100!");
    return;
  } else if (size === 0) {
    alert("Minimum is 1");
    return;
  }
  createGrid(size);
});

const hoverInput = document.querySelector("#hover-input");
const clickInput = document.querySelector("#click-input");

function onInputClick(e) {
  if (e.target === hoverInput) {
    isChangeOnHover = true;
  } else if (e.target === clickInput) {
    isChangeOnHover = false;
  }
}

hoverInput.addEventListener("click", onInputClick);
clickInput.addEventListener("click", onInputClick);
