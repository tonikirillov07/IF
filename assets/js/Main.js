import Utils from "./Utils.js"

const text = document.getElementById("shortBiographyText");
Utils.showPoemTextFromFile("short", "./assets/text/biography/", text).then(() => {});
