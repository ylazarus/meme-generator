"use strict";

var gCanvas = document.getElementById("my-canvas");
var gCtx = gCanvas.getContext("2d");

function renderMeme() {
  var meme = getMeme();
  var img = new Image();
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    meme.lines.forEach(line => drawText(line));
  };
  img.src = `images/${meme.selectedImgId}.jpg`;
}

function onAddText() {
  var elText = document.querySelector("input[name=text-input]");
  var text = elText.value;
  setLineTxt(text);
  renderMeme();
}

function onUpdateTextSize(newSize) {
    updateTextSize(newSize);
    renderMeme();
}

function onUpdateColor(newColor) {
    updateColor(newColor);
    renderMeme();
}

function onSwitchLine(){
    switchLine()
    var text = getTextForInput()
    var color = getColorForInput()
    var textSize= getTextSizeForInput()
    document.getElementById("text-input").value = text;
    document.getElementById("color").value = color;
    document.getElementById("size").value = textSize;
}

function onAddLine(){
    addLine()
    makeLineIdxTheNewLine() // check order here
    renderMeme()
}

function drawText(line) {
  var text = line.txt;
  console.log(text);
  var x = getX(line)
  var y = line.y; // maybe change later to fx that determines from service
  // based on how many lines there are, otherwise set on create
//   var font = 
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = line.stroke;
  gCtx.fillStyle = line.fill;
  gCtx.font = `${line.size}px ${line.font}`;
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}

function getX(line){
    // if currLine.align === 
    var text = line.txt
    if (gCtx.measureText(text).width >= gCanvas.width) return 20
    else return gCanvas.width / 2 - gCtx.measureText(text).width / 2;
}


