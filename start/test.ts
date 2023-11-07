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

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// } // Up = 0, Down = 1, Left = 2, Right = 3 (default)

// enum Direction2 {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// } // Up = 1, Down = 2, Left = 3, Right = 4

// enum Direction3 {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT',
// } // Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT' // string enum

// enum Decision {
//   Yes = 1,
//   No = calcEnum(),
// }

// function calcEnum() {
//   return 2;
// } // Yes = 1, No = 2

// function runEnum(obj: { Up: string }) {}

// runEnum(Direction3);

// enum Test {
//   A,
// }

// let test = Test.A;
// let nameA = Test[test]; // 'A'

// const enum ConstEnum {
//   A,
//   B,
// }

// let c = ConstEnum.A;

// enum Dice {
//   One = 1,
//   Two,
//   Three,
// }

// function rollDice(dice: Dice) {
//   switch (dice) {
//     case Dice.One:
//       return 1;
//     case Dice.Two:
//       return 2;
//     case Dice.Three:
//       return 3;
//     default:
//       const a: never = dice;
//   }
// }

// // 3.18 Taple Кортежи

// const a: [string, number, number] = ['a', 1, 2];
// a.push(3);
// a.map((s) => {
//   switch (s) {
//     case 'a':
//       return 1;
//     case 'b':
//       return 2;
//     default:
//       const a: never = s;
//   }
// });

// const [c, d, e] = a;
// const [f, ...g] = a;

// // 3.19 Generics
// function logTime<T>(num: T): T {
//   console.log(new Date());
//   return num;
// }

// logTime<string>('wer');

// function logTime2<T>(num: T): T {
//   if (typeof num === 'string') {
//     num.toUpperCase();
//   }
//   return num;
// }

// interface MyInterface {
//   transform: <T, F>(a: T) => F;
// }

// class MyGenericClass<T> {
//   value: T;
// } // T - type parameter

// const a = new MyGenericClass<number>();
// a.value;

// interface TimeStamp {
//   stamp: number;
// }

// interface logTimeStamp<T extends TimeStamp>(num: T) {
//   console.log(num.stamp);
//   return num;
// }

// 3.20 JSX
