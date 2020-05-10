const btnRgb = document.getElementById('btn-rgb');
const colorRgb = document.querySelector('.color-rgb');

btnRgb.addEventListener('click', function () {
    let r = getRandomRgb();
    let g = getRandomRgb();
    let b = getRandomRgb();
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorRgb.textContent = rgbColor;
    document.getElementById('container-rgb').style.backgroundColor = rgbColor;
});

function getRandomRgb() {
    return parseInt(Math.random() * 255);
}