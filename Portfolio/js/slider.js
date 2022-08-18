
arr = ['racing.png', 'fishing.png', 'chess.png', 'football.png', 'skiing.png'];
function leftArrowClick() {
    let currentImage = document.getElementById('imageSlider');
    let currentImagePath = currentImage.getAttribute('src');
    let currentImagePathhArr = currentImagePath.split('/');
    let currentImageName = currentImagePathhArr[currentImagePathhArr.length - 1];
    let currentImageIndex = arr.indexOf(currentImageName);
    if (currentImageIndex > 0) {
        currentImageIndex--;
        let newImageName = arr[currentImageIndex];
        currentImagePathhArr[currentImagePathhArr.length - 1] = newImageName;
        let newcImagePath = currentImagePathhArr.join('/');
        currentImage.setAttribute('src', newcImagePath);
    }
}
function rightArrowClick() {
    let currentImage = document.getElementById('imageSlider');
    let currentImagePath = currentImage.getAttribute('src');
    let currentImagePathhArr = currentImagePath.split('/');
    let currentImageName = currentImagePathhArr[currentImagePathhArr.length - 1];
    let currentImageIndex = arr.indexOf(currentImageName);
    if (currentImageIndex < arr.length - 1) {
        currentImageIndex++;
        let newImageName = arr[currentImageIndex];
        currentImagePathhArr[currentImagePathhArr.length - 1] = newImageName;
        let newcImagePath = currentImagePathhArr.join('/');
        currentImage.setAttribute('src', newcImagePath);
    }
}


// function rightClick() {
//     currentImageIndex++;
//     let newImageName = arr[currentImageIndex];
//     currentImagePathhArr[currentImagePathhArr.length - 1] = newImageName;
//     let newcImagePath = currentImagePathhArr.join('/');
//     currentImage.setAttribute('src', newcImagePath);
// }
// function leftClick() {
//     currentImageIndex--;
//     let newImageName = arr[currentImageIndex];
//     currentImagePathhArr[currentImagePathhArr.length - 1] = newImageName;
//     let newcImagePath = currentImagePathhArr.join('/');
//     currentImage.setAttribute('src', newcImagePath);
// }
// function Click() {
//     let currentImage = document.getElementById('imageSlider');
//     let currentImagePath = currentImage.getAttribute('src');
//     let currentImagePathhArr = currentImagePath.split('/');
//     let currentImageName = currentImagePathhArr[currentImagePathhArr.length - 1];
//     let currentImageIndex = arr.indexOf(currentImageName);
//     if (currentImageIndex < arr.length - 1) {
//         function rightClick();
//     }
//     if (currentImageIndex < arr.length - 1){
//         function leftClick();
//     }
// }
// function getIndex(){
//     let currentImage = document.getElementById('imageSlider');
//     let currentImagePath = currentImage.getAttribute('src');
//     let currentImagePathhArr = currentImagePath.split('/');
//     let currentImageName = currentImagePathhArr[currentImagePathhArr.length - 1];
//     let currentImageIndex = arr.indexOf(currentImageName);
// }

// function leftClick(){
//     getIndex();
// }






// function Click(){
//     getIndex();

// }
