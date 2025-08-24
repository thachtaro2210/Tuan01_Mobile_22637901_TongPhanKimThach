class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work(): void {
    console.log(`${this.name} is working...`);
  }
}


export class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  manageTeam(): void {
    console.log(`${this.name} is managing the team.`);
  }
}


export class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  writeCode(): void {
    console.log(`${this.name} is writing code.`);
  }
}