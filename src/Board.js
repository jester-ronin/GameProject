export default class Board {
    constructor(engine) {
        this._engine = engine;
        this._startPoint = 10;
        this._board = [this._startPoint, this._startPoint + 1, this._startPoint + 2, this._startPoint + 3];
        this._past = [];
    }


    moveLeft() {
        if (this._board[0] > 0) {
            this._past = this._board;
            this._board = this._board.map(x => x - 1);
        }
    }

    moveRight() {
        if (this._board[this._board.length - 1] < this._engine.columnCount - 1) {
            this._past = this._board;
            this._board = this._board.map(x => x + 1);
        }
    }



    keyHandler(key) {
        switch (key.key) {
            case "ArrowRight":
                this.moveRight();
                break;
            case "ArrowLeft":
                this.moveLeft();
                break;
        }
    }

    removeAllLine() {
        for (let i = 0; i < this._engine.columnCount - 1; i++) {
            if (i != this._board.includes())
                this._engine.turnOffField(i, 19)
        }
    }

    isBoardCoordinate(pointCoordinate) {
        if (this._board.includes(pointCoordinate.x)) {
            console.log("Шарик совпадает с доской по X");
        }
        if (pointCoordinate.y === this._engine.rowCount - 2) {
            console.log("Шарик совпадает с доской по Y");
        }
    }




    render() {
        for (let j = 0; j < this._past.length; j++) {
            this._engine.turnOffField(this._past[j], 19);
        }

        for (let i = 0; i < this._board.length; i++) {
            this._engine.turnOnField(this._board[i], 19);
        }


    }

}
