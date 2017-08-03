function Creation() {
  this.homePage = document.getElementById("homePage");
  // skin color
  this.skincolor = document.getElementById("skincolor");
  this.skincolorPicker = document.getElementById("skincolorPicker");
  // text color
  this.colorSelector = document.getElementById("colorSelector");
  // text length
  this.letterAmount = document.getElementById("letterAmount");
  // creation panel
  this.creationPanelSkin = document.getElementById("creationPanelSkin");
  this.creationPanelTattoo = document.getElementById("creationPanelTattoo");
  // show the work
  this.displayWork = document.getElementById("displayWork");
  this.displayWorkContent = document.getElementById("displayWorkContent");
  this.displayWorkClose = document.getElementById("displayWorkClose");
  this.displayButton = document.getElementById("displayButton");
}

Creation.prototype = {
  init: function() {
    // open skin color picker
    this.skincolor.addEventListener("click", this.openSkincolorPicker.bind(Creation));
    // set skin color handler
    for(var i = 0 ; i < this.skincolorPicker.children.length ; i++) {
      document.getElementById("color" + i).addEventListener("click", this.selectSkincolor.bind(Creation));
    }
    // check letter amount
    window.addEventListener("keydown", this.countingLetters.bind(Creation));
    // set display listener
    this.displayButton.addEventListener("click", this.showTheWork.bind(Creation));
    // close displayWork
    this.displayWorkClose.addEventListener("click", this.closeTheWork.bind(Creation));
    // clear notification animation
    this.letterAmount.addEventListener("animationend", function(e) {
      if(e.animationName === "notification") {
        work.letterAmount.style.animation = "";
      }
    });
  },
  openSkincolorPicker: function() {
    work.skincolorPicker.style.transform = "scale(1)";
    work.skincolorPicker.style.display = "flex";
  },
  closeSkincolorPicker: function() {
    if(work.skincolorPicker.style.transform == "scale(1)") {
      work.skincolorPicker.style.transform = "scale(0)";
    }
  },
  selectSkincolor: function(e) {
    // set skin color on body, html, skincolor, creationPanelSkin, displayWork
    work.skincolor.style.backgroundColor = e.target.style.backgroundColor;
    work.homePage.style.backgroundColor = e.target.style.backgroundColor;
    work.creationPanelSkin.style.backgroundColor = e.target.style.backgroundColor;
    work.displayWork.style.backgroundColor = e.target.style.backgroundColor;
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
      work.letterAmount.value = (20 - (work.creationPanelTattoo.value.length));
    }
    else {
      work.letterAmount.style.animation = "notification 0.2s ease forwards";
    }
    // work.letterAmount.value = (20 - (work.creationPanelTattoo.value.length));
  },
  showTheWork: function() {
    work.displayWorkContent.value = work.creationPanelTattoo.value;
    work.displayWorkContent.style.color = work.creationPanelTattoo.style.color;
    work.displayWork.style.visibility = "visible";
    work.displayWork.style.zIndex = 5;
  },
  closeTheWork: function() {
    work.displayWork.style.visibility = "hidden";
    work.displayWork.style.zIndex = -1;
  }
};

var work = new Creation();
work.init();
