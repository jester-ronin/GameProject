import Point from "./point";

export default class SecondDesk {
    constructor(engine) {
        this._engine = engine;
        this._startPoint = 10;
        this._desk = [this._startPoint, this._startPoint + 1, this._startPoint + 2, this._startPoint + 3];
        this._past = [];
    }




    render() {
        for (let j = 0; j < this._past.length; j++) {
            this._engine.turnOffField(this._past[j], 0);
        }

        for (let i = 0; i < this._desk.length; i++) {
            this._engine.turnOnField(this._desk[i], 0);
        }


    }

}
