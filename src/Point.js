export default class Point {
    constructor(engine, x, y, pastPointX, pastPointY) {
        this._engine = engine;
        this._x = x;
        this._y = y;
        this._pastPointX = pastPointX;
        this._pastPointY = pastPointY;
        this._isBallOnField = true;
        this._directionX = 1;
        this._directionY = 1;
    }


    moveBallByX() {
        let xReachedEdge = (this._x <= 0 || this._x === this._engine.columnCount - 1);

        if (xReachedEdge) {
            this.changeDirectionX();
        }
        this._pastPointX = this._x;


        let preX = this._x + this._directionX;
        if (preX >= 0 && preX < this._engine.columnCount) {
            this._pastPointX = this._x;
            this._x = preX;
        }
        else if (preX >= this._engine.columnCount) {
            this._pastPointX = this._x;
            this._x = this._engine.columnCount - 1;
        }
        else {
            this._x = 0;
        }
    }

    moveBallByY() {
        let yReachedEdge = this._y === 0;

        if (yReachedEdge) {
            this.changeDirectionY();
        }

        this._pastPointY = this._y;
        this._y += this._directionY
    }


    moveBall() {

        if (this._y === this._engine.rowCount - 1) {
            this._isBallOnField = false;
        }

        if (this._isBallOnField) {
            this.moveBallByX();
            this.moveBallByY();
        }
        else (
            this._engine.setHeaderText("Game Over")
        )
    }

    getCoordinate() {
        let coordinate = {
            x: this._x,
            y: this._y,
        }
        return coordinate;
    }

    getPastCoordinate() {
        let pastCoordinate = {
            x: this._pastPointX,
            y: this._pastPointY,
        }
        return pastCoordinate;
    }

    changeDirectionX(item) {
        if (item === undefined) {
            this._directionX *= -1;
        }
        else {
            this._directionX = item;
        }
    }

    changeDirectionY(item) {
        if (item === undefined) {
            this._directionY *= -1;
        }
        else {
            this._directionY = item;
        }
    }


    _calculate() {
        this.moveBall();
    }

    render() {
        this._calculate();
        this._engine.turnOnField(this._x, this._y);
        this._engine.turnOffField(this._pastPointX, this._pastPointY);
    }
}
