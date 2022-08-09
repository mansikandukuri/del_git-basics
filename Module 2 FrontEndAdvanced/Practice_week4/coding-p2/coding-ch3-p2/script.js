class person {
  constructor(name, height, mass) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.BMI = this.mass / this.height ** 2;
  }
}
p1 = new person("Jack Miller", 1.69, 78);
p2 = new person("Jill Smith", 1.95, 92);

if (p1.BMI > p2.BMI) {
  console.log(p1.name + "'s BMI (", +p1.BMI + ") is higher");
} else if (p1.BMI < p2.BMI) {
  console.log(p2.name + "'s BMI (", +p2.BMI + ") is higher");
} else {
  console.log("BMIs are equal");
}
