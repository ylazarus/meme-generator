"use strict";

var gCanvas = document.getElementById("my-canvas");
var gCtx = gCanvas.getContext("2d");

function renderMeme() {
  const meme = getMeme();
  console.log(meme.lines[0].txt);
  // var { img } = getCanvas()
  var img = new Image();
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    drawText(meme.lines[0].txt, 50, 50);
  };
  img.src = `images/${meme.selectedImgId}.jpg`;
}

function onAddText() {
  var elText = document.querySelector("input[name=text-input]");
  var text = elText.value;
  setLineTxt(text);
  document.getElementById("text-input").value = "";
  renderMeme();
}

function drawText(text, x, y) {
  gCtx.lineWidth = 1;
  gCtx.strokeStyle = "black";
  gCtx.fillStyle = "blue";
  gCtx.font = "50px Arial";
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}
