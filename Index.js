const inquirer = require('inquirer');
const fs = require('fs');
const Classes = require('./lib/Classes');

let continueBool = true;

const Bob = new Classes.Employee('Bob', 'asdf', 'Bob@Classes.Employee.com');

console.log(Bob.name, Bob.email, Bob.getRole());

const billy = new Classes.Engineer('Billy', '12345', 'billy@gmail.com', 'something_cute');

console.log(billy.name, billy.getRole(), billy.getEmail());

// while (continueBool) {
//     //run inquirer based on employee role (first is manager, after is selected)
// }