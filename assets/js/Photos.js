const photosDropdown = document.getElementById("photos");
const photosDiv = document.getElementById("gallery");

photosDropdown.addEventListener("click", loadPhotosAlbum);

function loadPhotosAlbum() {
    let photosType = photosDropdown.selectedIndex;

    while (photosDiv.firstChild) {
        photosDiv.removeChild(photosDiv.firstChild);
    }

    photosDiv.style.width = "90%";
    photosDiv.style.padding = "10px";

    switch (photosType) {
        case 0:
            loadPhotos(5, "war").then(() => {});
            break;
        case 1:
            loadPhotos(5, "family").then(() => {});
            break;
        case 2:
            loadPhotos(7, "documents").then(() => {});
            break;
        case 3:
            loadPhotos(4, "awards").then(() => {});
            break;
    }
}

async function loadPhotos(photosCount, folder) {
    for (let i = 1; i < photosCount; i++) {
        let path = "./assets/images/photos/" + folder + "/" + i + ".JPG"

        let img = document.createElement("img");
        img.src = path;
        img.width = 500;
        img.height = 400;

        photosDiv.appendChild(img);

        photosDiv.addEventListener("animationend", function() {
            photosDiv.classList.remove("fade-out-animated-class");
        });

        photosDiv.classList.add("fade-out-animated-class");
    }
}

