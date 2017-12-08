const Piece = require('./Piece.js');

function shiftRowLeft(srcRow, desRow, size=4) {
    let lastIndex = 0;
    for (let c = 0; c < size; c++) {
        if (srcRow[c].value !== 0) {
            if (lastIndex !== c) {
                if (desRow[lastIndex].value === 0) {
                    desRow[lastIndex] = new Piece(srcRow[c].value);
                }
                else {
                    if (desRow[lastIndex].value === srcRow[c].value) {
                        desRow[lastIndex].value *= 2;
                        lastIndex++;
                    }
                    else {
                        lastIndex++;
                        desRow[lastIndex] = new Piece(srcRow[c].value);
                    }
                }
            }
            else {
                desRow[lastIndex] = new Piece(srcRow[c].value);
            }
        }
    }

    return desRow;
}

function shiftRowRight(srcRow, desRow, size=4) {
    let lastIndex = size-1;
    for (let c = size-1; c >= 0; c--) {
        if (srcRow[c].value !== 0) {
            if (lastIndex !== c) {
                if (desRow[lastIndex].value === 0) {
                    desRow[lastIndex] = new Piece(srcRow[c].value);
                }
                else {
                    if (desRow[lastIndex].value === srcRow[c].value) {
                        desRow[lastIndex].value *= 2;
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        desRow[lastIndex] = new Piece(srcRow[c].value);
                    }
                }
            }
            else {
                desRow[lastIndex] = new Piece(srcRow[c].value);
            }
        }
    }

    return desRow;
}

module.exports.shiftRowLeft = shiftRowLeft;
module.exports.shiftRowRight = shiftRowRight;