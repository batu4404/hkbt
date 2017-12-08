const Piece = require('./Piece.js');

function shiftRowLeft(srcRow, desRow, size=4) {
    let lastIndex = 0;
    for (let c = 0; c < size; c++) {
        if (srcRow[c] !== null) {
            if (lastIndex !== c) {
                if (desRow[lastIndex] === null) {
                    desRow[lastIndex] = srcRow[c].clone();
                }
                else {
                    if (desRow[lastIndex].value === srcRow[c].value) {
                        desRow[lastIndex] = new Piece(srcRow[c].value*2);
                        lastIndex++;
                    }
                    else {
                        lastIndex++;
                        desRow[lastIndex] = srcRow[c].clone();
                    }
                }
            }
            else {
                desRow[lastIndex] = srcRow[c].clone();
            }
        }
    }

    return desRow;
}

function shiftRowRight(srcRow, desRow, size=4) {
    let lastIndex = size-1;
    for (let c = size-1; c >= 0; c--) {
        if (srcRow[c] !== null) {
            if (lastIndex !== c) {
                if (desRow[lastIndex] === null) {
                    desRow[lastIndex] = srcRow[c].clone();
                }
                else {
                    if (desRow[lastIndex].value === srcRow[c].value) {
                        desRow[lastIndex] = new Piece(srcRow[c].value*2);
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        desRow[lastIndex] = srcRow[c].clone();
                    }
                }
            }
            else {
                desRow[lastIndex] = srcRow[c].clone();
            }
        }
    }

    return desRow;
}

module.exports.shiftRowLeft = shiftRowLeft;
module.exports.shiftRowRight = shiftRowRight;