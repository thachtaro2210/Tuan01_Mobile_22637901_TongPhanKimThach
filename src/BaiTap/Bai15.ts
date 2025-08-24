export class Books {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}


export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


export class Library {
  private books: Books[] = [];
  private users: User[] = [];

  addBook(book: Books): void {
    this.books.push(book);
    console.log(`Book "${book.title}" by ${book.author} added to library.`);
  }


  addUser(user: User): void {
    this.users.push(user);
    console.log(`User "${user.name}" registered in library.`);
  }


  listBooks(): void {
    console.log("Books in library:");
    this.books.forEach((b, i) =>
      console.log(`${i + 1}. ${b.title} - ${b.author}`)
    );
  }


  listUsers(): void {
    console.log("Users in library:");
    this.users.forEach((u, i) => console.log(`${i + 1}. ${u.name}`));
  }
}