let poemsDropdown = document.getElementById("poems");
let poemTitle = document.getElementById("poemTitle");
let poemText = document.getElementById("poemText");

poemsDropdown.addEventListener("change", showPoem);

function showPoem() {
    const selectedOption = poemsDropdown.options[poemsDropdown.selectedIndex];

    poemTitle.textContent = selectedOption.text;

    let poemNumber = selectedOption.index + 1;
    showPoemTextFromFile(poemNumber)
}

async function showPoemTextFromFile(poemNumber) {
    try {
        console.log(`../text/${poemNumber}.txt`);

        const response = await fetch(`./assets/text/${poemNumber}.txt`);
        poemText.innerText = await response.text();

    } catch (error) {
        console.error('Read file error:', error);
    }
}