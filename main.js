const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const initialTheme = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

let currentThemeSetting = initialTheme;

document.querySelector("html").setAttribute("data-theme", initialTheme);

const buttons = document.querySelectorAll(".dark-mode-switch");

const sunSvgPath = "/img/sun.svg";
const moonSvgPath = "/img/moon.svg";

buttons.forEach((button) => {
  const initialIconSrc = initialTheme === "dark" ? moonSvgPath : sunSvgPath;
  button.querySelector("img").src = initialIconSrc;
  button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
    const newSrc = newTheme === "dark" ? moonSvgPath : sunSvgPath;
    button.querySelector("img").src = newSrc;
  });
});

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}
function toggleDropdown() {
  var dropdownContent = document.getElementById("userDropdownContent");
  dropdownContent.classList.toggle("show");
}

function toggleDropdownCat() {
  var dropdownContentCat = document.getElementById("categoryDropdownContent");
  dropdownContentCat.classList.toggle("showCat");
}

window.addEventListener("click", function (event) {
  var userDrop = document.getElementById("userDropdown");
  var dropdownContent = document.getElementById("userDropdownContent");
  var catDrop = document.getElementById("categoryDropdown");
  var dropdownContentCat = document.getElementById("categoryDropdownContent");
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  if (!userDrop.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }
  if (!catDrop.contains(event.target)) {
    dropdownContentCat.classList.remove("showCat");
  }
  if (
    !event.target.classList.contains("hamburger-icon") &&
    !hamburgerMenu.contains(event.target)
  ) {
    hamburgerMenu.classList.remove("active");
  }
});

function toggleMenu() {
  var menu = document.querySelector(".hamburger-menu");
  menu.classList.toggle("active");
  console.log(menu === document.querySelector(".hamburger-menu.active"));
}

window.addEventListener("resize", function () {
  var screenWidth = window.innerWidth;
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  if (screenWidth >= 730) {
    hamburgerMenu.classList.remove("active");
  }
});

var hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleMenu();
});

window.addEventListener("load", function () {
  window.dispatchEvent(new Event("resize"));
});
