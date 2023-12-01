export default class Menu {
    constructor(engine) {
        this._engine = engine;
        this._isPong = false;
        this._isArkanoid = false;
    }

    keyHandler(key) {
        switch (key.key) {
            case "1":
                console.log("you pressed " + key.key);
                return this._isPong = true
            case "2":
                console.log("you pressed " + key.key);
                return this._isArkanoid = true;
        }
    }

    removeAllLine() {
        for (let j = 0; j < this._engine.rowCount; j++) {
            for (let i = 0; i < this._engine.columnCount; i++) {
                this._engine.turnOffField(i, j);
            }
        }
    }
    


    render() {
        this._engine.turnOnField(2, 3);
        this._engine.turnOnField(2, 4);
        this._engine.turnOnField(2, 5);
        this._engine.turnOnField(2, 5);
        this._engine.turnOnField(2, 5);
        this._engine.turnOnField(2, 6);
        this._engine.turnOnField(2, 7);
        this._engine.turnOnField(3, 3);
        this._engine.turnOnField(4, 3);
        this._engine.turnOnField(4, 4);
        this._engine.turnOnField(4, 5);
        this._engine.turnOnField(3, 5);
        this._engine.turnOnField(6, 3);
        this._engine.turnOnField(6, 4);
        this._engine.turnOnField(6, 5);
        this._engine.turnOnField(6, 6);
        this._engine.turnOnField(6, 7);
        this._engine.turnOnField(7, 7);
        this._engine.turnOnField(7, 3);
        this._engine.turnOnField(8, 3);
        this._engine.turnOnField(8, 4);
        this._engine.turnOnField(8, 5);
        this._engine.turnOnField(8, 6);
        this._engine.turnOnField(8, 7);
        this._engine.turnOnField(10, 7);
        this._engine.turnOnField(10, 6);
        this._engine.turnOnField(10, 5);
        this._engine.turnOnField(10, 4);
        this._engine.turnOnField(10, 3);
        this._engine.turnOnField(11, 3);
        this._engine.turnOnField(12, 3);
        this._engine.turnOnField(12, 4);
        this._engine.turnOnField(12, 5);
        this._engine.turnOnField(12, 6);
        this._engine.turnOnField(12, 7);
        this._engine.turnOnField(15, 3);
        this._engine.turnOnField(16, 3);
        this._engine.turnOnField(17, 3);
        this._engine.turnOnField(14, 4);
        this._engine.turnOnField(14, 5);
        this._engine.turnOnField(14, 6);
        this._engine.turnOnField(15, 7);
        this._engine.turnOnField(16, 7);
        this._engine.turnOnField(17, 7);
        this._engine.turnOnField(17, 6);
        this._engine.turnOnField(17, 5);
        this._engine.turnOnField(16, 5);

        this._engine.turnOnField(2, 12);
        this._engine.turnOnField(2, 13);
        this._engine.turnOnField(2, 14);
        this._engine.turnOnField(2, 15);
        this._engine.turnOnField(2, 12);
        this._engine.turnOnField(3, 12);
        this._engine.turnOnField(4, 12);
        this._engine.turnOnField(4, 13);
        this._engine.turnOnField(4, 14);
        this._engine.turnOnField(4, 15);
        this._engine.turnOnField(4, 16);
        this._engine.turnOnField(2, 16);
        this._engine.turnOnField(3, 14);
        this._engine.turnOnField(6, 16);
        this._engine.turnOnField(6, 15);
        this._engine.turnOnField(6, 14);
        this._engine.turnOnField(6, 13);
        this._engine.turnOnField(6, 12);
        this._engine.turnOnField(7, 12);
        this._engine.turnOnField(8, 12);
        this._engine.turnOnField(8, 13);
        this._engine.turnOnField(8, 14);
        this._engine.turnOnField(7, 14);
        this._engine.turnOnField(7, 15);
        this._engine.turnOnField(8, 16);
        this._engine.turnOnField(10, 12);
        this._engine.turnOnField(10, 13);
        this._engine.turnOnField(10, 14);
        this._engine.turnOnField(10, 15);
        this._engine.turnOnField(10, 16);
        this._engine.turnOnField(11, 15);
        this._engine.turnOnField(12, 16);
        this._engine.turnOnField(12, 12);
        this._engine.turnOnField(11, 13);
        this._engine.turnOnField(14, 12);
        this._engine.turnOnField(14, 13);
        this._engine.turnOnField(14, 14);
        this._engine.turnOnField(14, 15);
        this._engine.turnOnField(14, 16);
        this._engine.turnOnField(15, 12);
        this._engine.turnOnField(16, 12);
        this._engine.turnOnField(16, 13);
        this._engine.turnOnField(16, 14);
        this._engine.turnOnField(16, 15);
        this._engine.turnOnField(16, 16);
        this._engine.turnOnField(15, 14);















        


        



















    }
}