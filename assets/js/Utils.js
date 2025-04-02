export default class Utils {
    static async showPoemTextFromFile(fileNumber, folder, textElement) {
        try {
            const response = await fetch(folder + fileNumber + ".txt");
            textElement.innerText = await response.text();

        } catch (error) {
            console.error('Read file error:', error);
        }
    }

    static configureDropdownToShowContent(dropdown, title, mainText, textFolderPath) {
        const selectedOption = dropdown.options[dropdown.selectedIndex];

        title.textContent = selectedOption.text;
        let fileNumber = selectedOption.index + 1;

        Utils.showPoemTextFromFile(fileNumber, textFolderPath, mainText).then(() => {});
    }
}


