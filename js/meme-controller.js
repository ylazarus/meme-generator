"use strict";

//get rid of rect before download
// fix why focus isn't working on click
//design
//drag and drop

var gCanvas;
var gCtx;
const gTouchEvs = ["touchstart", "touchmove", "touchend"];

function onInit() {
  gCanvas = document.getElementById("my-canvas");
  gCtx = gCanvas.getContext("2d");

  addListeners();
  renderGallery();
}

function renderMeme() {
  var meme = getMeme();
  var img = new Image();
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    meme.lines.forEach((line) => drawText(line));
  };
  img.src = `images/${meme.selectedImgId}.jpg`;
}

function drawText(line) {
  var x = line.x;
  var y = line.y;
  gCtx.strokeStyle = line.stroke;
  gCtx.fillStyle = line.fill;
  gCtx.font = `${line.size}px ${line.font}`;
  gCtx.textAlign = line.align;
  gCtx.fillText(line.txt, x, y);
  gCtx.strokeText(line.txt, x, y);

  if (line.isSelected) {
    drawRect(x, y, line);
  }
}

function drawRect(x, y, line) {
  var width = gCtx.measureText(line.txt).width;
  var height = +line.size;
  var beginningOfLine = setBeginningOfLine(x, width, line);
  updateBeginningEnd(beginningOfLine, width);
  gCtx.beginPath();
  gCtx.rect(
    beginningOfLine - 20,
    y - height,
    width + 40,
    height + height * 0.2
  );
  gCtx.strokeStyle = "black";
  gCtx.stroke();
}

function setBeginningOfLine(x, width, line) {
  if (line.align === "right") return x - width;
  else if (line.align === "left") return x;
  else return x - width / 2;
}

function onRemoveSelectForSaveUpload(){
    removeSelect()
    renderMeme()
}

function onDown(ev) {
  const pos = getEvPos(ev);
  var lineID = textClicked(pos);
  if (lineID) setClickedSelected(lineID);
  else removeSelect()
renderMeme();
renderCurrentSettings();
}

// add focuser on text input
function textClicked(pos) {
  var ID = null;
  var { lines } = getMeme();
  lines.forEach((line) => {
    if (
      pos.y <= line.y &&
      pos.y >= line.y - line.size &&
      pos.x >= line.beginning &&
      pos.x <= line.end
    ) {
      ID = line.id;
      return;
    }
  });
  return ID;
}

function onUp() {
//   console.log("up");
}

function onMove() {
//   console.log("move");
}

function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  };
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault();
    ev = ev.changedTouches[0];
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    };
  }
  return pos;
}
