const Piece = require('./Piece.js');

function shiftColumnUp(srcBoard, desBoard, columnIndex, size=4) {
    let lastIndex = 0;
    for (let r = 0; r < size; r++) {
        if (srcBoard[r][columnIndex] !== null) {
            if (lastIndex !== r) {
                if (desBoard[lastIndex][columnIndex] === null) {
                    desBoard[lastIndex][columnIndex] = srcBoard[r][columnIndex].clone();
                }
                else {
                    if (desBoard[lastIndex][columnIndex].value === srcBoard[r][columnIndex].value) {
                        desBoard[lastIndex][columnIndex] = new Piece(srcBoard[r][columnIndex].value*2);
                        lastIndex++;
                    }
                    else {
                        lastIndex++;
                        desBoard[lastIndex][columnIndex] = new Piece(srcBoard[r][columnIndex].value);
                    }
                }
            }
            else {
                desBoard[lastIndex][columnIndex] = srcBoard[r][columnIndex].clone();
            }
        }
    }

    return desBoard;
}

function shiftColumnDown(srcBoard, desBoard, columnIndex, size=4) {
    let lastIndex = size-1;
    for (let r = size-1; r >= 0; r--) {
        if (srcBoard[r][columnIndex] !== null) {
            if (lastIndex !== r) {
                if (desBoard[lastIndex][columnIndex] === null) {
                    desBoard[lastIndex][columnIndex] = srcBoard[r][columnIndex].clone();
                }
                else {
                    if (desBoard[lastIndex][columnIndex].value === srcBoard[r][columnIndex].value) {
                        desBoard[lastIndex][columnIndex] = new Piece(srcBoard[r][columnIndex].value*2);
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        desBoard[lastIndex][columnIndex] = new Piece(srcBoard[r][columnIndex].value);
                    }
                }
            }
            else {
                desBoard[lastIndex][columnIndex] = srcBoard[r][columnIndex].clone();
            }
        }
    }

    return desBoard;
}


module.exports.shiftColumnUp = shiftColumnUp;
module.exports.shiftColumnDown = shiftColumnDown;