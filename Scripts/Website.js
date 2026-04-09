function changebgcolor(color) {
  const divColor = window.getComputedStyle(color).backgroundColor;
  document.body.style.backgroundColor = divColor;
}

function pictureChangeOnClick(small) {
  let fullimg = document.getElementById("imagebox");
  fullimg.src = small.src;
}

let buttonUnhide = document.getElementById("topbutton");
window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    buttonUnhide.style.display = "block";
  } else {
    buttonUnhide.style.display = "none";
  }
}

function topfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
