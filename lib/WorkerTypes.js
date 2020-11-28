
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
       
        this.getName = () => this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getRole = () => "Employee";
    }
}

class Manager extends Employee{
    // include officeNumber and update getRole()
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
       
        this.getOffice = () => this.officeNumber;

        this.getRole = () => "Manager";
    }
}

class Engineer extends Employee{
    // include github, getGithub(), and update getRole()
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

        this.getGithub = () => this.github;

        this.getRole = () => "Engineer";
    }
}

class Intern extends Employee{
    // include school, getSchool, and update getRole()
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

        this.getSchool = () => this.school;

        this.getRole = () => "Intern";
    }
}

module.exports = {Employee, Manager, Engineer, Intern};