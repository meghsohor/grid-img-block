var currentImgSlot = null;
var currentImages = [1, 2];

(function imgCarousel() {
    var min = 1;
    var max = 6;
    currentImgSlot = pickImageSlot();
    var pickedImage = pickImage();

    setTimeout(function () {
        console.log("Image Slot: " + currentImgSlot + "<br> Image: " + pickedImage);
        var sheet = new CSSStyleSheet();
        sheet.replaceSync('.bg' + currentImgSlot + ' {background-image: url("assets/img/' + pickedImage + '.jpg") !important}');
        document.adoptedStyleSheets = [sheet];
        return imgCarousel();
    }, 5000)
})()

function pickImageSlot() {
    var min = 1;
    var max = 2;
    var generatedImgSlot = generateRandomNumber(max, min);
    if (generatedImgSlot == currentImgSlot) {
        return pickImageSlot();
    }
    return generatedImgSlot;
}

function pickImage() {
    var min = 1;
    var max = 6;
    var generatedImg = generateRandomNumber(max, min);
    if (currentImages[currentImgSlot] == generatedImg) {
        return pickImage();
    }
    currentImages[currentImgSlot] = generatedImg;
    return generatedImg;
}


function generateRandomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}