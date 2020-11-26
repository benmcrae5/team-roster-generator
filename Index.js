const inquirer = require('inquirer');
const fs = require('fs');

let continueBool = true;

const 

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName() = () => name;
        this.getId() = () => id;
        this.getEmail() = () => email;
        this.getRole() = () => "Employee";
    }
}

class Manager extends Employee{
    // include officeNumber and update getRole()
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

        this.getRole() = () => "Manager";
    }
}

class Engineer extends Employee{
    // include github, getGithub(), and update getRole()
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

        this.getGithub() = () => github;

        this.getRole() = () => "Engineer";
    }
}

class Intern extends Employee{
    // include school, getSchool, and update getRole()
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

        this.getSchool() = () => school;

        this.getRole() = () => "Intern";
    }
}

while (continueBool) {
    //run inquirer based on employee role (first is manager, after is selected)
}
