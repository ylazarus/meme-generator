"use strict";

//add download and share
//highlight for selected?
//design
//drag and drop


var gCanvas 
var gCtx 

function onInit() {
    gCanvas = document.getElementById("my-canvas");
    gCtx = gCanvas.getContext("2d");

    addListeners()
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

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function onDown(){
    console.log('down');
}

function onUp(){
    console.log('up');

}

function onMove(){
    console.log('move');
    
}

function onAddText() {
  var elText = document.querySelector("input[name=text-input]");
  var text = elText.value;
  setLineTxt(text);
  renderMeme();
}

function onUpdateFont(newFont){
    updateFont(newFont)
    renderMeme()
}

function onUpdateTextSize(newSize) {
  updateTextSize(newSize);
  renderMeme();
}

function onUpdateColor(newColor) {
  updateColor(newColor);
  renderMeme();
}

function onSwitchLine() {
  switchLine();
  renderCurrentSettings();
}

function onMoveLineUp(){
    moveLineUp()
    renderMeme()
}

function onMoveLineDown(){
    moveLineDown()
    renderMeme()
}

function renderCurrentSettings() {
  var text = getTextForInput();
  var color = getColorForInput();
  var textSize = getTextSizeForInput();
  document.getElementById("text-input").value = text;
  document.getElementById("color").value = color;
  document.getElementById("size").value = textSize;
}

function onAddLine() {
  addLine();
  makeLineIdxTheLastLine(); // check order here
  renderCurrentSettings();
  renderMeme();
}

function onRemoveCurrLine() {
  removeCurrLine();
  var lines = getLines();
  console.log(lines);
  if (lines.length > 0) {
    makeLineIdxTheLastLine();
  } else {
    addLine();
  }
  renderCurrentSettings();
  renderMeme();
}

function onUpdateAlignment(direction) {
  updateAlignment(direction);
  renderMeme();
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
}

// function setX(line) {
//   if (line.align === "center") return gCanvas.width / 2;
//   else if (line.align === "left") return 20;
//   else return gCanvas.width - 20;
// }



// function drawRect(x, y, line) {
//     gCtx.beginPath()
//     gCtx.rect(x - 10, y - 10, line.width + 20, line.height + 20)
//     gCtx.fillStyle = 'orange'
//     gCtx.fillRect(x, y, 150, 150)
//     gCtx.strokeStyle = 'black'
//     gCtx.stroke()
//   }