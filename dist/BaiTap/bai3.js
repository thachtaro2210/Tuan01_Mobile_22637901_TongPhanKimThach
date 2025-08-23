"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    printfCar() {
        console.log(`Brand : ${this.brand}`);
        console.log(`Model : ${this.model}`);
        console.log(`Year : ${this.year}`);
    }
}
exports.default = Car;
