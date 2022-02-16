"use strict";

function onInit() {
  renderGallery();
}

function renderGallery() {
  const images = getImages();
  const htmls = images.map((image) => {
    return `<img src="images/${image.id}.jpg" alt="" onclick="onImgSelect('${image.id}')">`;
  });
  console.log(htmls);
  document.querySelector(".meme-selector-container").innerHTML = htmls.join("");
}

function onImgSelect(imgID) {
  setImage(imgID);
  renderMeme();
}