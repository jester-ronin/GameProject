import StaticPoint from "./StaticPoint";

const GapX = 2;
const MarginTop = 3;
const Height = 5;

export default class Bricks {
    constructor(engine) {
        this.engine = engine;
        this.staticPoints = [];
        for (let i = GapX; i < engine.columnCount - GapX; i++) {
            for (let j = MarginTop; j < MarginTop + Height; j++) {
                this.staticPoints.push(new StaticPoint(engine, i, j));
            }
        }
    }

    render() {
        for(let i = 0; i < this.staticPoints.length; i++) {
            this.staticPoints[i].render();
        }
    }
}

//Метод удалящий кирпич по координатам
// Кирпич должен совпадать с шариком