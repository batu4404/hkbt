let id = 1;

class Piece {
    constructor(value) {
        this.id = id++;
        this.value = value;
    }

    static getEmptyPiece() {
        return EMPTY_PIECE;
    }

    clone() {
        let piece = new Piece(this.value);
        piece.id = this.id;
        
        return piece;
    }
}

const EMPTY_PIECE = new Piece(0);

module.exports = Piece;
