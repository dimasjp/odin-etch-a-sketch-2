const board = document.querySelector('.container');

function generateGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        board.appendChild(box);
    }
}

generateGrid(16);  
