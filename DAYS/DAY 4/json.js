// const jsObject = {
//   name: "HP",
//   age: 25,
//   display: function () {
//     console.log("Hello");
//   },
// };

// //JavaScript Object Notation
// let jsonObject = {
//   name: "HP",
//   age: 25,
// };
// //methods(functions inside objects) are not supported

// let stringJSON = JSON.stringfy(jsObject);
// console.log(stringJSON);
// console.log(typeof stringJSON);

// let normalJSON = JSON.parse(stringJSON);
// console.log(normalJSON);
// console.log(typeof normalJSON);



// const jsonbject = {
//     name: "John doe",
//     age: 25,
//     display: function(){
//         console.log("Hello");
//     },
// };

// let jsonObject = {
//     "name": "John Doe",
//     "age": 25,
// };
// //function inside object (methods) not supported


// let stringJSON = JSON.stringify(jsonObject);
// console.log(stringJSON);
// console.log(typeof stringJSON);

// let normalJSON = JSON.parse(stringJSON);
// console.log(normalJSON);
// console.log(typeof normalJSON);



localStorage.setItem("user.name", "Martin Luthor");
let item = localStorage.getItem("username");
console.log(item);

localStorage.removeItem("user name", "Martin Luthor");
let item2 = localStorage.getItem("username");
console.log(item2);

sessionStorage.setItem("user name", "Martin Luthor")