// console.log(1 + '2' + 3 - 3);

// console.log(2 + "1" + 1 - 1);

// console.log(30 > 20 > 10 === false);

// false Value -> undefined, null, 0, false

// console.log(0 === false)
// var x = 0;

// var x = {};

// var x = null;

// if (x) {
//     console.log("Greater than zero");
// } else {
//     console.log("Not greater than Zero");
// }

// console.log('20' === 20);

// console.log(100 + ('25' - 25) + 10);

// var x = y = 20;

// console.log(x, y);

// var x = 100;
// console.log(typeof (x));

// x = "HEllo"
// console.log(typeof (x));

// x = function () { }

// console.log(typeof (x));

// x = new Array(1, 2, 3, 4)
// console.log(typeof (x));

// x = { name: "Foo" }
// console.log(typeof (x));

// Creational Phase - allocates the memory

// Executional Phase - executes the code

// let, const & var

// function demo(arr) {
//     if (arr.length > 2) {
//         let load = "LOADING"
//         console.log(flash);
//     } else {
//         let flash = "FLASHING"
//     }
// }

// demo([2, 3, 4, 5]);

// const USERNAME = "Foo Bar";

// USERNAME = "Bar Bam";

// const user = {
//     name: "Foo"
// }

// user = {
//     name: "Baz"
// }

// user.name = "Bar";

// console.log(user);          // ?

// const fruits = ["apples", "kiwi", "oranges"];

// fruits.push("Guava")

// console.log(fruits);

// Operators & Precedence
// Strings & Template Literals

// let username = "John Doe";
// let age = 32;

// const str = `Hello there, I 'm ${username}

// !

// I'm ${age} years old
// ..

// `;

// console.log(str);

// Type Conversion & Coercion
// const age = Number(prompt("Pls enter your year of birth"));

// const retirementAge = 2037 + age;

// console.log(retirementAge);

// Conditional & Loops
// Document Object Model

// console.log(guess.value);

// const heading = document.querySelector(".heading");
// console.log(heading.innerHTML);
// heading.innerHTML = "Hello World";

// Back tick -> ` ` || ' ' || " "

// let username = "John Doe"

// let greet = `Hello ${username}`

// let sayHi = "Hi " + username;
// "use strict";

// Objects =
//  - Literal

// let box = {
//     width: 4,
//     height: 8,
//     color: "grey",
//     destination: {
//         city: "Pune",
//         street: "201, Main Road, Wakad"
//     },
//     books: ["book1", "book2", "book3"],
//     "is Delivered": false,
//     addBook: function (newBook) {
//         this.books.push(newBook);
//     }
// }
// // dynamic property adding
// box.volume = box.width * box.height;

// // Square bracket notation
// console.log("Delivery : ", box['is Delivered']);
// console.log(box['color']);

// // Dot notation
// console.log(box.volume);
// console.log(box);

// box.addBook("book4")

// console.log(box.books.length);          // ?

// Reference vs Primitive

// let x = 201;
// let y = x;

// x = 301;

// console.log(x, y);

// let x = {
//     email: "test@test.com"
// }

// let y = x ;
// y.age = 32
// x.name = "foo";

// console.log("X ", x);
// console.log("Y ", y);

//  - Contructor

