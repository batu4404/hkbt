function createBoard(size) {
    let board = new Array(size);

    for (let i = 0; i < size; i++) {
        board[i] = new Array(size);
    }

    return board;
}

module.exports.createBoard = createBoard;