const board = document.querySelector('.container');

function createBoard() {
    let boardSize = 256;

    for (let i = 0; i < boardSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        board.appendChild(box);
        i++;
    }
}

