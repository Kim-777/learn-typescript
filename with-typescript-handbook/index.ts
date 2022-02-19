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

console.log("c ::: ", c);

// 리터럴 타입 좁히기 (Literal Narrowing)

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
