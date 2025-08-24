"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.User = exports.Books = void 0;
class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
exports.Books = Books;
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" by ${book.author} added to library.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" registered in library.`);
    }
    listBooks() {
        console.log("Books in library:");
        this.books.forEach((b, i) => console.log(`${i + 1}. ${b.title} - ${b.author}`));
    }
    listUsers() {
        console.log("Users in library:");
        this.users.forEach((u, i) => console.log(`${i + 1}. ${u.name}`));
    }
}
exports.Library = Library;
