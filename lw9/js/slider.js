document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var slides = document.querySelectorAll('content-center__slid');
const length = slides.length;
const maxWidthRight = -1830;
const shift = 305;
var move = 0;

function sliderLeft() {
    var stripSlider = document.getElementById('content-center__slides');
    if (move == 0) {
        move = maxWidthRight;
        stripSlider.style.left = move + 'px';
    } else {
        move = move + shift;
        stripSlider.style.left = move + 'px';
    }
}

function sliderRight() {
    var stripSlider = document.getElementById('content-center__slides');
    if (move == maxWidthRight) {
        move = 0;
        stripSlider.style.left = move + 'px';
    } else {
        move = move - shift;
        stripSlider.style.left = move + 'px';
    }
}

