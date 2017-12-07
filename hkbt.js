// Write JavaScript here and press Ctrl+Enter to execute
// w = 533
// b = 130
// c = a / b
// console.log('c', parseInt(c))
// t = w / c
// console.log('t', t)

// a = new Array()
// b = 1
// c = a.findIndex((entry) => 1 === 1)
// console.log('c', c)
// console.log('type', typeof a)

function printBoard(board) {
	for (row of board) {
		console.log(JSON.stringify(row));
  }
}

/*
function shiftLeft(board, size=4) {
	for (let r = 0; r < size; r++) {
  	let lastIndex = 0;
  	for (let c = 0; c < size; c++) {
    	if (board[r][c] !== 0) {
      	 if (lastIndex == c) {
        		lastIndex++;
         		break;
         }
         
      	 if (board[r][lastIndex] === 0) {
         		board[r][lastIndex] = board[r][c];
            board[r][c] = 0;
         } else {
         		if (board[r][lastIndex] === board[r][c]) {
            		board[r][lastIndex] *= 2;
                board[r][c] = 0;
            } else {
            		board[r][lastIndex+1] = board[r][c];
                lastIndex++;
                board[r][c] = 0;
            }
         }
      }
    }
  }
}

let board = [[0, 0, 0, 4],
             [0, 0, 2, 0],
             [0, 0, 0, 0],
             [2, 0, 2, 0]];

printBoard(board);
console.log("================================================")
shiftLeft(board, 4);
printBoard(board);
*/

function shiftRowLeft(row, size=4) {
	let lastIndex = 0;
    let temp;
	for (let c = 0; c < size; c++) {
        if (row[c] !== 0) {
        	if (lastIndex !== c) {
                if (row[lastIndex] === 0) {
                    row[lastIndex] = row[c];
                    row[c] = 0;
                }
                else {
                    if (row[lastIndex] === row[c]) {
                        row[lastIndex] *= 2;
                        row[c] = 0;
                        lastIndex++;
                    }
                    else {
                        lastIndex++;
                        // use temp because lastIndex after increase can be equal to c
                        temp = row[c];
                        row[c] = 0;
                        row[lastIndex] = temp;
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
        if (row[c] !== 0) {
            if (lastIndex !== c) {
                if (row[lastIndex] === 0) {
                    row[lastIndex] = row[c];
                    row[c] = 0;
                }
                else {
                    if (row[lastIndex] === row[c]) {
                        row[lastIndex] *= 2;
                        row[c] = 0;
                        lastIndex--;
                    }
                    else {
                        lastIndex--;
                        // use temp because lastIndex after increase can be equal to c
                        temp = row[c];
                        row[c] = 0;
                        row[lastIndex] = temp;
                    }
                }
            }
        }
    }

    return row;
}

module.exports.shiftRowLeft = shiftRowLeft;
module.exports.shiftRowRight = shiftRowRight;

// row = [4, 0, 2, 2]

// console.log(JSON.stringify(row));
// console.log('=============================')
// shiftRow(row);
// console.log(JSON.stringify(row));