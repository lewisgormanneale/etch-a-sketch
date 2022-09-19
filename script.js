const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('canvas-grid-box');
    container.appendChild(div);
};

const gridBoxes = document.querySelectorAll('#container > div');

console.log(gridBoxes);

gridBoxes.forEach