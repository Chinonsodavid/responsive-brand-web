
let nav = document.getElementById("navlist");

const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

let mine = document.getElementById("btn");
mine.onclick = () => {
  nav.classList.toggle("open");
  document.querySelector(".middle").classList.toggle("openmid");
  document.querySelector(".bottom").classList.toggle("openbot");
};
