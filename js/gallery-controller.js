"use strict";



function renderGallery() {
  const images = getImages();
  const htmls = images.map((image) => {
    return `<img src="images/${image.id}.jpg" alt="" onclick="onImgSelect('${image.id}')">`;
  });
  document.querySelector(".meme-selector-container").innerHTML = htmls.join("");
}

function onImgSelect(imgID) {
  setImage(imgID);
  renderMeme();
}
