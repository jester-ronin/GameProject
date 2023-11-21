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

    // keyHandler(key) {

    // }

    moveBall() {
        if (this._isBallOnField) {
            // Ошибка программы
            if (this._x === this._pastPointX) {
                throw 'error';
            }
            // Х уменьшается 
            else if (this._x < this._pastPointX) {
                // Х достиг левой границы
                if (this._x === 0) {
                    this._pastPointX = this._x++;
                }
                else {
                    this._pastPointX = this._x--;
                }
            }
            // Х увеличивается
            else {
                // Х достиг правой границы
                if (this._x === this._engine.columnCount - 1) {
                    this._pastPointX = this._x--;
                }
                else {
                    this._pastPointX = this._x++;
                }
            }

            if (this._y === this._pastPointY) {
                throw 'error';
            }
            else if (this._y < this._pastPointY) {
                if (this._y === 0) {
                    this._pastPointY = this._y++;
                }
                else {
                    this._pastPointY = this._y--;
                }
            }
            else {

                if (this._y === this._engine.rowCount - 1) {
                    this._isBallOnField = false;
                }

                else {
                    this._pastPointY = this._y++;
                }
            }
        }
        else (
            this._engine.setHeaderText("Game Over")
        )
    }

    getCoordinate() {
        let coordinate = {
            x : this._x,
            y : this._y
        }
        return(coordinate)
    }

    changeDirectionX() {
        this._directionX *= -1;
    }

    changeDirectionY() {
        this._directionY *= -1;
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
