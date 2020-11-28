const inquirer = require('inquirer');
const fs = require('fs');
const WT = require('./lib/WorkerTypes');
const Qs = require('./lib/Questions');
const genHTML = require('./lib/HTMLgenerate');

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
                break;
            case "Engineer":
                qList = qList.concat(Qs.engineerQ);
                break;
            case "Intern":
                qList = qList.concat(Qs.internQ); 
                break;
        }
        let ans = await inquirer.prompt(qList);
        ans.empType = decision;

        roster.push(ans);

        continueBool = await inquirer.prompt(Qs.continueQ);
        continueBool = continueBool.continueVal;
    }

    makeFiles();
}
const makeFiles = function() {
    try {
        fs.mkdirSync('./results')
    } catch {
        console.log('found and error');
    }
    input = genHTML.generatePage(roster);
    fs.writeFileSync('./results/html_output.html', input);
    input = genHTML.generateCss();
    fs.writeFileSync('./results/css_output.css', input);
}

askQuestions();

