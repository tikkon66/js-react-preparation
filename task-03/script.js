let modalWindow = document.getElementById('window')
let galery = document.getElementById('galery');
let images = document.getElementById('images')
let image = document.getElementById('image')

function openWindow(num) {
    modalWindow.style.display = "flex"

    let paintWidth = image.offsetWidth * num;
    console.log(paintWidth)

    images.style.marginLeft = `-${paintWidth}px`
}

function closeWindow() {
    modalWindow.style.display = "none"
}

document.addEventListener("click", (e) => {
    if (!modalWindow.contains(e.target) && !galery.contains(e.target)) {
        closeWindow()
    }
});

let canClick = true;

function changeSlider(num) {
    if (!canClick) return
    canClick = false

    margin = parseInt(getComputedStyle(images).marginLeft) + (image.offsetWidth * num)
    if (margin < -image.offsetWidth * 7) {
        images.style.marginLeft = `0px`
    }
    else if (margin > 0) {
        images.style.marginLeft = "-" + (image.offsetWidth * 7) +"px"
    }
    else {
        images.style.marginLeft = `${margin}px`
    }

    setTimeout(() => canClick = true, 400)
}