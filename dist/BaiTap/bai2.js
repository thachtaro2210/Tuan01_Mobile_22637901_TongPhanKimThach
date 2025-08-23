"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = __importDefault(require("./bai1"));
class Student extends bai1_1.default {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}
exports.default = Student;
