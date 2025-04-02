import Utils from "./Utils.js"

let poemsDropdown = document.getElementById("poems");
let poemTitle = document.getElementById("poemTitle");
let poemText = document.getElementById("poemText");

poemsDropdown.addEventListener("change", showPoem);

function showPoem() {
    const selectedOption = poemsDropdown.options[poemsDropdown.selectedIndex];

    poemTitle.textContent = selectedOption.text;

    let poemNumber = selectedOption.index + 1;
    Utils.showPoemTextFromFile(poemNumber, "./assets/text/poems/", poemText).then(() => {});
}

