// Создать класс игры
// Создать 2 метода render calculate
// добавить 2 свойства x, y
// в calculate измекнять x, y
// внутри render вызвать calculate
// создать новую стереть прошлую

import Point from "./src/point";
import Desk from "./src/Desk";

export default class ArkanodGame {
    constructor(engine) {
        this._engine = engine;
        this._point = new Point(engine, 1, 1, 0, 0);
        this._desk = new Desk(engine);

        this._engine.keyboardHandler = (key) => {
            //this._point.keyboardHandler(key);
            this._desk.keyHandler(key)
        }
    }

    _calculate() {
        // this._pastPointX = this._x++;
        // this._pastPointY = this._y++;

        // if (this._x === this._engine.columnCount - 1) {
        //     this._x = 0;
        //     this.pastPointX -= this._x
        // }

        // if (this._y === this._engine.rowCount - 1) {
        //     this._y = 0;
        //     this._pastPointY -= this._y
        // }
    }

    render(frameCount, msFromLastFrame) {
        if (frameCount * 3 % 2 === 0) {
            // this._calculate();
            // this._engine.turnOnField(this._x, this._y);
            // this._engine.turnOffField(this._pastPointX, this._pastPointY);
            this._engine.setHeaderText("Кадры " + frameCount);
            this._point.render();
            this._desk.render();
        }
    }
}

