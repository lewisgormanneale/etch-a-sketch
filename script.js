const startColor = '#FFFFFF'
const startSize = 16;

let currentColor = startColor;
let currentSize = startSize;

const container = document.querySelector('#container');
let rainbowMode = false;

function makeGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        div.classList.add('canvas-grid-box');
        container.appendChild(div);
        gridBoxes = document.querySelectorAll('#container > div');
        gridBoxes[i].addEventListener('click', fillIn);
    };
};

function pickRainbowColor() {
    let colorArray = ['#ef3550', '#f48fb1', '#7e57c2', '#2196f3', '#26c6da', '#43a047', '#eeff41', '#f9a825', '#ff5722']
    let randomColor = colorArray[Math.floor( Math.random() * colorArray.length)];//pick random value from array
    return randomColor;
};

function fillIn() {
    let fillColor = '#000000';
    if (rainbowMode = true) {
        fillColor = pickRainbowColor();
    }
    let col = document.getElementById
    gridBoxes.style.backgroundColor = fillColor;
    console.log(fillColor);
}

function resetGrid() {

}

window.addEventListener('load', makeGrid(16));