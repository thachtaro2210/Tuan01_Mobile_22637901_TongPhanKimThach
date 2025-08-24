class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Teacher extends Person {
  subject: string;

  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }

  introduce(): void {
    console.log(`Hello, my name is ${this.name} and I teach ${this.subject}.`);
  }
}