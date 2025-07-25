const board = document.querySelector('.container');
const btnGenerate = document.querySelector('.btn-generate');

btnGenerate.addEventListener('click', () => {
    let num = prompt('Grid Size');
    
    if (num > 100) {
        alert("Grid size should be 100 or smaller!")
    } else {
        generateGrid(num);
    }
})

function generateGrid(num) {
    board.replaceChildren();

    for (let i = 1; i <= num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        board.appendChild(box);

        let boxWidth = 100 / num;
        box.style.minWidth = `${boxWidth}%`;

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        })
    }
}

generateGrid(16);
