export class Students {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}


export  class Teacher {
  name: string;
  subject: string;

  constructor(name: string, subject: string) {
    this.name = name;
    this.subject = subject;
  }
}


export  class School {
  private students: Students[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Students): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("=== School Information ===");

    console.log("Teachers:");
    this.teachers.forEach(t =>
      console.log(`- ${t.name}, teaches ${t.subject}`)
    );

    console.log("Students:");
    this.students.forEach(s =>
      console.log(`- ${s.name}, grade ${s.grade}`)
    );
  }
}