function Creation() {
  this.homePage = document.getElementById("homePage");
  // font
  this.toolbarFont = document.getElementById("toolbarFont");
  this.fontList = document.getElementById("fontList");
  this.toolbarFontFlag = false;
  // skin color
  this.toolbarSkincolor = document.getElementById("toolbarSkincolor");
  this.skincolorPicker = document.getElementById("skincolorPicker");
  // text color
  this.colorSelector = document.getElementById("colorSelector");
  this.colorInitState = document.getElementById("colorInitState");
  this.colorSelectorFlag = false;
  // text length
  this.letterAmount = document.getElementById("letterAmount");
  // creation panel
  this.creationPanelSkin = document.getElementById("creationPanelSkin");
  this.creationPanelTattoo = document.getElementById("creationPanelTattoo");
  // show the work
  // this.displayWork = document.getElementById("displayWork");
  // this.displayWorkContent = document.getElementById("displayWorkContent");
  // this.displayWorkClose = document.getElementById("displayWorkClose");
  // this.displayButton = document.getElementById("displayButton");
}

Creation.prototype = {
  init: function() {
    if(this.toolbarFontFlag == false) {
      this.toolbarFont.style.fontSize = "1rem";
    }
    // open font list
    this.toolbarFont.addEventListener("click", this.openFontList.bind(Creation));
    // set font handler
    for(var i = 0 ; i < this.fontList.children.length ; i++) {
      document.getElementById("font" + i).addEventListener("click", this.selectFont.bind(Creation));
    }

    // open skin color picker
    this.toolbarSkincolor.addEventListener("click", this.openSkincolorPicker.bind(Creation));
    // set skin color handler
    for(var i = 0 ; i < this.skincolorPicker.children.length ; i++) {
      document.getElementById("color" + i).addEventListener("click", this.selectSkincolor.bind(Creation));
    }
    // check letter amount
    window.addEventListener("keydown", this.countingLetters.bind(Creation));
    // set display listener
    // this.displayButton.addEventListener("click", this.showTheWork.bind(Creation));
    // close displayWork
    // this.displayWorkClose.addEventListener("click", this.closeTheWork.bind(Creation));
    // clear notification animation
    this.letterAmount.addEventListener("animationend", function(e) {
      if(e.animationName === "notification") {
        work.letterAmount.style.animation = "";
      }
    });
    // set focus listener on creationPanelTattoo
    this.creationPanelTattoo.addEventListener("focus", this.setTextFont.bind(Creation));
  },
  openFontList: function() {
    work.fontList.style.top = "0px";
  },
  closeFontList: function() {
    work.fontList.style.top = "-60px";
  },
  openSkincolorPicker: function() {
    work.skincolorPicker.style.top = "0px";
  },
  closeSkincolorPicker: function() {
    work.skincolorPicker.style.top = "-60px";
  },
  selectFont: function(e) {
    work.toolbarFontFlag = true;
    work.toolbarFont.style.fontFamily = e.target.style.fontFamily;
    work.toolbarFont.style.fontSize = "2.5rem";
    work.closeFontList();
    work.setTextFont();
  },
  setTextFont: function() {
    work.creationPanelTattoo.style.fontFamily = work.toolbarFont.style.fontFamily;
  },
  selectSkincolor: function(e) {
    // set skin color on body, html, skincolor, creationPanelSkin, displayWork
    work.toolbarSkincolor.style.backgroundColor = e.target.style.backgroundColor;
    work.homePage.style.backgroundColor = e.target.style.backgroundColor;
    work.creationPanelSkin.style.backgroundColor = e.target.style.backgroundColor;
    // work.displayWork.style.backgroundColor = e.target.style.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = e.target.style.backgroundColor;

    work.closeSkincolorPicker();
  },
  updateWork: function() {
    work.displayWork.innerHTML = work.creationPanelTattoo.value;
    work.displayWork.style.color = work.creationPanelTattoo.style.color;
    // work.countingLetters();
  },
  countingLetters: function() {
    if(work.letterAmount.value > 0) {
      work.letterAmount.value = (25 - (work.creationPanelTattoo.value.length));
    }
    else {
      work.letterAmount.style.animation = "notification 0.2s ease forwards";
    }
  },
  // showTheWork: function() {
  //   work.displayWorkContent.value = work.creationPanelTattoo.value;
  //   work.displayWorkContent.style.color = work.creationPanelTattoo.style.color;
  //   work.displayWork.style.visibility = "visible";
  //   work.displayWork.style.zIndex = 5;
  // },
  // closeTheWork: function() {
  //   work.displayWork.style.visibility = "hidden";
  //   work.displayWork.style.zIndex = -1;
  // }
};

var work = new Creation();
work.init();
