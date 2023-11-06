"use strict";
// // const a: number = 6;
// type Point = { x: number; y: number };
// type D3Point = Point & { z: number };
// interface IPoint {
//   x: number;
//   y: number;
// }
// interface I3DPoint extends IPoint {
//   z: number;
// }
// type stringOrNumber = string | number;
// const c = (point: IPoint) => {
//   const d: I3DPoint = point as I3DPoint;
// };
// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement; // Type assertion
// function print(coord: Point): void {
//   console.log(x, y);
// }
// interface ITest {
//   a: number;
// }
// interface ITest {
//   b: number;
// }
// 3.17 Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {})); // Up = 0, Down = 1, Left = 2, Right = 3 (default)
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {})); // Up = 1, Down = 2, Left = 3, Right = 4
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {})); // Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT' // string enum
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
} // Yes = 1, No = 2
function runEnum(obj) { }
runEnum(Direction3);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let nameA = Test[test]; // 'A'
let c = 0 /* ConstEnum.A */;
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));
function rollDice(dice) {
    switch (dice) {
        case Dice.One:
            return 1;
        case Dice.Two:
            return 2;
        case Dice.Three:
            return 3;
        default:
            const a = dice;
    }
}
// 3.18 Taple Кортежи
const a = ['a', 1, 2];
a.push(3);
a.map((s) => {
    switch (s) {
        case 'a':
            return 1;
        case 'b':
            return 2;
        default:
            const a = s;
    }
});
const [c, d, e] = a;
const [f, ...g] = a;
// 3.19 Generics
function logTime(num) {
    console.log(new Date());
    return num;
}
