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

function shiftRow(row, size=4) {
	let lastIndex = 0;
	for (let c = 0; c < size; c++) {
    if (row[c] !== 0) {
    	if (lastIndex !== c) {
        if (row[lastIndex] === 0) {
          row[lastIndex] = row[c];
          row[c] = 0;
        }
        else if (row[c] === row[lastIndex]) {
          row[lastIndex] += row[c];
          lastIndex++;
          row[c] = 0;
        }
        else {
          if (lastIndex+1 != c) {
          	row[lastIndex+1] = row[c];
            lastIndex += 2;
          	row[c] = 0;
          } else {
          	lastIndex++;
          }
        }
    	}
    }
  }
}

row = [4, 0, 2, 2]

console.log(JSON.stringify(row));
console.log('=============================')
shiftRow(row);
console.log(JSON.stringify(row));

// d1 = new Date('2017-12-01T07:55:18.553Z');
// d2 = new Date('2017-12-01T07:57:18.553Z');
// console.log('d1 < d2', d1 < d2)
// console.log('d1', d1)
// let now = new Date()
// console.log('now', Date.now())
// console.log('d1 < now', d1 < now)
// console.log('d1 > now', d1 > now)

// console.log('d1 date', d1.getDate())
// d1.setDate(d1.getDate() - 10);
// console.log('d1', d1)

// noti = {id: 1}
// test = {id: 1, deleted: true}
// console.log('test', noti.id === test.id && test.deleted)
// noti = {id: 1, deleted: true}
// test = {id: 1}
// a = (noti.id === test.id) && test.deleted
// console.log('type', typeof a)
// console.log('test', (noti.id === test.id) && test.deleted)

// a = {c: 1}
// a['test'] = 1
// console.log(a)

// noti = {...noti, deleted: false}
// console.log('noti', noti)


// let un;
// console.log('un', typeof un);
// un = 1;
// if (un) {
// 	console.log(1);
// } else {
// 	 console.log(2);
// }


// var patt = /-*\d+/i
// var exc = patt.exec("-12 tháng 33");
// console.log('exc', exc.toString());
// console.log('exc', Number(exc.toString()));