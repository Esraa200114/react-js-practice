// Primitives: numbers, strings, booleans, undefined, null, symbols

let age: number;

age = 10;

let username: string = "hello";

let isAvailable: boolean = true;

// Arrays and Objects

let names: string[] = ["h", "l", "o"];

// Type Alias

type Person = { name: string, age: number };

let person: Person = { name: "john", age: 12 };

let persons: Person[] = [{ name: "john", age: 12 }, { name: "sam", age: 20 }];

// Type Inference

let sentence = "hello, world";

// sentence = 0;

// Union Type

// using the pipe symbol | 

let course: string | number = "React Course";

course = 1343;

// Functions & Types

function add(a: number, b: number) {
    return a + b;
}

function printSomething(val: any) {
    console.log(val);
}

// Generics

function insertAtBeginning<T>(array: T[], val: T) {
    const newArray = [val, ...array];
    return newArray;
}

const stringArray = insertAtBeginning(["e", "l", "l", "o"], "h");

