"use strict";

const STORAGE_KEY = "memesDB";
const gSavedMemes = loadFromStorage(STORAGE_KEY)
  ? loadFromStorage(STORAGE_KEY)
  : [];

function onUploadImg() {
  onRemoveSelectForSaveUpload();
  setTimeout(uploadImg, 100)
  // uploadImg()
}

function downloadImg(elLink) {
  onRemoveSelectForSaveUpload();
  var imgContent = gCanvas.toDataURL("image/jpeg");
  var imgForStorage = imgContent.replace(/^data:image\/(png|jpg);base64,/, "");
  gSavedMemes.push(imgForStorage);
  saveToStorage(STORAGE_KEY, gSavedMemes);
  elLink.href = imgContent;
}

function toggleAboutModal() {
  document.querySelector(".about-modal").classList.toggle("modal-open");
}

function toggleStickersModal(){
  document.querySelector(".stickers-modal").classList.toggle("modal-open");
}

function toggleMemesModal() {
  document.querySelector(".memes-modal").classList.toggle("modal-open");
  renderStickers()
}

function onOpenMemesModal() {
  document.querySelector(".memes-modal").classList.toggle("modal-open");
  renderModal();
}
// start here sat nite
function renderStickers(){
  const stickers = ['😀','♥','🤬','😎','✌','😘','💀','😢','🤦','🍺','🌶','🍕','🚗','🎈','🎩']
  const htmls = stickers.map((sticker) => {
    return `<div class="sticker" 
    onclick="onStickerSelect('${sticker}')">${sticker}</div>`;
  });
  document.querySelector(".stickers-container").innerHTML = htmls.join("");
}

function renderModal() {
  const memes = loadFromStorage(STORAGE_KEY);
  document.querySelector(".about-modal").classList.toggle("modal-open");

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
