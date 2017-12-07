let id = 1;

class Piece {
    constructor(value) {
        this.id = id++;
        this.value = value;
    }
}

module.exports = Piece;
