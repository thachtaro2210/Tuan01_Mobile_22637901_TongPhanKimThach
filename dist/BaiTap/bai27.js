"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Teachers extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I teach ${this.subject}.`);
    }
}
