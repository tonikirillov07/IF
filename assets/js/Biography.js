import Utils from "./Utils.js"

let biographyEpochsDropdown = document.getElementById("biographyEpochs");
let biographyTitle = document.getElementById("biographyTitle");
let biographyText = document.getElementById("biographyText");

biographyEpochsDropdown.addEventListener("change", showPoem);

function showPoem() {
    const selectedOption = biographyEpochsDropdown.options[biographyEpochsDropdown.selectedIndex];

    biographyTitle.textContent = selectedOption.text;

    let poemNumber = selectedOption.index + 1;
    Utils.showPoemTextFromFile(poemNumber, "./assets/text/biography/", biographyText).then(() => {});
}
