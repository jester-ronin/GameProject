import Point from "./src/point";
import Board, { DoubleLeft, DoubleRight, Left, Out, Right } from "./src/Board";
import SecondBoard from "./src/SecondBoard";
import Menu from "./Menu";
import Bricks from "./Bricks";

export default class ArkanodGame {
    constructor(engine) {
        this._engine = engine;
        this._point = new Point(engine, 2, 12, 0, 0);
        this._board = new Board(engine);
        this._secondBoard = new SecondBoard(engine);
        this._menu = new Menu(engine);
        this._bricks = new Bricks(engine);

        this._engine.keyboardHandler = (key) => {
            //this._point.keyboardHandler(key);
            this._board.keyHandler(key);
            this._menu.keyHandler(key);
        }
    }




    _calculate() {
        let pointCoordinate = this._point.getCoordinate();
        let brickCoordinate = this._bricks.removeBrick(pointCoordinate);

        if (brickCoordinate !== null) {
            this._changeDirectionAfterBrick(brickCoordinate, pointCoordinate);
        }

        let resultForBoard = this._board.isBoardCoordinate(pointCoordinate);

        switch (resultForBoard) {
            case Left:
                this._point.changeDirectionX(-1);
                this._point.changeDirectionY();
                break;
            case Right:
                this._point.changeDirectionX(1);
                this._point.changeDirectionY();
                break;
            case Out:
                break;
        }
    }


    _changeDirectionAfterBrick(brickCoordinate, pointCoordinate) {
        debugger
        if (pointCoordinate.y <= brickCoordinate.y) {
            this._point.changeDirectionY(-1);
        }
        else {
            this._point.changeDirectionY(1);
        }

        if (pointCoordinate.x <= brickCoordinate.x && this._point._directionX === 1) {
            this._point.changeDirectionX(1);
        } else {
            this._point.changeDirectionX(-1);
        }
    }



    render(frameCount, msFromLastFrame) {
        if (frameCount % 3 === 0) {
            this._menu.render();
            if (this._menu._isPong === true) {
                this._menu.removeAllLine();
                this._calculate();
                this._board.render();
                this._bricks.render();
                this._point.render();
            }

        }
    }
}
