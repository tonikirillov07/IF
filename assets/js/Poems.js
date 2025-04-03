import Utils from "./Utils.js"

const poemsDropdown = document.getElementById("poems");
const poemTitle = document.getElementById("poemTitle");
const poemText = document.getElementById("poemText");

poemsDropdown.addEventListener("change", showPoem);

function showPoem() {
    Utils.showDropdownContent(poemsDropdown, "./assets/text/poems/", poemText, poemTitle);
}
