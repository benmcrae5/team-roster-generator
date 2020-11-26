const initialQuestion = [
    {
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"],
        name: 'empType',
        message: "Please enter which type of employee you'd like to enter: ",
        default: 'Employee',
    }
]
const employeeQs = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?",
    },
    {
        type: "input",
        name: "empId",
        message: "What is this employee's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?",
    },
]
const managerQ = [
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
    },
]

const engineerQ = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
    },
]

const internQ = [
    {
        type: "input",
        name: "school",
        message: "Which school is the intern from?",
    },
]

const continueQ = [
    {
        type: "confirm",
        name: "continueVal",
        message: "Would you like to add another employee?",
        default: false,
    }
]

module.exports = {employeeQs, managerQ, engineerQ, internQ, initialQuestion, continueQ,};