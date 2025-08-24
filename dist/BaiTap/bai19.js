"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cats = exports.Dogs = void 0;
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dogs extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
exports.Dogs = Dogs;
class Cats extends Animal {
    makeSound() {
        console.log("Meow~");
    }
}
exports.Cats = Cats;
