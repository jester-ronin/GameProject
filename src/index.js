import { TetrisEngine } from '@eliya-56/canvas-engine';

let engine = new TetrisEngine(document.body);
engine.turnOnField(1, 2);
engine.setHeaderText("String")

let y = 0;
let x = 0;

setInterval(() => { 
    engine.turnOnField(x++,y++);
    if (x === engine.columnCount){
        x = 0;
    }

    if (y === engine.rowCount) {
        y = 0;
    }
}, 2000);


// get rowCount() {
//     return config.rowCount;
// }

// get columnCount() {
//     return config.columnCount;
// }

// get config() {
//     return config;
// }