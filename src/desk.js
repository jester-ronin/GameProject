export default class Desk {
    constructor(engine) {
        this._engine = engine;
        this._startPoint = 10;
        this._desk = [this._startPoint, this._startPoint + 1, this._startPoint + 2, this._startPoint + 3];
        this._past = [];
    }






    keyHandler(key) {
        switch (key.key) {
            case "ArrowRight":
                if (this._desk[this._desk.length - 1] < this._engine.columnCount - 1) {
                    this._past = this._desk;
                    this._desk = this._desk.map(x => x + 1);
                }
                break;
            case "ArrowLeft":
                if (this._desk[0] > 0) {
                    this._past = this._desk;
                    this._desk = this._desk.map(x => x - 1);
                }
                break;  
        }
    }


    render() {
        for (let j = 0; j < this._past.length; j++) {
            this._engine.turnOffField(this._past[j], 19);
        }

        for (let i = 0; i < this._desk.length; i++) {
            this._engine.turnOnField(this._desk[i], 19);
        }


    }

}
