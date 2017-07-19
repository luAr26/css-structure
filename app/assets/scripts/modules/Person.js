class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi there, my name this ${this.name}.`);
  }
}

export default Person;