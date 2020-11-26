const inquirer = require('inquirer');
const fs = require('fs');
const WT = require('./lib/WorkerTypes');
const Questions = require('./lib/Questions');

let continueBool = true;
const roster = [];

const askQuestions = async () => {
    let questionList = Questions.employeeQs.concat(Questions.managerQ);
    while (continueBool) {
        //run inquirer based on employee role (first is manager, after is selected)
        let { name, empId, email, office} = await inquirer.prompt(questionList);
        continueBool = false;
        console.log (name, empId, email, office);
    }
}

askQuestions();