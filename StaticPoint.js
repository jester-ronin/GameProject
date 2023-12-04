export default class StaticPoint {
    constructor(engine, x, y) {
        this.engine = engine;
        this.x = x;
        this.y = y;

    }

    render() {
        this.engine.turnOnField(this.x, this.y);
    }
}

//метод remove (turn off) добавить