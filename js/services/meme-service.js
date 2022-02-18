"use strict";

const gMemesSentences = [
  "I never eat falafel",
  "DOMS DOMS EVERYWHERE",
  "Stop Using i in for loops",
  "Armed in knowledge",
  'Js error "Unexpected String"',
  "One does not simply write js",
  "I`m a simple man i see vanilla JS, i click like!",
  "JS, HTML,CSS?? Even my momma can do that",
  "May the force be with you",
  "I know JS",
  "JS Where everything is made up and the rules dont matter",
  "Not sure if im good at programming or good at googling",
  "But if we could",
  "JS what is this?",
  "Write hello world , add to cv 7 years experienced",
];

var gCanvas = document.getElementById("my-canvas");

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [
    {
      id: makeID(5),
      txt: "",
      size: 50,
      font: "Impact",
      align: "center",
      fill: "#ffffff",
      stroke: "black",
      y: 100,
      x: gCanvas.width / 2,
      beginning: gCanvas.width / 2,
      end: gCanvas.width / 2,
      isDrag: false,
      isSelected: true,
    },
  ],
};

function addLine() {
  var newLine = {
    id: makeID(5),
    txt: "",
    size: 50,
    font: "Impact",
    align: "center",
    fill: "#ffffff",
    stroke: "black",
    y: _setY(),
    x: gCanvas.width / 2,
    beginning: gCanvas.width / 2,
    end: gCanvas.width / 2,
    isDrag: false,
    isSelected: true,
  };
  gMeme.lines.push(newLine);
}

function doImFlexible() {
  gMeme.lines[gMeme.lines.length - 1].txt = _getTextForFlexible();
  gMeme.lines[gMeme.lines.length - 1].size = getRandomIntInclusive(15, 40);
  gMeme.lines[gMeme.lines.length - 1].fill = getRandomColor();
  gMeme.lines[gMeme.lines.length - 1].stroke = getRandomColor();
}

function _getTextForFlexible() {
  return gMemesSentences[getRandomIntInclusive(0, gMemesSentences.length - 1)];
}

function removeCurrLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}

function updateBeginningEnd(beginning, width) {
  gMeme.lines[gMeme.selectedLineIdx].beginning = beginning;
  gMeme.lines[gMeme.selectedLineIdx].end = beginning + width;
}

function setClickedSelected(lineID) {
  for (var i = 0; i < gMeme.lines.length; i++) {
    if (gMeme.lines[i].id === lineID) {
      gMeme.lines[i].isSelected = true;
      gMeme.selectedLineIdx = i;
    } else {
      gMeme.lines[i].isSelected = false;
    }
  }
}

function removeSelect() {
  gMeme.lines.forEach((line) => (line.isSelected = false));
}


function switchLine() {
  _setTextSelected(false);
  gMeme.selectedLineIdx === gMeme.lines.length - 1
    ? (gMeme.selectedLineIdx = 0)
    : gMeme.selectedLineIdx++;
  _setTextSelected(true);
}

function makeLineIdxTheLastLine() {
  if (gMeme.lines[gMeme.selectedLineIdx]) _setTextSelected(false);
  gMeme.selectedLineIdx = gMeme.lines.length - 1;
  _setTextSelected(true);
}

function _setTextSelected(value) {
  gMeme.lines[gMeme.selectedLineIdx].isSelected = value;
}

function setX() {
  var align = gMeme.lines[gMeme.selectedLineIdx].align;
  var x;
  if (align === "right") x = gCanvas.width - 20;
  else if (align === "left") x = 20;
  else x = gCanvas.width / 2;
  gMeme.lines[gMeme.selectedLineIdx].x = x;
}

function _setY() {
  if (!gMeme.lines.length) return 100;
  if (gMeme.lines.length === 1) return gCanvas.height - 100;
  if (gMeme.lines.length > 1) return gCanvas.height / 2;
}

function setDrag(val){
  gMeme.lines[gMeme.selectedLineIdx].isDrag = val
}

function moveLine(dx, dy) {
  gMeme.lines[gMeme.selectedLineIdx].x += dx
  gMeme.lines[gMeme.selectedLineIdx].y += dy

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
  setX();
}

function updateFont(newFont) {
  gMeme.lines[gMeme.selectedLineIdx].font = newFont;
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
