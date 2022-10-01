const startColor = '#000000'
const startSize = 16;

let input = document.querySelector('input');
let currentSize = startSize;
let currentColor = startColor;
let rainbowMode = false;

const container = document.querySelector('#container');
container.style.backgroundColor = startColor;

function makeGrid(size) {
    let elements = document.getElementsByClassName('canvas-grid-box');
    while (elements.length > 0) elements[0].remove();
    for (let i = 0; i < (size * size); i++) {
        let gridBox = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        gridBox.classList.add('canvas-grid-box');
        gridBox.addEventListener('mouseover', fillIn);
        container.appendChild(gridBox);
    };
};

function pickRainbowColor() {
    let colorArray = ['#ef3550', '#f48fb1', '#7e57c2', '#2196f3', '#26c6da', '#43a047', '#eeff41', '#f9a825', '#ff5722']
    let randomColor = colorArray[Math.floor( Math.random() * colorArray.length)];//pick random value from array
    return randomColor;
};

function fillIn() {
    let self = this;
    if (rainbowMode === true) {
        currentColor = pickRainbowColor();
    }
    self.style.backgroundColor = currentColor;
};

function resetGrid() {
    let elements = document.getElementsByClassName('canvas-grid-box');
    while (elements.length > 0) elements[0].remove();
    currentColor = startColor;
    makeGrid(currentSize);
};

function toggleRainbowMode() {
    rainbowMode = !rainbowMode;
    currentColor = '#000000'
}

let inputValue = input.value;
console.log(inputValue);
input.addEventListener('input', function(){
    inputValue = this.value;
    currentSize = inputValue;
    console.log(inputValue);
},0);

window.addEventListener('load', makeGrid(startSize));

/* 
        gridBoxes = document.querySelectorAll('#container > div');
        gridBoxes[i].addEventListener('click', fillIn(currentColor)); */