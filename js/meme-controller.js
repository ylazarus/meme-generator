"use strict";

var gCanvas;
var gCtx;

function onInit() {
  gCanvas = document.getElementById("my-canvas");
  gCtx = gCanvas.getContext("2d");
  renderMeme();
}

function renderMeme() {
  // var { img } = getCanvas()
  var img = new Image();
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    drawText("hello world", 250, 250);
  };
  img.src = "images/2.jpg";
}

function drawText(text, x, y) {
  gCtx.lineWidth = 1;
  gCtx.strokeStyle = "black";
  gCtx.fillStyle = "blue";
  gCtx.font = "50px Arial";
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}
