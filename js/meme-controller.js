"use strict";

var gCanvas;
var gCtx;
const gTouchEvs = ["touchstart", "touchmove", "touchend"];

function onInit() {
  gCanvas = document.getElementById("my-canvas");
  gCtx = gCanvas.getContext("2d");

  addListeners();
  renderSearchWords();
  renderGallery();
  renderStickers();
}

function onSetLang(lang) {
  setLang(lang);
  if (lang === "he") document.body.classList.add("rtl");
  else document.body.classList.remove("rtl");
  doTrans();
  renderMeme();
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
  // if (line.align === "right") return x - width;
  // else if (line.align === "left") return x;
  // else return x - width / 2;

  return line.align === "right"
    ? x - width
    : line.align === "left"
    ? x
    : x - width / 2;
}

function onRemoveSelect() {
  removeSelect();
  renderMeme();
}

function onDown(ev) {
  const pos = getEvPos(ev);
  var lineID = textClicked(pos);
  if (lineID) {
    setClickedSelected(lineID);
    setDrag(true);
  } else removeSelect();
  renderMeme();
  renderCurrentSettings();
}

// add focuser on text input
function textClicked(pos) {
  var currId = null;
  var { lines } = getMeme();
  lines.forEach((line) => {
    if (
      pos.y <= line.y &&
      pos.y >= line.y - line.size &&
      pos.x >= line.beginning &&
      pos.x <= line.end
    ) {
      currId = line.id;
      return;
    }
  });
  return currId;
}

function onUp() {
  setDrag(false);
}

function onMove(ev) {
  const meme = getMeme();
  if (meme.lines[meme.selectedLineIdx].isDrag) {
    const pos = getEvPos(ev);
    const dx = pos.x - meme.lines[meme.selectedLineIdx].x;
    const dy = pos.y - meme.lines[meme.selectedLineIdx].y;
    moveLine(dx, dy);
    renderMeme();
  }
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
