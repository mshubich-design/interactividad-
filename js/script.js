/*
  Interactividad: cambio entre modo oscuro y modo claro.
  La selección se guarda para conservar el tema al recargar.
*/

const TOGGLE_THEME_BTN = document.getElementById("toggle-theme-btn");

const savedTheme = localStorage.getItem("raiza-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

TOGGLE_THEME_BTN.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const currentTheme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";

    localStorage.setItem("raiza-theme", currentTheme);
});
