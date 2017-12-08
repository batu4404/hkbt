
function shiftRowLeft(row, size=4) {
  let lastIndex = 0;
    let temp;
    for (let c = 0; c < size; c++) {
        if (row[c].value !== 0) {
          if (lastIndex !== c) {
                if (row[lastIndex].value === 0) {
                    row[lastIndex].value = row[c].value;
                    row[c].value = 0;
                }
                else {
                    if (row[lastIndex].value === row[c].value) {
                        row[lastIndex].value *= 2;
                        row[c].value = 0;
                        lastIndex++;
                    }
                    else {
                        lastIndex++;
                        // use temp because lastIndex after increase can be equal to c
                        temp = row[c].value;
                        row[c].value = 0;
                        row[lastIndex].value = temp;
                    }
                }
          }
        }
    }

    return row;
}

function shiftRowRight(row, size=4) {
    let lastIndex = size-1;
    let temp;
    for (let c = size-1; c >= 0; c--) {
        if (row[c].value !== 0) {
            if (lastIndex !== c) {
                if (row[lastIndex].value === 0) {
                    row[lastIndex].value = row[c].value;
                    row[c].value = 0;
                }
                else {
                    if (row[lastIndex].value === row[c].value) {
                        row[lastIndex].value *= 2;
                        row[c].value = 0;
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        // use temp because lastIndex after increase can be equal to c
                        temp = row[c].value;
                        row[c].value = 0;
                        row[lastIndex].value = temp;
                    }
                }
            }
        }
    }

    return row;
}

function shiftRowRight(row, size=4) {
    let lastIndex = size-1;
    let temp;
    for (let c = size-1; c >= 0; c--) {
        if (row[c].value !== 0) {
            if (lastIndex !== c) {
                if (row[lastIndex].value === 0) {
                    row[lastIndex].value = row[c].value;
                    row[c].value = 0;
                }
                else {
                    if (row[lastIndex].value === row[c].value) {
                        row[lastIndex].value *= 2;
                        row[c].value = 0;
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        // use temp because lastIndex after increase can be equal to c
                        temp = row[c].value;
                        row[c].value = 0;
                        row[lastIndex].value = temp;
                    }
                }
            }
        }
    }

    return row;
}

module.exports.shiftRowLeft = shiftRowLeft;
module.exports.shiftRowRight = shiftRowRight;