// Создать класс игры
// Создать 2 метода render calculate
// добавить 2 свойства x, y
// в calculate измекнять x, y
// внутри render вызвать calculate
// создать новую стереть прошлую

export default class ArkanodGame {
    constructor(engine, x, y) {
        this._engine = engine;
        this.x = x;
        this.y = y;
    }

    _calculate() {
                if (this.x === this._engine.columnCount){
                    this.x = 0;
                }
            
                if (this.y === this._engine.rowCount) {
                    this.y = 0;
                }
    }

    render(frameCount, msFromLastFrame) {
        if (frameCount * 3 % 2 === 0) {
            this._calculate();
            this._engine.turnOnField(this.x++, this.y++)
            this._engine.setHeaderText("Кадры " + frameCount)
        }
    }
}

