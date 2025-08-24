"use strict";
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
    playSound() {
        this.makeSound();
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow~");
    }
}
