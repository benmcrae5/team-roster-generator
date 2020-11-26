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

module.exports = {employeeQs, managerQ, engineerQ, internQ,};