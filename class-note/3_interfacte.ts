
interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho : User = {
    age: 33,
    name: '세호'
};


// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const azer = {
    name: '유저',
    age: 22
}

getUser(azer);

// 함수의 스펙에 인터페이스를 활용

interface SumFunction {
    (a: number, b: number) :  number;
}

let sum1: SumFunction;
sum1 = function(a : number, b : number) : number {
    return a + b;
}

// indexing
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'
arr[0] = 'z'; // 'a' ==> 'z'


// dictionary pattern
interface StringRegexDictionary {
    [key: string]: RegExp
}

let obj: StringRegexDictionary = {
    // sth: /abc/
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}


// interface 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string
}

let josh: Developer = {
    language: 'C#',
    name: 'josh',
    age: 40
}