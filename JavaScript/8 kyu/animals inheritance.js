// Question: https://www.codewars.com/kata/56f935002e6c0d55fa000d92/javascript

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, status, species,legs);
    this.name = name;
    this.age = age;
    this.status = status;
    this.species = 'shark';
    this.legs = 0;
  }

  
}

class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, status, legs, species);
    this.name = name;
    this.age = age;
    this.status = status;
    this.species = 'cat';
    this.legs = 4;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, species, legs) {
    super(name, age, status, species,legs);
    this.name = name;
    this.age = age;
    this.status = status;
    this.species = 'dog';
    this.legs = 4;
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`
  }
}
