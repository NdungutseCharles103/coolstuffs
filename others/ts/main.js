// function doSomething() {
//     for(var i =0; i< 5; i++){
//         console.log(i);
//     }
//     console.log('Finnally got: '+ i );
// }
// doSomething()
//run tsc main.ts | node main.js
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, true, 'a', false, 2.3];
var ClorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var message;
message = 'abc';
var endsWith = message.endsWith('c');
var alternativeWay = message.endsWith('c');
