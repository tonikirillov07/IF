import Utils from "./Utils.js"

const biographyEpochsDropdown = document.getElementById("biographyEpochs");
const biographyTitle = document.getElementById("biographyTitle");
const biographyText = document.getElementById("biographyText");

biographyEpochsDropdown.addEventListener("change", showBiography);

function showBiography() {
    const selectedOption = biographyEpochsDropdown.options[biographyEpochsDropdown.selectedIndex];

    biographyTitle.textContent = selectedOption.text;

    let poemNumber = selectedOption.index + 1;
    Utils.showPoemTextFromFile(poemNumber, "./assets/text/biography/", biographyText).then(() => {});
}
