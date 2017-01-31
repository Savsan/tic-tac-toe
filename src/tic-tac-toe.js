class TicTacToe {
    constructor() {
        this.tiles = [];
        this.cols = 3;
        this.rows = 3;
        this.symbols = ['x', 'o'];
        this.player = 0;
    }

    /**
     * Get symbol of current player
     * @returns {*|string}
     */
    getCurrentPlayerSymbol() {
        return this.symbols[this.player];
    }

    nextTurn(rowIndex, columnIndex) {

    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
