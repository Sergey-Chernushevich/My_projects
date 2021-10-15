let switchMode = document.getElementById("theme-switch");
let theme = document.getElementById("theme");

switchMode.addEventListener("change", function() {

  if (switchMode.checked) {
    theme.href= "styles/dark-style-mode.css";
  } else {
    theme.href = "styles/light-style-mode.css";
  }
});