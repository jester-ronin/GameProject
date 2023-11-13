export default class Desk {
    constructor(engine) {
        this._engine = engine;
        this._startPoint = 10;
        this._desk = [];
        this._pastPoint = this._startPoint - 1;
    }


    keyHandler(key) {
        switch (key.key) {
            case "ArrowRight":
                this._pastPoint = this._startPoint++;
                if (this._startPoint === this._engine.columnCount) {
                    this._startPoint = 19;
                    this._pastPoint -= this._startPoint;
                }
                break;
            case "ArrowLeft":
                this._pastPoint = this._startPoint--;
                if (this._startPoint === this._engine.columnCount - 21) {
                    this._startPoint = 1;
                    this._pastPoint += this._startPoint;
                }
                break;
        }
    }


    render() {
        this._engine.turnOnField(this._startPoint, 19);
        this._engine.turnOffField(this._pastPoint, 19);
    }

}
