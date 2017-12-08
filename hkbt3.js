
function shiftColumnUp(board, columnIndex, size=4) {
    let lastIndex = 0;
    let temp;
    for (let r = 0; r < size; r++) {
        if (board[r][columnIndex].value !== 0) {
          if (lastIndex !== r) {
                if (board[lastIndex][columnIndex].value === 0) {
                    board[lastIndex][columnIndex].value = board[r][columnIndex].value;
                    board[r][columnIndex].value = 0;
                }
                else {
                    if (board[lastIndex][columnIndex].value === board[r][columnIndex].value) {
                        board[lastIndex][columnIndex].value *= 2;
                        board[r][columnIndex].value = 0;
                        lastIndex++;
                    }
                    else {
                        lastIndex++;
                        // use temp because lastIndex after increase can be equal to c
                        temp = board[r][columnIndex].value;
                        board[r][columnIndex].value = 0;
                        board[lastIndex][columnIndex].value = temp;
                    }
                }
            }
        }
    }

    return board;
}

function shiftColumnDown(board, columnIndex, size=4) {
    let lastIndex = size-1;
    let temp;
    for (let r = size-1; r >= 0; r--) {
        if (board[r][columnIndex].value !== 0) {
            if (lastIndex !== r) {
                if (board[lastIndex][columnIndex].value === 0) {
                    board[lastIndex][columnIndex].value = board[r][columnIndex].value;
                    board[r][columnIndex].value = 0;
                }
                else {
                    if (board[lastIndex][columnIndex].value === board[r][columnIndex].value) {
                        board[lastIndex][columnIndex].value *= 2;
                        board[r][columnIndex].value = 0;
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        // use temp because lastIndex after increase can be equal to c
                        temp = board[r][columnIndex].value;
                        board[r][columnIndex].value = 0;
                        board[lastIndex][columnIndex].value = temp;
                    }
                }
            }
        }
    }

    return board;
}


module.exports.shiftColumnUp = shiftColumnUp;
module.exports.shiftColumnDown = shiftColumnDown;