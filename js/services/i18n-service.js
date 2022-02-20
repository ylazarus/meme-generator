"use strict";

var gCurrLang = "en";

var gTrans = {
  'memes': {
    en: "Memes",
    he: "ממים",
  },
  'about': {
    en: "About",
    he: "אודות",
  },
  'keywords-tag': {
    en: "Search By Keyword:",
    he: "חיפוש לפני נושה באנגלית",
  },
  'flexible': {
    en: "I'm flexible",
    he: "תבחרו בשבילי",
  },
  'upload': {
    en: "Upload Image",
    he: "העלה את התמונה",
  },
  'download': {
    en: "Download as jpeg",
    he: "הוריד את התמונה",
  },
  'about-app': {
    en: "About this App",
    he: "עודות האפליקציה",
  },
  'about-close': {
    en: "Close",
    he: "סגור ",
  },
  'add-text-placeholder': {
    en: "Enter Text Here",
    he: "להכניס טקסט כאן",
  },
  'about-p1': {
    en: "Using this app is simple: click on a photo, add and style a funny text and then upload or download and share!",
    he: "השימוש באפליקציה הזאת פשוטה: להקליק על תמונה, להוסיף מילים מצחיקות ואז לשמור ולשטף",
  },
  'about-p2': {
    en: "This app was created by Yoni Lazarus as a project for Coding Academy",
    he: "אפליקציה זו נוצרה על ידי יוני לזרוס כפרוייקט לקודינג אקאדמי",
  },
};


function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach((el) => {
        var transKey = el.dataset.trans
        var txt = _getTrans(transKey)
        el.innerText = txt
        if(el.nodeName==='INPUT'){
          el.placeholder=txt
        }
    })
}

function _getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}


function setLang(language){
    gCurrLang = language
}
