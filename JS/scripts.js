// Smoothly move to top of page
const rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({ top: 0, behavior: "smooth" })
}

// 'Move to top of page' button fades in when user scrolls down
var topBtn = document.getElementById("scrollToTopBtn")

window.onscroll = function() { 
  scrollFunction();
  scrollFunction2();
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || rootElement.scrollTop > 500) {
    topBtn.style.opacity = "1"
    topBtn.style.bottom = "50px"
  } else {
    topBtn.style.opacity = "0"
    topBtn.style.bottom = "-50px"
  }
}

// Close navbar dropdown menu on scrolling down the page
function scrollFunction2() {
  if (document.body.scrollTop > 0 || rootElement.scrollTop > 0) {
    document.getElementById("topMenu").style.height = "0px";
    document.getElementById("topMenu").style.paddingTop = "0px";
  }
}

// Toggle navigation bar dropdown menu on/off by clicking on any part of it
function toggleNav() {
  var topMenu = document.getElementById("topMenu");
    if (topMenu.style.height == "0px") {
      topMenu.style.height = "200px";
      topMenu.style.paddingTop = "60px";
    } else {
      topMenu.style.height = "0px";
      topMenu.style.paddingTop = "0px";
    }
  }

// Close navbar dropdown menu on clicking the 'X'
function closeNav() {
  document.getElementById("topMenu").style.height = "0px";
  document.getElementById("topMenu").style.paddingTop = "0px";
}