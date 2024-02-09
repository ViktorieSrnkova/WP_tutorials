// get theme on page load
const localStorageTheme = localStorage.getItem("theme");

// set initial theme
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const initialTheme = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

// set theme on button press
let currentThemeSetting = initialTheme;

// set initial theme attribute on HTML
document.querySelector("html").setAttribute("data-theme", initialTheme);

const button = document.querySelector("[data-theme-toggle]");

// Reference to the SVG files
const sunSvgPath = "/img/sun.svg";
const moonSvgPath = "/img/moon.svg";

// Set initial icon based on stored theme
const initialIconSrc = initialTheme === "dark" ? moonSvgPath : sunSvgPath;
button.querySelector("img").src = initialIconSrc;

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  // update theme attribute on HTML to switch theme in CSS
  document.querySelector("html").setAttribute("data-theme", newTheme);

  // update in local storage
  localStorage.setItem("theme", newTheme);

  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;

  // Update the src attribute of the img based on the theme
  const newSrc = newTheme === "dark" ? moonSvgPath : sunSvgPath;
  button.querySelector("img").src = newSrc;
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

  if (!userDrop.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }

  if (!catDrop.contains(event.target)) {
    dropdownContentCat.classList.remove("showCat");
  }
});

let lang = navigator.language.slice(0, 2); // Get the first two letters of user's language preference

// Hide elements that don't correspond to the user's preferred language
if (lang === "en") {
  document
    .querySelectorAll(".second-language")
    .forEach((elem) => (elem.style.display = "none"));
} else {
  document
    .querySelectorAll(".english")
    .forEach((elem) => (elem.style.display = "none"));
}

function goToEnglish() {
  let currentUrl = window.location.href;
  let newUrl;

  if (currentUrl.includes("/cz/")) {
    newUrl = currentUrl.replace("/cz/", "/en/");
    window.location.href = newUrl;
  }
}

function goToCzech() {
  let currentUrl = window.location.href;
  let newUrl;

  if (currentUrl.includes("/en/")) {
    newUrl = currentUrl.replace("/en/", "/cz/");
    window.location.href = newUrl;
  }
}
document.getElementById("english-image").addEventListener("click", goToEnglish);
document.getElementById("czech-image").addEventListener("click", goToCzech);
