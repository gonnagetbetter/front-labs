const menuOpen = document.getElementById("navMobOpen");
const menu = document.getElementById("navMob");
const menuClose = document.getElementById("navMobClose");

menuOpen.addEventListener("click", () => {
  menu.classList.add("menu__active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu__active");
});
