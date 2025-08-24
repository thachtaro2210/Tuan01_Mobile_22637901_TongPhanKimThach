"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Teacher = exports.Students = void 0;
class Students {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
exports.Students = Students;
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
exports.Teacher = Teacher;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("=== School Information ===");
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(`- ${t.name}, teaches ${t.subject}`));
        console.log("Students:");
        this.students.forEach(s => console.log(`- ${s.name}, grade ${s.grade}`));
    }
}
exports.School = School;
