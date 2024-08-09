const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("demo0").innerHTML ="The car type is " + car.type;

const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};
const x = person;
x.age = 10;
document.getElementById("demo1").innerHTML =
person.firstName + " is " + person.age + " years old.";

const persons = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

delete persons["age"];

document.getElementById("demo2").innerHTML =
persons.firstname + " is " + persons.age + " years old.";

const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}

let p1 = "myCars";
let p2 = "car2";
document.getElementById("demo3").innerHTML = myObj[p1][p2];