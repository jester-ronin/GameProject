let example = [undefined, Infinity, null, 0, -50, 50, 1, 2, 3, 4, 5]


// function some(arr, predicate) {
//     for (let i = 0; i < arr.length; i++) {
//         if (predicate(arr[i])) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(some(example, item => item === undefined));

// function indexOff(arr, predicate) {
//     for (let i = 0; i < arr.length; i++) {
//         if (predicate(arr[i])) {
//             return i;

//         }
//     }
//     return -1;
// }

// console.log(indexOff(example, item => item === 5))

// function foreach(arr, predicate) {
//     for (let i = 0; i < arr.length; i++) {
//         predicate(arr[i])
//     }
// }

// console.log(foreach(example, item => item + 10));


// function filter(arr, predicate) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (predicate(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(filter(example, item => item > 3))

// function map(arr, predicate) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = (predicate(arr[i]))
//     }
//     return newArr;
// }

// console.log(map(example, item => item * 2))

let data = {};
let word = "Chargoggagoggmanchauggagoggchaubunagungamaugg";

function characterCounter(symbols, obj) {
    symbols = symbols.toLowerCase(); 
    let arr = symbols.split('');
    for (let i = 0; i < arr.length; i++) {
        //obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
}

characterCounter(word, data);
console.log(data)