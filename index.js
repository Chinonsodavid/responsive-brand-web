let icon = document.getElementById("icon");
let nav = document.getElementById("navlist");
let icon2 = document.getElementById("filter");
let naver = document.getElementById("navlister");
let closed = document.getElementById("close");

icon.onclick = () => {
  nav.classList.add("open");
};
closed.onclick = () => {
  nav.classList.remove("open");
};

// icon2.onclick = () => {
//   naver.classList.toggle("opens");
// };

const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
