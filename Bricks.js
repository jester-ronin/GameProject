import StaticPoint from "./StaticPoint";

const GapX = 2;
const MarginTop = 3;
const Height = 5;

export default class Bricks {
    constructor(engine) {
        this.engine = engine;
        this.staticPoints = [];
        this.score = 0;
        for (let i = GapX; i < engine.columnCount - GapX; i++) {
            for (let j = MarginTop; j < MarginTop + Height; j++) {
                this.staticPoints.push(new StaticPoint(engine, i, j));
            }
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    removeBrick(pointCoordinate) {
        const indexToRemove = this.staticPoints.findIndex(point => {
            return point.x === pointCoordinate.x && point.y === pointCoordinate.y;
        });

        if (indexToRemove !== -1) {
            this.staticPoints[indexToRemove].remove(this.staticPoints[indexToRemove].x, this.staticPoints[indexToRemove].y);
            this.staticPoints.splice(indexToRemove, 1);
            let result = this.getRandomInt(0, 1)
            if (result) {
                this.score += 100;
                return result;
            }
        }

        return false;
    }




    render() {
        for (let i = 0; i < this.staticPoints.length; i++) {
            this.staticPoints[i].render();
        }
        this.engine.setHeaderText(`Score ${this.score}`);
    }
}

