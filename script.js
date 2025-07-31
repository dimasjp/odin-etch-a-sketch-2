const board = document.querySelector('.container');
const btnGenerate = document.querySelector('.btn-generate');
const btnClear = document.querySelector('.btn-clear');
const btnColorPicker = document.querySelector('.color-picker');

btnGenerate.addEventListener('click', () => {
    let num = prompt('Grid Size');
    
    if (num > 100) {
        alert("Grid size should be 100 or smaller!")
    } else {
        generateGrid(num);
    }
})

btnClear.addEventListener('click', () => {
    clearGrid()
})

let colorChoice = 'Classic';
btnColorPicker.textContent = colorChoice;
btnColorPicker.addEventListener('click', setColor);

function generateGrid(num) {
    board.replaceChildren();

    for (let i = 1; i <= num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        board.appendChild(box);

        let boxWidth = 100 / num;
        box.style.minWidth = `${boxWidth}%`;

        box.addEventListener('mouseover', draw)
    }
}

function clearGrid() {
    for (const box of board.children) {
        box.style.backgroundColor = 'white';
    }
}

function setColor() {
    switch (colorChoice) {
        case "Classic":
            colorChoice = "Rainbow";
            break;
        case "Rainbow":
            colorChoice = "Classic";
            break;
        default:
            break;
    }
    btnColorPicker.textContent = colorChoice;
}

function draw(e) {
    switch (colorChoice) {
        case "Classic":
            e.target.style.backgroundColor = 'black';
            break;
        case "Rainbow":
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor;
        default:
            break;
    }
}

generateGrid(16);
