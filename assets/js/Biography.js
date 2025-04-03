import Utils from "./Utils.js"

const biographyEpochsDropdown = document.getElementById("biographyEpochs");
const biographyTitle = document.getElementById("biographyTitle");
const biographyText = document.getElementById("biographyText");

biographyEpochsDropdown.addEventListener("change", showBiography);

function showBiography() {
    Utils.showDropdownContent(biographyEpochsDropdown, "./assets/text/biography/", biographyText, biographyTitle);
}
