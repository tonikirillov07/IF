export default class Utils {
    static async showPoemTextFromFile(fileNumber, folder, textElement) {
        try {
            const response = await fetch(folder + fileNumber + ".txt");
            textElement.innerText = await response.text();
            textElement.animation = "slideUp 300ms ease-in-out forwards;"

            textElement.addEventListener("animationend", function() {
                textElement.classList.remove("slide-up-animated-class");
            });

            textElement.classList.add("slide-up-animated-class");
        } catch (error) {
            console.error('Read file error:', error);
        }
    }

    static showDropdownContent(dropdown, textsPath, textElement, titleElement){
        const selectedOption = dropdown.options[dropdown.selectedIndex];

        titleElement.textContent = selectedOption.text;
        let contentNumber = selectedOption.index + 1;

        Utils.showPoemTextFromFile(contentNumber, textsPath, textElement).then(() => {});
    }
}


