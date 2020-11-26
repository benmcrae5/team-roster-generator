const inquirer = require('inquirer');
const fs = require('fs');
const WT = require('./lib/WorkerTypes');
const Qs = require('./lib/Questions');

let continueBool = true;
let roster = [];

const askQuestions = async () => {
    //let questionList = Questions.employeeQs.concat(Questions.managerQ);

    while (continueBool) {
        //run inquirer based on employee role (first is manager, after is selected)
        let decision = await inquirer.prompt(Qs.initialQuestion);
        decision = decision.empType;
        
        let qList = Qs.employeeQs;
        
        switch(decision){
            case "Manager":
                qList = qList.concat(Qs.managerQ);
                console.log("it's a manager!");
                break;
            case "Engineer":
                qList = qList.concat(Qs.engineerQ);
                console.log("it's an engineer!");
                break;
            case "Intern":
                qList = qList.concat(Qs.internQ); 
                console.log("it's an intern!");
                break;
        }
        console.log(qList);
        let ans = await inquirer.prompt(qList);
        ans.empType = decision;
        roster.push(ans);
        continueBool = await inquirer.prompt(Qs.continueQ);
        continueBool = continueBool.continueVal;
        console.log(continueBool, roster);
    }
}

askQuestions();

