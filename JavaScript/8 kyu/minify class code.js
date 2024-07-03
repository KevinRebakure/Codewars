// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

class Labrador {
  constructor(name, age, gender, master) {
    [
      this.name,
      this.age,
      this.gender,
      this.species,
      this.legs,
      this.size,
      this.master,
      this.loyal,
    ] = [name, age, gender, "Labrador", 4, "Large", master, true];
  }
}
