class TicTacToe {
    constructor() {
        this.tiles = [];
        this.cols = 3;
        this.rows = 3;
        this.symbols = ['x', 'o'];
        this.player = 0;
        this.countOfTurns = 0;
    }

    /**
     * Get symbol of current player
     * @returns {*|string}
     */
    getCurrentPlayerSymbol() {
        return this.symbols[this.player];
    }

    /**
     * Initialise and update game state by write symbol of current player to correct place
     * @param rowIndex
     * @param columnIndex
     */
    nextTurn(rowIndex, columnIndex) {
        // If game starts first, initialise tiles and set symbol of current player.
        if(this.tiles.length == 0){
            // Create tiles
            for(var i = 0; i < this.rows; i++){
                this.tiles[i] = [];
                for(var j = 0; j < this.cols; j++){
                    this.tiles[i].push(null);
                }
            }
            // Set symbol of current player to correct position of tiles
            this.tiles[rowIndex][columnIndex] = this.symbols[this.player];
            // Change player
            this.player = 1;
            // White number of turn
            this.countOfTurns++;
            return;
        }

        // Check if tiles don't have a symbol of any player by passed indexes and set symbol
        if(this.tiles[rowIndex][columnIndex] == null){
            // Set symbol of current player to correct position of tiles
            this.tiles[rowIndex][columnIndex] = this.symbols[this.player];

            // Change player
            if(this.player == 1){
                this.player = 0;
            }else{
                this.player = 1;
            }
            // White number of turn
            this.countOfTurns++;
        }
    }

    /**
     * Check if it is a winner of the game or it is a draw
     * @returns {boolean}
     */
    isFinished() {
        return this.getWinner() || this.isDraw() ? true : false;
    }

    /**
     * Check winner of the game by horizontal, vertical or diagonal matches.
     * @returns {string} or {NULL}
     */
    getWinner() {
        for(var i = 0; i < 3; i++){
            // Find horizontal matches
            if(this.tiles[i][0] == this.tiles[i][1] && this.tiles[i][1] == this.tiles[i][2]){
                return this.tiles[i][0];
            }
            // Find vertical matches
            if(this.tiles[0][i] == this.tiles[1][i] && this.tiles[1][i] == this.tiles[2][i]){
                return this.tiles[0][i];
            }
        }

        // Find diagonal matches
        if(this.tiles[0][0] == this.tiles[1][1] && this.tiles[0][0] == this.tiles[2][2]){
            return this.tiles[0][0];
        }
        if(this.tiles[0][2] == this.tiles[1][1] && this.tiles[0][2] == this.tiles[2][0]){
            return this.tiles[0][2];
        }
        // If matches weren't found return NULL
        return null;
    }

    /**
     * Check if no more turns
     * @returns {boolean}
     */
    noMoreTurns() {
        return this.countOfTurns === 9;
    }

    /**
     * Check if it is a draw
     * @returns {boolean}
     */
    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    /**
     * Get value from tiles by passed indexes
     * @param rowIndex
     * @param colIndex
     * @returns {null} or {string}
     */
    getFieldValue(rowIndex, colIndex) {
        if(this.tiles.length != 0){
            return this.tiles[rowIndex][colIndex] === null ? null : this.tiles[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
