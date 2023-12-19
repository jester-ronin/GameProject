import { GameCycle } from '@eliya-56/canvas-engine';
import { TetrisEngine } from '@eliya-56/canvas-engine';
import ArkanodGame from '../ArkanoidGame';

const config = {
    mainBorderWidth: 1,
    fieldWidth: 30,
    fieldInterval: 3,
    columnCount: 39,
    rowCount: 25,
    fieldBackgroundColor: "white",
    fieldBorderColor: "gray",
    fieldDefaultContentColor: "gray",
    highlightColor: "red",
    defaultLineWidth: 0.5,
    fullLineWidth: 1,
    defaultUseBorders: true,
    headerHeight: 80,
    headerMargin: 15
}

let engine = new TetrisEngine(document.body, config);
let game = new ArkanodGame(engine);
let cycle = new GameCycle(game);


cycle.start();

// let y = 0;
// let x = 0;

// setInterval(() => {
//     engine.turnOnField(x++,y++);
//     if (x === engine.columnCount){
//         x = 0;
//     }

//     if (y === engine.rowCount) {
//         y = 0;
//     }
// }, 2000);


// get rowCount() {
//     return config.rowCount;
// }

// get columnCount() {
//     return config.columnCount;
// }

// get config() {
//     return config;
// }