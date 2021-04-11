'use strict';

// Union Type

function logMessage(value: string | number) {
    
    if (typeof value === 'number') {
        value.toLocaleString();
        console.log(value);
        return;
    }

    if(typeof value === 'string') {
        value.toString();
        console.log(value);
        return;

    }

    throw new TypeError('value must be string or number');

    
}


let value: string | number = "1"
logMessage(value);

value = 2;
logMessage(value);

// Union Type 장점


interface Developter {
    name: string;
    skill: string;
}

interface People {
    name: string;
    age: number;
}

function askSomeone(someone: Developter | People) {
    // someone.name;
}

askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '와빵', age: 30});


function askAnyone(anyone: Developter & Person) {

}

askAnyone({name: '디벨로퍼', skill: '웹개발', age:1})