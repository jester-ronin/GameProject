import { GameCycle } from '@eliya-56/canvas-engine';
import { TetrisEngine } from '@eliya-56/canvas-engine';
import ArkanodGame from '../ArkanoidGame'; 

let engine = new TetrisEngine(document.body);
let game = new ArkanodGame(engine, 0, 0);
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