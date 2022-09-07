const container = document.querySelector(".container");
const rowsArray = [];
const squaresArray = [];

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
      square.classList.add("square");

      square.addEventListener("mouseenter", (e) => {
        e.target.style["background-color"] = "black";
      });

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
