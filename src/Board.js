export const Left = 1;
export const Right = 2;
export const Out = 0;

export default class Board {
    constructor(engine) {
        this._engine = engine;
        this._startPoint = 5;
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

    _removeAllLine() {
        for (let i = 0; i < this._engine.columnCount - 1; i++) {
            if (i != this._board.includes())
                this._engine.turnOffField(i, 19)
        }
    }

    ballReachedLeftSideOfBoard(pointCoordinate) {
        let ballReachedLeftSideOfBoard = (this._board[0] - 1 === pointCoordinate.x || this._board[0] === pointCoordinate.x || this._board[1] === pointCoordinate.x) &&
            pointCoordinate.y === this._engine.rowCount - 2

        if (ballReachedLeftSideOfBoard) {
            return Left;
        }
        else {
            return Out
        }
    }

    ballReachedRightSideOfBoard(pointCoordinate) {
        let ballReachedRightSideOfBoard = (this._board[2] === pointCoordinate.x || this._board[3] === pointCoordinate.x || this._board[3] + 1 === pointCoordinate.x) &&
            pointCoordinate.y === this._engine.rowCount - 2

        if (ballReachedRightSideOfBoard) {
            return Right;
        }
        else {
            return Out
        }
    }



    isBoardCoordinate(pointCoordinate) {
        if (this.ballReachedLeftSideOfBoard(pointCoordinate)) {
            return this.ballReachedLeftSideOfBoard(pointCoordinate)
        }
        else if (this.ballReachedRightSideOfBoard(pointCoordinate))
            return this.ballReachedRightSideOfBoard(pointCoordinate)

    }





    render() {
        this._removeAllLine();
                
        for (let i = 0; i < this._board.length; i++) {
            this._engine.turnOnField(this._board[i], 19);
        }


    }

}
