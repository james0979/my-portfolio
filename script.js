// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");

// Turn dark mode on or off and save the choice
function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeBtn.textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Use the saved choice when the page opens
setTheme(localStorage.getItem("theme") === "dark");

// Switch when the button is clicked
themeBtn.addEventListener("click", function () {
  setTheme(!document.body.classList.contains("dark"));
});