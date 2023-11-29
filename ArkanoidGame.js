import Point from "./src/point";
import Board, { Left, Out, Right } from "./src/Board";
import SecondBoard from "./src/SecondBoard";

export default class ArkanodGame {
    constructor(engine) {
        this._engine = engine;
        this._point = new Point(engine, 15, 3, 0, 0);
        this._board = new Board(engine);
        this._secondBoard = new SecondBoard(engine);

        this._engine.keyboardHandler = (key) => {
            //this._point.keyboardHandler(key);
            this._board.keyHandler(key);
        }
    }

    _calculate() {
        let pointCoordinate = this._point.getCoordinate();
        console.log(pointCoordinate);
        this._board.removeAllLine();
        this._secondBoard.moveToBall(pointCoordinate);
        let result = (this._board.isBoardCoordinate(pointCoordinate));
        switch(result) {
            case Left :
                this._point.changeDirectionX(-1);
                this._point.changeDirectionY();
                break;
            case Right :
                this._point.changeDirectionX();
                this._point.changeDirectionY();
                break;
            case Out :
                break;
        }
        
        // let resultForSecondBoard = (this._secondBoard.isBoardCoordinate(pointCoordinate));
        // switch(resultForSecondBoard) {
        //     case 1 :
        //         this._point.changeDirectionX();
        //         this._point.changeDirectionY();
        //         break;
        //     case 2 :
        //         this._point.changeDirectionX(true);
        //         this._point.changeDirectionY();
        //         break;
        //     case 0 :
        //         break;
        // }
    }



    render(frameCount, msFromLastFrame) {
        if (frameCount * 3 % 2 === 0) {
            this._calculate()
            this._engine.setHeaderText("Кадры " + frameCount);
            this._point.render();
            this._board.render();
            this._secondBoard.render()
        }
    }
}
