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

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  var userDrop = document.getElementById("userDropdown");
  var dropdownContent = document.getElementById("userDropdownContent");

  if (!userDrop.contains(event.target)) {
    // Close the dropdown if the click is outside the user-drop
    dropdownContent.classList.remove("show");
  }
};
