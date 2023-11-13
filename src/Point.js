export default class Point {
    constructor(engine, x, y, pastPointX, pastPointY) {
        this._engine = engine;
        this._x = x;
        this._y = y; 
        this._pastPointX = pastPointX;
        this._pastPointY = pastPointY;
    }

    // keyHandler(key) {

    // }

    _calculate() {
        this._pastPointX = this._x++;
        this._pastPointY = this._y++;

        if (this._x === this._engine.columnCount - 1) {
            this._x = 0;
            this._pastPointX -= this._x
        }

        if (this._y === this._engine.rowCount - 1) {
            this._y = 0;
            this._pastPointY -= this._y
        }
    }

    render() {
            this._calculate();
            this._engine.turnOnField(this._x, this._y);
            this._engine.turnOffField(this._pastPointX, this._pastPointY);
    }
}
