export default class StaticPoint {
    constructor(engine, x, y) {
        this.engine = engine;
        this.x = x;
        this.y = y;

    }

    remove(x,y) {
        this.engine.turnOffField(x,y);
    }

    render() {
        this.engine.turnOnField(this.x, this.y);
    }
}

