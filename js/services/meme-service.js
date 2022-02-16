"use strict";

var gImages = [
    {id: 1, url: 'images/1.jpg', keywords: ['funny', 'politics']},
    {id: 2, url: 'images/2.jpg', keywords: ['funny', 'animals']},
]

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}






function getMeme() {
  return gMeme;
}

function setLineTxt(text){
   gMeme.lines[0].txt = text
}

function setImage(imageID){
    gMeme.selectedImgId = imageID
}

function getImages(){
    return gImages
}