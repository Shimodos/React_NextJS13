// const a: number = 6;

type Point = { x: number; y: number };

type D3Point = Point & { z: number };
interface IPoint {
  x: number;
  y: number;
}

interface I3DPoint extends IPoint {
  z: number;
}

type stringOrNumber = string | number;

const c = (point: IPoint) => {
  const d: I3DPoint = point as I3DPoint;
};

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement; // Type assertion

function print(coord: Point): void {
  console.log(x, y);
}

interface ITest {
  a: number;
}

interface ITest {
  b: number;
}
