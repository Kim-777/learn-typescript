function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// 읽기 전용 프로퍼티(Readonly properties)
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 10 };

// 함수 타입 (Function Types)
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 인덱서블 타입 (Indexable Types)
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

// 클래스 타입 (Class Types)

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }

  constructor(h: number, m: number) {}
}

// this와 화살표 함수
let deck = {
  suits: ["heart", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (): Function {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// 열거(Enum)
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// 리터럴 타입 좁히기 (Literal Narrowing)

// 교차 타입
interface ErrorHandler {
  success: boolean;
  error?: { message: string };
}

interface ArtworkDate {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// 위의 인터페이스들을 교차 타입을 통해 하나의 에러 핸들링과 자체 데이터로 구성됩니다.
type ArtworksResponse = ArtworkDate & ErrorHandler;
type ArtistsResponse = ArtistsData & ErrorHandler;

// 아래의 함수의 반환값은 tsc가 추론해줍니다!
const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.artists);
};

// Class
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeter: number = 0) {
    console.log(`${this.name} moved ${distanceInMeter}`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeter = 5) {
    console.log("Slithering...");
    super.move(distanceInMeter);
  }
}

const dog = new Dog("dog");
dog.bark();
dog.move(19);
dog.bark();

class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

//  Generics
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

const fullNameMaxLength = 10;

class Employee2 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}

// 전역 프로퍼티 (Static Properties)
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// Generic Classes

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };

// Intersection Types
// function extend<First extends {}, Second extends {}>(
//   first: First,
//   second: Second
// ): First & Second {
//   const result: Partial<First & Second> = {};
//   for (const prop in first) {
//     if (first.hasOwnProperty(prop)) {
//       (result as First)[prop] = first[prop];
//     }
//   }

//   for (const prop in second) {
//     if (second.hasOwnProperty(prop)) {
//       (result as Second)[prop] = second[prop];
//     }
//   }

//   return result as First & Second;
// }

// class Person2 {
//   constructor(public name: string) {}
// }

// interface Loggable {
//   log(name: string): void;
// }

// class ConsoleLogger implements Loggable {
//   log(name: string) {
//     console.log(`Hello, I'm ${name}`);
//   }
// }

// const jim = extend(new Person2("Jim"), ConsoleLogger.prototype);
// jim.log(jim.name);

// 유니언 타입 (Union Types)
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected string or number, got '${padding}'.`);
}

const paded = padLeft("hello world", 4);
console.log(paded);

// 판별 유니언 (Discriminated Unions)
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.height;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

// 다형성 this 타입 (Polymorphic this types)
class BasicCalculator {
  public constructor(protected value: number = 0) {}

  public currentValue(): number {
    return this.value;
  }

  public add(operand: number): this {
    this.value += operand;
    return this;
  }

  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

let calced = new BasicCalculator(2).multiply(5).add(3).currentValue();
