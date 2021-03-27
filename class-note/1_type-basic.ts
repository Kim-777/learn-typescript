// 문자열
let str: string = 'hello';

// 숫자
let num: number = 10;

// Array
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1,2,3]
let heroes: Array<string> = ['Caption', 'Thor', 'Hulk'];


//  TS 튜플 : Array index의 들어가는 타입도 정해줄 수 있는데 이를 튜플이라 합니다.
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'kim',
//     age: 100
// };
let person: {name: string, age: number} = {
    name: 'kim',
    age: 3
}

let car: {year: number, brand: string, certified: boolean} = {
    year: 1,
    brand: 'volvo',
    certified: true
}

let show :boolean = true;
