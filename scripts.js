const container = document.querySelector(".container");
const randomColor = document.querySelector(".btn-1");
const colorPicker = document.querySelector("#colorPick");
const eraseColor = document.querySelector(".btn-2");

let currentMode = colorPicker.value;

for (let i = 1; i <= 16; i++) {
  const divOuter = document.createElement("div");
  divOuter.classList.add("row");
  for (let j = 1; j <= 16; j++) {
    const divInner = document.createElement("div");
    divInner.classList.add("cell");
    divOuter.appendChild(divInner);
  }
  container.appendChild(divOuter);
}

const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
  row.style.width = "40vw";
  row.style.height = "30px";
  row.style.display = "flex";
});

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.style.border = "none";
  cell.style.borderRadius = "4px"
  cell.style.transition ="background-color 0.3s, transform 0.3s"
  cell.style.boxShadow = " 0 4px 6px rgba(0, 0, 0, 0.1)"
  cell.style.width = "inherit";
  cell.style.height = "inherit";
  cell.style.flexGrow = "1";
  cell.style.cursor = "pointer";
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColor.addEventListener("click", () => (currentMode = "random"));
colorPicker.addEventListener("input", () => (currentMode = colorPicker.value));
eraseColor.addEventListener("click", eraseField);

function paintCell(event) {
  if (currentMode === "random") {
    event.target.style.backgroundColor = getRandomColor();
  } else  {
    event.target.style.backgroundColor = colorPicker.value;
  }
}

function eraseField() {
  const cells = container.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.style.backgroundColor = "bisque"));
}

container.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("cell")) {
    paintCell(event);
  }
});
