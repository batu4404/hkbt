const hkbt = require('./hkbt31.js');
const Piece = require('./Piece.js');

expect.extend({
    toEqualPieceArray(received, argument) {
        for (let i = 0; i < received.length; i++) {
            for (let j = 0; j < received[i].length; j++) {
                if (received[i][j] !== null || argument[i][j] !== null) {
                    if (received[i][j] === null || argument[i][j] === null 
                            || received[i][j].value != argument[i][j].value) {
                        return {
                            pass: false,
                            message: () => `expected ${JSON.stringify(received)} to be equal to ${JSON.stringify(argument)}`
                        };
                    }
                }
            }
        }

        return {
            pass: true,
            message: () => `expected ${received} to be not equal to ${argument}`
        };
    },
});

var shilfRowRightTestCases = [
    {src: [0, 2, 0, 0], des: [2, 0, 0, 0]},
    {src: [0, 0, 2, 2], des: [4, 0, 0, 0]},
    {src: [2, 2, 0, 0], des: [4, 0, 0, 0]},
    {src: [0, 2, 2, 4], des: [4, 4, 0, 0]},
    {src: [4, 0, 2, 2], des: [4, 4, 0, 0]},
    {src: [0, 0, 2, 2], des: [4, 0, 0, 0]},
    {src: [2, 2, 2, 2], des: [4, 4, 0, 0]},
    {src: [8, 2, 8, 2], des: [8, 2, 8, 2]},
];


for (let testCase of shilfRowRightTestCases) {
    test('shift up a column ' + testCase.src, () => {
        expect(hkbt.shiftColumnUp(createPieceArray(testCase.src), createEmptyArray(), 0))
        .toEqualPieceArray(createPieceArray(testCase.des));
    });
}


var shilfRowRightTestCases = [
    {src: [0, 2, 0, 0], des: [0, 0, 0, 2]},
    {src: [0, 0, 2, 2], des: [0, 0, 0, 4]},
    {src: [2, 2, 0, 0], des: [0, 0, 0, 4]},
    {src: [0, 2, 2, 4], des: [0, 0, 4, 4]},
    {src: [2, 2, 0, 4], des: [0, 0, 4, 4]},
    {src: [2, 0, 0, 2], des: [0, 0, 0, 4]},
    {src: [2, 2, 2, 2], des: [0, 0, 4, 4]},
    {src: [8, 2, 8, 2], des: [8, 2, 8, 2]},
];


for (let testCase of shilfRowRightTestCases) {
    test('shift down a column' + testCase.src, () => {
        expect(hkbt.shiftColumnDown(createPieceArray(testCase.src), createEmptyArray(), 0))
        .toEqualPieceArray(createPieceArray(testCase.des));
    });
}

function createEmptyArray(size=4) {
    let pieceArray = new Array(size);
    for (let i = 0; i < size; i++) { 
        pieceArray[i] = [null];
    }

    return pieceArray;
}

function createPieceArray(numberArray) {
    let pieceArray = new Array(numberArray.length);
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            pieceArray[i] = [new Piece(numberArray[i])];            
        } else {
            pieceArray[i] = [null];
        }
    }

    return pieceArray;
}