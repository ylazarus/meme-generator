"use strict";

var gKeywords = {
  funny: 4,
  babies: 2,
  sports: 0,
  cheers: 1,
  happy: 5,
  politics: 0,
  crazy: 3,
  angry: 2,
  movies: 0,
  animals: 0
}


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

function renderSearchWords(){
  var keys = Object.keys(gKeywords)
  var vals = Object.values(gKeywords)
  var html = ''
    for (let i = 0; i < keys.length; i++){
      html += `<div class="click-word" onclick="clickedWordForFilter('${keys[i]}')" 
    style="font-size:${vals[i]}em">${keys[i]}</div>`
    }
 
  document.querySelector(".clickable-search").innerHTML = html
}

function renderGallery() {
  const images = getImages();
  render(images)
}

function render(imgs){
  const htmls = imgs.map((image) => {
    return `<div class="card"><img src="images/${image.id}.jpg" alt="" 
    onclick="onImgSelect('${image.id}')"></div>`;
  });
  document.querySelector(".meme-selector-container").innerHTML = htmls.join("");
}

function clickedWordForFilter(word){
  document.getElementById("keyword").value = word;
  renderFilteredImages()
}

function renderFilteredImages(){
  const images = getImages()
  var elKeyword = document.querySelector("input[name=keyword]")
  var keyword = elKeyword.value
  gKeywords[keyword]++
  renderSearchWords()
  const filteredImages = images.filter(image => image.keywords.includes(keyword))
  if (filteredImages.length === 0) {
    renderGallery() 
    return
  }
  render(filteredImages)
}

function onImFlexible() {
  setImage(getRandomIntInclusive(1, gImages.length));
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".meme-editor-container").style.display = "flex";
  document.querySelector(".canvas-container").style.display = "block";
  doImFlexible();
  const lucky = getRandomIntInclusive(0, 1);
  if (lucky) {
    addLine();
    doImFlexible();
  }
  renderMeme();
  renderCurrentSettings();
}

function onImgSelect(imgID) {
  setImage(imgID);
  document.querySelector(".gallery").style.display = "none";
  document.querySelector(".meme-editor-container").style.display = "flex";
  document.querySelector(".canvas-container").style.display = "block";
  renderMeme();
  renderCurrentSettings();
}

function onResetPage() {
  location.reload();
}
