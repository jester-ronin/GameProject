import Point from "./src/point";
import Board, { DoubleLeft, DoubleRight, Left, Out, Right } from "./src/Board";
import SecondBoard from "./src/SecondBoard";
import Menu from "./Menu";
import Bricks from "./Bricks";

export default class ArkanodGame {
    constructor(engine) {
        this._engine = engine;
        this._point = new Point(engine, 15, 3, 0, 0);
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
        //this._secondBoard.moveToBall(pointCoordinate);
        let resultForBricks = (this._bricks.removeBrick(pointCoordinate));
        let resultForBoard = (this._board.isBoardCoordinate(pointCoordinate));
        console.log(resultForBricks)
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

        switch (resultForBricks) {
            case 0:
                this._point.changeDirectionX(-1);
                this._point.changeDirectionY();
                break;
            case 1:
                this._point.changeDirectionX(1);
                this._point.changeDirectionY();
                break;
        }

        // let resultForSecondBoard = (this._secondBoard.isBoardCoordinate(pointCoordinate));
        // switch(resultForSecondBoard) {
        //     case Left :
        //         this._point.changeDirectionX(-1);
        //         this._point.changeDirectionY();
        //         break;
        //     case Right :
        //         this._point.changeDirectionX(1);
        //         this._point.changeDirectionY();
        //         break;
        //     case Out :
        //         break;
        // } 
    }



    render(frameCount, msFromLastFrame) {
        if (frameCount * 3 % 2 === 0) {
            this._menu.render();
            if (this._menu._isPong === true) {
                this._menu.removeAllLine()
                this._calculate()
                this._point.render();
                this._board.render();
                this._bricks.render();
            }

        }
    }
}
