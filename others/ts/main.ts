// function doSomething() {
//     for(var i =0; i< 5; i++){
//         console.log(i);
        
//     }

//     console.log('Finnally got: '+ i );
    
// }
// doSomething()
//run tsc main.ts | node main.js

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4];
let f: any[] = [1, true, 'a', false, 2.3]

const ClorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;

let message;
message = 'abc';
let endsWith = (<string>message).endsWith('c');
let alternativeWay = (message  as string).endsWith('c')