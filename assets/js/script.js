var currentImgSlot = null;
var currentImages = [1, 2];

(function imgCarousel() {
    var min = 1;
    var max = 6;
    currentImgSlot = pickImageSlot();
    var pickedImage = pickImage();

    setTimeout(function () {
        var rootElement = document.documentElement;
        rootElement.style.setProperty('--bg' + currentImgSlot, 'url(../img/' + pickedImage +'.jpg)');
        return imgCarousel();
    }, 2000)
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
    if (currentImages[currentImgSlot - 1] == generatedImg) {
        return pickImage();
    }
    currentImages[currentImgSlot - 1] = generatedImg;
    return generatedImg;
}


function generateRandomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}