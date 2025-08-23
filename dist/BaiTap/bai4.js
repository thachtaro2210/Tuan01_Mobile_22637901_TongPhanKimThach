"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getDientich() {
        return this.width * this.height;
    }
    getChuvi() {
        return 2 * (this.width + this.height);
    }
    displayInfo() {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${this.getDientich()}`);
        console.log(`Perimeter: ${this.getChuvi()}`);
    }
}
exports.default = Rectangle;
