import Point from "./src/point";
import Board, { DoubleLeft, DoubleRight, Left, Out, Right } from "./src/Board";
import SecondBoard from "./src/SecondBoard";
import Menu from "./Menu";
import Bricks from "./Bricks";

export default class ArkanodGame {
    constructor(engine) {
        this._engine = engine;
        this._point = new Point(engine, 3, 10, 0, 0);
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
        let pastPointCoordinate = this._point.getPastCoordinate();

        if (brickCoordinate !== null) {
            this._changeDirectionAfterBrickRemove(brickCoordinate, pastPointCoordinate);
        }

        let resultForBoard = this._board.isBoardCoordinate(pointCoordinate);

        switch (resultForBoard) {
            case Left:
                this._point.changeDirectionX(-1);
                this._point.changeDirectionY();
                break;

            case DoubleLeft:
                this._point.changeDirectionX(-2);
                this._point.changeDirectionY();
                setTimeout(() => {
                    this._point.changeDirectionX(-1)
                }, 500);
                break;

            case Right:
                this._point.changeDirectionX(1);
                this._point.changeDirectionY();
                break;

            case DoubleRight:
                this._point.changeDirectionX(2);
                this._point.changeDirectionY();
                setTimeout(() => {
                    this._point.changeDirectionX(1)
                }, 500);
                break;

            case Out:
                break;
        }
    }


    _changeDirectionAfterBrickRemove(brickCoordinate, pastPointCoordinate) {
        debugger
        if (pastPointCoordinate.y >= brickCoordinate.y) {
            this._point.changeDirectionY(1);
        }

        else {
            this._point.changeDirectionY(-1);
        }

        // if (pastPointCoordinate.x <= brickCoordinate.x && this._point._directionX === 1) {
        //     this._point.changeDirectionX(1);
        // } else {
        //     this._point.changeDirectionX(-1);
        // }

        // if (this._point._directionY === 1 && brickCoordinate.y + 1 >= 0 && brickCoordinate.y - 1 >= 0 && brickCoordinate.x >= 0 && this._point._directionX === 1) {
        //     console.log("TRUE!")
        // }
        // else {
        //     console.log("NO!") 
        // }

        const movingDown = this._point._directionY === 1;
        const movingUp = this._point._directionY !== 1;
        const movingLeft = this._point._directionX < 0;
        const movingRight = this._point._directionX > 0;

        //const isBlockAbove =  

        // удар шарика снизу вверх ↑                             
        if (movingDown && brickCoordinate.y + 1 >= 0 && movingLeft) {
            this._point.changeDirectionX(-1); 
            this._point.changeDirectionY(1);
            if(brickCoordinate.x !== 0) {
                this._point.changeDirectionX(+1);
                this._point.changeDirectionY(-1);
            }
        }
        // удар шарика снизу вверх ↑    
        if (movingDown && brickCoordinate.y + 1 >= 0 && movingRight) {
            this._point.changeDirectionX(1);
            this._point.changeDirectionY(1);
            if(brickCoordinate.x !== 0) {
                this._point.changeDirectionX(-1);
                this._point.changeDirectionY(-1);
            }
        }

        //удар шарикa сверху вниз  ↓                                
        if (movingUp && brickCoordinate.y - 1 <= 0 && movingRight) {
            this._point.changeDirectionX(1);
            this._point.changeDirectionY(1);

        }
        //удар шарикa сверху вниз  ↓                               
        if (movingUp && brickCoordinate.y - 1 <= 0 && movingLeft) {
            this._point.changeDirectionX(-1);
            this._point.changeDirectionY(1);

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
