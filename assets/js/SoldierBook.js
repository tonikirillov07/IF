import Utils from "./Utils.js"

const datesDropdown = document.getElementById("dates");
const awardsDropdown = document.getElementById("awards");
const title = document.getElementById("title");
const text = document.getElementById("text");

datesDropdown.addEventListener("change", showDates);
awardsDropdown.addEventListener("change", showAwards);

function showDates(){
    Utils.showDropdownContent(datesDropdown, "./assets/text/dates/", text, title);
}

function showAwards(){
    Utils.showDropdownContent(awardsDropdown, "./assets/text/awards/", text, title);
}

