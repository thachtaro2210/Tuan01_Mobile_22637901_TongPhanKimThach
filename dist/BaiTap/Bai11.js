"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.AnimalBase = void 0;
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
    // method mặc định, sẽ override ở class con
    sound() {
        console.log(`${this.name} phát ra âm thanh.`);
    }
}
exports.AnimalBase = AnimalBase;
class Dog extends AnimalBase {
    constructor(name) {
        super(name);
    }
    sound() {
        this.bark();
    }
    bark() {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}
exports.Dog = Dog;
class Cat extends AnimalBase {
    constructor(name) {
        super(name);
    }
    sound() {
        this.meow();
    }
    meow() {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}
exports.Cat = Cat;
