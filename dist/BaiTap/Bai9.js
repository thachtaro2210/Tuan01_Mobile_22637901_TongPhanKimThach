"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Woof!`);
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Meow!`);
    }
}
