"use strict";

var gCanvas = document.getElementById("my-canvas");

var gImages = [
  {
    id: 1,
    url: "images/1.jpg",
    keywords: ["funny", "politics", "crazy", "angry"],
  },
  {
    id: 2,
    url: "images/2.jpg",
    keywords: ["funny", "animals", "cute", "sweet"],
  },
  {
    id: 3,
    url: "images/3.jpg",
    keywords: ["funny", "animals", "sweet", "babies"],
  },
  { id: 4, url: "images/4.jpg", keywords: ["funny", "animals", "cute"] },
  { id: 5, url: "images/5.jpg", keywords: ["funny", "babies", "angry"] },
  { id: 6, url: "images/6.jpg", keywords: ["funny", "crazy"] },
  { id: 7, url: "images/7.jpg", keywords: ["funny", "crazy", "babies"] },
  {
    id: 8,
    url: "images/8.jpg",
    keywords: ["funny", "crazy", "happy", "movies"],
  },
  { id: 9, url: "images/9.jpg", keywords: ["funny", "babies", "happy"] },
  { id: 10, url: "images/10.jpg", keywords: ["funny", "happy", "politics"] },
  { id: 11, url: "images/11.jpg", keywords: ["crazy", "sports", "angry"] },
  { id: 12, url: "images/12.jpg", keywords: ["funny", "you"] },
  { id: 13, url: "images/13.jpg", keywords: ["funny", "cheers", "happy"] },
  { id: 14, url: "images/14.jpg", keywords: ["angry", "intense", "movies"] },
  { id: 15, url: "images/15.jpg", keywords: ["angry", "you", "movies"] },
  { id: 16, url: "images/16.jpg", keywords: ["funny", "movies"] },
  { id: 17, url: "images/17.jpg", keywords: ["angry", "politics"] },
  { id: 18, url: "images/18.jpg", keywords: ["funny", "happy", "movies"] },
];

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [
    {
      txt: " ",
      size: 50,
      font: "Impact",
      align: "center",
      fill: "#ffffff",
      stroke: "black",
      y: 100,
    },
  ],
};

function addLine() {
  var newLine = {
    txt: " ",
    size: 50,
    font: "Impact",
    align: "center",
    fill: "#ffffff",
    stroke: "black",
    y: setY(),
  };
  gMeme.lines.push(newLine);
}

function removeCurrLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}

function makeLineIdxTheLastLine() {
  gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function setY() {
  if (!gMeme.lines.length) return 100;
  if (gMeme.lines.length === 1) return gCanvas.height - 100;
  if (gMeme.lines.length > 1) return gCanvas.height / 2;
}

function moveLineUp() {
  gMeme.lines[gMeme.selectedLineIdx].y -= 10;
}

function moveLineDown() {
  gMeme.lines[gMeme.selectedLineIdx].y += 10;
}

function updateTextSize(newTextSize) {
  gMeme.lines[gMeme.selectedLineIdx].size = newTextSize;
}

function updateColor(newColor) {
  gMeme.lines[gMeme.selectedLineIdx].fill = newColor;
}

function updateAlignment(direction) {
  gMeme.lines[gMeme.selectedLineIdx].align = direction;
}

function updateFont(newFont) {
  gMeme.lines[gMeme.selectedLineIdx].font = newFont;
}

function switchLine() {
  gMeme.selectedLineIdx === gMeme.lines.length - 1
    ? (gMeme.selectedLineIdx = 0)
    : gMeme.selectedLineIdx++;
}

function getTextForInput() {
  return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function getColorForInput() {
  return gMeme.lines[gMeme.selectedLineIdx].fill;
}

function getTextSizeForInput() {
  return gMeme.lines[gMeme.selectedLineIdx].size;
}

function getMeme() {
  return gMeme;
}

function getLines() {
  return gMeme.lines;
}

function setLineTxt(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function setImage(imageID) {
  gMeme.selectedImgId = imageID;
}

function getImages() {
  return gImages;
}
