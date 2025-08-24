class Animal {
  protected makeSound(): void {
    console.log("Some generic animal sound");
  }


  public playSound(): void {
    this.makeSound();
  }
}

class Dog extends Animal {
  protected override makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  protected override makeSound(): void {
    console.log("Meow~");
  }
}