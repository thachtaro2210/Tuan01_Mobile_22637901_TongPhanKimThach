import Person from "./bai1";
class Student extends Person {
    private grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age); 
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

export default Student;