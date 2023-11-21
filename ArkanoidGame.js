import Point from "./src/point";
import Board from "./src/Board";
import SecondBoard from "./src/SecondBoard";

export default class ArkanodGame {
    constructor(engine) {
        this._engine = engine;
        this._point = new Point(engine, 5, 2, 0, 0);
        this._board = new Board(engine);
        this._secondBoard = new SecondBoard(engine)

        this._engine.keyboardHandler = (key) => {
            //this._point.keyboardHandler(key);
            this._board.keyHandler(key)
        }
    }

    _calculate() {
        let pointCoordinate = this._point.getCoordinate();
        console.log(pointCoordinate)
        this._board.removeAllLine()
        this._board.isBoardCoordinate(pointCoordinate)
        
    }

    render(frameCount, msFromLastFrame) {
        if (frameCount * 3 % 2 === 0) {
            this._calculate()
            this._engine.setHeaderText("Кадры " + frameCount);
            this._point.render();
            this._board.render();
            //this._secondBoard.render()
        }
    }
}
