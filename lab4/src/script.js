"use strict";

const firstElement = document.getElementById("firstElement");
const secondElement = document.querySelector("#secondElement");

firstElement.onclick = () => {
  const className = firstElement.className;
  if (className === "fAfter") {
    firstElement.className = "";
  } else firstElement.className = "fAfter";
};

secondElement.onclick = () => {
  const className = secondElement.className;
  if (className === "sAfter") {
    secondElement.className = "";
  } else secondElement.className = "sAfter";
};

const addImgButton = document.getElementById("addImg");
const removeImgButton = document.getElementById("removeImg");
const upscaleImgButton = document.getElementById("upscaleImg");
const downscaleImgButton = document.getElementById("downscaleImg");

addImgButton.onclick = () => {
  const images = document.getElementById("images");
  const nImg = document.createElement("img");
  nImg.src = "https://github.com/gonnagetbetter/front-labs/blob/main/lab4/images/odesa-vid-zverhu-690x450.jpg?raw=true";
  nImg.alt = "Odesa";
  nImg.id = "nImg";
  if (images.children.length === 1) {
    images.appendChild(nImg);
  }
};

removeImgButton.onclick = () => {
  const nImg = document.getElementById("nImg");
  if (nImg) {
    nImg.remove();
  }
};

upscaleImgButton.onclick = () => {
  const nImg = document.getElementById("nImg");
  if (nImg) {
    nImg.style.height = "125%";
    nImg.style.width = "125%";
  }
};

downscaleImgButton.onclick = () => {
  const nImg = document.getElementById("nImg");
  if (nImg) {
    nImg.style.height = "50%";
    nImg.style.width = "50%";
  }
};