// function Person(firstName, lastName) {
//     // let this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function () {
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
//     // return this;
// }

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getDetails(){
//         return `Welcome ${this.firstName} ${this.lastName}`;
//     }
// }

// let foo = new Person("Foo", "Bar");
// console.log(foo.getFullName())

// let bar = new Person("Bar", "Baz");
// console.log(bar.getFullName());

//  - Instance -- Object.create()

// let shoe = {
//     size: 8,
//     construction: "Sneaker"
// }

// let magicShoe = Object.create(shoe);
// magicShoe.cize = 11;
// console.log(magicShoe.size);
// console.log(shoe);

// function Animal(legs, species, harbivorous) {
//     this.harbivorous = harbivorous;
//     this.legs = legs;
//     this.species = species;
//     // this.getDetails = function(){
//     //     return `${this.species} is having ${this.legs} legs!`
//     // }
// }

// Animal.prototype.getDetails = function () {
//     return `${this.species} is having ${this.legs} legs!`
// }

// let kitty = new Animal(4, "Cat", false);
// console.log(kitty.getDetails())

// let userOne = {
//     age: 32,
//     address: "201 Main Road"
// }

// let userTwo = Object.create(userOne);

// console.log(userOne.isPrototypeOf(userTwo))
// console.log(userTwo.isPrototypeOf(userOne))

// console.log(Object.prototype.isPrototypeOf(userOne))
// console.log(Object.prototype.isPrototypeOf(userTwo))

// console.log(userTwo.hasOwnProperty('age'))
// console.log(userOne.hasOwnProperty('age'))

// console.log(userOne);

// 2

// function numOfOccurence(letter) {
//     let count = 0;
//     for (let i = 0; i < this.length; i++) {
//         if (letter.toLowerCase() === this.charAt(i).toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// String.prototype.numOfOccurence = numOfOccurence;

// let str = "Hello JavaScript"
// let strTwo = "Welcome to web programming"
// console.log(str.numOfOccurence("a"));     // 2
// console.log(strTwo.numOfOccurence("w"));

// Define Property
// "use strict";

// let user = {}

// Object.defineProperty(user, "email", {
//     value: 'abc@test.com',
//     writable: false
// })

// console.log(user);

// user.email = "test@test.com";

// console.log(user);

// let numbers = new Array(10, 10);

// let numbers = [ ];

// numbers.

// console.log(numbers.length);

// ARRAY

// let myBooks = ["book1", "book2", "book3"];

// let box = {
//     books: myBooks,
//     addBook: function (newBook) {
//         this.books.push(newBook);
//     }
// }

// box.addBook("Book4");

// console.log(box.books.length)       // 4

// console.log(myBooks.length);        // 4

// let arr = ["test@test.com", 32, true, function () {
//     console.log("Called");
// }, {
//         name: "Foo",
//     }, ["Bar", "Bam", "Baz"]]

// arr[3]()
// console.log(arr[4].name);
// console.log(arr[4]['name']);
// console.log(arr[5][0]);

// let users = [
//     {
//         email: "test1@test.com",
//         age: 32
//     }, {
//         email: "test2@test.com",
//         age: 33
//     }, {
//         email: "test3@test.com",
//         age: 34
//     }
// ]

// for (let user of users) {
//     console.log(user.age);
// }

// let numbers = [2, 1, 15, 24, 6, 30];

// TO MUTATE ORIGINAL ARRAY
// PUSH
// numbers.push(50);

// UNSHIFT
// numbers.unshift(11);

// POP
// numbers.pop()

// SHIFT
// numbers.shift()

// SPLICE
// numbers.splice(0, 2)
// [1,2,6, 15,24,30]

// SORT
// numbers.sort(function (a, b) {
//     // return -(a - b)
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1
//     } else {
//         return 0
//     }
// })
// REVERSE
// numbers.reverse()

// FILL
// numbers.fill(0, 1, 4)

// console.log(numbers);

// let users = [
//   {
//     email: "test1@test.com",
//     age: 32,
//   },
//   {
//     email: "test2@test.com",
//     age: 33,
//   },
//   {
//     email: "test3@test.com",
//     age: 34,
//   },
// ];

// MAP
// let userArrayWithRetirement = users.map(function (value, index, array) {
//     // console.log(value, index, array);
//     return {
//         email: value.email,
//         retirementAge: 60 - value.age
//     }
// })

// console.log(userArrayWithRetirement);
// console.log(users);

// FILTER
// let filteredArray = users.filter(function (user) {
//     return user.age > 33
// })

// console.log(filteredArray);

// SLICE
// const slicedArray = users.slice(2, 2)
// console.log(slicedArray);

// CONCAT
// const concatArray = users.concat([{ email: "new@email.com", age: 40 }])
// console.log(concatArray);

// INDEXOF
// const position = users.indexOf({ email: "test1@test.com", age: 32 })
// console.log(position);

// let fruits = ["apple", "kiwi", "guava"]
// const position = fruits.indexOf("kiwi")
// console.log(position);

// FINDINDEX
// const position = users.findIndex(function (user) {
//     return user.age === 34
// })

// console.log(position);

// FIND
// const userFound = users.find(function (user) {
//     return user.age >= 33
// })

// console.log(userFound);

// ("use strict");
// let todoList = [];

// const btnAdd = document.querySelector(".btn-add");
// const inputLabel = document.querySelector(".input-item-label");
// const container = document.querySelector(".items");

// function deleteItemById(id) {
//   todoList = todoList.filter(function (todo) {
//     return todo.id !== id;
//   });
//   createUI(todoList);
// }

// function registerListener(btnId) {
//   let btnDelete = document.querySelector(`.${btnId}`);
//   btnDelete.addEventListener("click", function (event) {
//     deleteItemById(event.target.closest(".list-item").id);
//   });
// }

// function registerListenerForCheckBox(checkStatusClass) {
//   let checkStatus = document.querySelector("." + checkStatusClass);
//   checkStatus.addEventListener("change", function (event) {
//     const closestDiv = event.target.closest(".list-item");
//     const position = todoList.findIndex(function (todo) {
//       return todo.id === closestDiv.id;
//     });
//     if (event.target.checked) {
//       todoList[position].status = "done";
//       closestDiv.querySelector(".list-item-label").style.textDecoration =
//         "line-through";
//     } else {
//       todoList[position].status = "pending";
//       closestDiv.querySelector(".list-item-label").style.textDecoration =
//         "none";
//     }
//   });
// }

// function createUI(todos) {
//   while (container.firstChild) {
//     container.removeChild(container.firstChild);
//   }
//   for (let todo of todos) {
//     const liElement = document.createElement("li");
//     liElement.innerHTML = `
//                 <div class="list-item" id=${todo.id}>
//                 <div>
//                 <input type='checkbox' class=status-${todo.id} />
//                 <span class="list-item-label"> ${todo.label.toUpperCase()}  </span>
//                 </div>
//                 <button class='btn-delete-${todo.id}'>DELETE</button>
//                 </div>
//             `;
//     container.prepend(liElement);
//     registerListener(`btn-delete-${todo.id}`);
//     registerListenerForCheckBox(`status-${todo.id}`);
//   }
// }

// btnAdd.addEventListener("click", function () {
//   const newItem = {
//     id: "10" + (todoList.length + 1),
//     label: inputLabel.value,
//     status: "pending",
//   };
//   todoList.push(newItem);
//   inputLabel.value = "";
//   container.innerHTML = "";
//   createUI(todoList);
// });
