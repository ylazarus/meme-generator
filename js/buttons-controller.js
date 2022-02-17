"use strict";

function onUploadImg(){
  onRemoveSelectForSaveUpload()
  uploadImg()
}

function downloadImg(elLink) {
  onRemoveSelectForSaveUpload()
  var imgContent = gCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
}

function onAddText() {
  var elText = document.querySelector("input[name=text-input]");
  var text = elText.value;
  setLineTxt(text);
  renderMeme();
}

function onUpdateFont(newFont) {
  updateFont(newFont);
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

function onSwitchLine() {
  switchLine();
  renderCurrentSettings();
  renderMeme();
}

function onMoveLineUp() {
  moveLineUp();
  renderMeme();
}

function onMoveLineDown() {
  moveLineDown();
  renderMeme();
}

function renderCurrentSettings() {
  var text = getTextForInput();
  var color = getColorForInput();
  var textSize = getTextSizeForInput();
  document.getElementById("text-input").value = text;
  document.getElementById("text-input").focus();
  document.getElementById("color").value = color;
  document.getElementById("size").value = textSize;
}

function onAddLine() {
  addLine();
  makeLineIdxTheLastLine();
  renderCurrentSettings();
  renderMeme();
}

function onRemoveCurrLine() {
  removeCurrLine();
  var lines = getLines();
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
