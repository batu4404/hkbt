const hkbt = require('./hkbt3.js');
const Piece = require('./Piece.js');

expect.extend({
    toEqualPieceArray(received, argument) {
        for (let i = 0; i < received.length; i++) {
            for (let j = 0; j < received[i].length; j++) {
                if (received[i][j].value != argument[i][j].value) {
                    return {
                        pass: false,
                        message: () => `expected ${received} to be equal to ${argument}`
                    };
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
    test('shift left a row ' + testCase.src, () => {
        expect(hkbt.shiftColumnUp(createPieceArray(testCase.src), 0))
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
    test('shift left a row ' + testCase.src, () => {
        expect(hkbt.shiftColumnDown(createPieceArray(testCase.src), 0))
        .toEqualPieceArray(createPieceArray(testCase.des));
    });
}

function createPieceArray(numberArray) {
    let pieceArray = new Array(numberArray.length);
    for (let i = 0; i < numberArray.length; i++) {
        pieceArray[i] = [new Piece(numberArray[i])];
    }

    return pieceArray;
}