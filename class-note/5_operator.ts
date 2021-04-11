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
    age: number;
}

interface Person {
    name: string;
    age: number;
}