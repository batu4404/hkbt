const hkbt = require('./hkbt.js');

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
        expect(hkbt.shiftRowLeft(testCase.src)).toEqual(testCase.des);
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
    test('shift right a row ' + testCase.src, () => {
        expect(hkbt.shiftRowRight(testCase.src)).toEqual(testCase.des);
    });
}