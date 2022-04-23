// Get elements from the DOM

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Toogle open/close menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
