export const Left = 1;
export const Right = 2;
export const Out = 0;

export default class SecondBoard {
    constructor(engine) {
        this._engine = engine;
        this._startPoint = 10;
        this._board = [this._startPoint, this._startPoint + 1, this._startPoint + 2, this._startPoint + 3];
        this._past = [];
    }

    moveToBall(pointCoordinate) {
        if (this._board[0] > pointCoordinate.x) {
            this._past = this._board;
            this._board = this._board.map(x => x - 1);
        }


        else if (this._board[this._board.length - 1] < this._engine.columnCount - 1) {
            this._past = this._board;
            this._board = this._board.map(x => x + 1);
        }

    }

    // ballReachedLeftSideOfBoard(pointCoordinate) {
    //     let ballReachedLeftSideOfBoard = (this._board[0] - 1 === pointCoordinate.x || this._board[0] === pointCoordinate.x || this._board[1] === pointCoordinate.x) &&
    //         pointCoordinate.y === this._engine.rowCount - 2

    //     if (ballReachedLeftSideOfBoard) {
    //         return Left;
    //     }
    //     else {
    //         return Out
    //     }
    // }

    // ballReachedRightSideOfBoard(pointCoordinate) {
    //     let ballReachedRightSideOfBoard = (this._board[2] === pointCoordinate.x || this._board[3] === pointCoordinate.x || this._board[3] + 1 === pointCoordinate.x) &&
    //         pointCoordinate.y === this._engine.rowCount - 2

    //     if (ballReachedRightSideOfBoard) {
    //         return Right;
    //     }
    //     else { 
    //         return Out
    //     }
    // }




    // isBoardCoordinate(pointCoordinate) {
    //     if (this.ballReachedLeftSideOfBoard(pointCoordinate)) {
    //         return this.ballReachedLeftSideOfBoard(pointCoordinate)
    //     }
    //     else if (this.ballReachedRightSideOfBoard(pointCoordinate))
    //         return this.ballReachedRightSideOfBoard(pointCoordinate)

    // }



    render() {
        for (let j = 0; j < this._past.length; j++) {
            this._engine.turnOffField(this._past[j], 0);
        }

        for (let i = 0; i < this._board.length; i++) {
            this._engine.turnOnField(this._board[i], 0);
        }


    }

}
