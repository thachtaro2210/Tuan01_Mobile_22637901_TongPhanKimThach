"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(tittle, author, year) {
        this.tittle = tittle;
        this.author = author;
        this.year = year;
    }
    printf() {
        console.log(`Tieu de : ${this.tittle}`);
        console.log(`Tac gia : ${this.author}`);
        console.log(`Nam : ${this.author}`);
    }
}
exports.default = Book;
