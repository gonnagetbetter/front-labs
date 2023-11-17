"use strict";

const cells = document.getElementsByTagName("th");
const colorBar = document.getElementById("colorBar");

for (let cell of cells) {
  cell.onclick = () => {
    let selectedColor = colorBar.value;
    cell.style.backgroundColor = selectedColor;
  };
}

const rndCell = document.getElementById("rndCell");
rndCell.addEventListener("mouseover", () => {
  rndCell.style.backgroundColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
});

rndCell.addEventListener("dblclick", () => {
  let table = document.getElementById("table");
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      let selectedColor = colorBar.value;
      table.rows[i].cells[j].style.backgroundColor = selectedColor;
      if (i == 0 && j == 4) table.rows[i].cells[j].style.backgroundColor = "white";
    }
  }
});
