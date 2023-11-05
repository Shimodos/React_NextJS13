let a: number = 4;
let b = 'hello';
let c = true;

let d: string[] = ['hello', 'world']; // Array of strings

let e: any = 4; // any type
e = 'hello'; // e is now a string

function test(a: string): string | number {
  return '';
} // Function

const test2 = (a: string): string | number => {
  return a * 2;
}; // Arrow function

d = d.map((x: string) => x.toUpperCase());

function countCoord(coord: { lat: number; long?: number }) {} // Object ? перед значением означает, что значение не обязательно

function printIt(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else if (typeof id === 'number') {
    console.log(id);
  }
} // Union type

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
    return a.reduce((acc, val) => acc + val, 0);
  } else {
    return a;
  }
} // Function return type

const x: undefined = undefined;
const y: null = null;
