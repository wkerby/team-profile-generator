//require the inquirer package
const inquirer = require("inquirer");

//bring in classes created in the classes file
const classes = require("./lib/classes");
const { Employee, Manager, Engineer, Intern } = classes;

//create flag for inquire process 
var inquireOn = true;

//create questions list
const questions = [
    {
        type: 'input',
        message: "Enter the team manager's name (first and last)",
        name: 'managername'
    },
    {
        type: 'input',
        message: "Enter the team manager's id",
        name: 'managerid'
    },
    {
        type: 'input',
        message: "Enter the team manager's email address",
        name: 'manageremail'
    },
    {
        type: 'input',
        message: "Enter the team manager's office number",
        name: 'officenum'
    },
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'next1',
        choices: ["Add an Engineer", "Add an Intern", "Finish building my team"]

    },
    {
        type: 'input',
        message: "Enter the engineer's name (first and last)",
        name: 'engineername',
        when: (answers) => answers.next1 == "Add an Engineer"

    },
    {
        type: 'input',
        message: "Enter the engineer's id",
        name: 'engineerid',
        when: (answers) => answers.next1 == "Add an Engineer"

    },
    {
        type: 'input',
        message: "Enter the engineer's email address",
        name: 'engineeremail',
        when: (answers) => answers.next1 == "Add an Engineer"

    },
    {
        type: 'input',
        message: "Enter the engineer's github username",
        name: 'github',
        when: (answers) => answers.next1 == "Add an Engineer"
    },
    {
        type: 'input',
        message: "Enter the intern's name (first and last)",
        name: 'internname',
        when: (answers) => answers.next1 == "Add an Intern"
    },
    {
        type: 'input',
        message: "Enter the intern's id",
        name: 'internid',
        when: (answers) => answers.next1 == "Add an Intern"
    },
    {
        type: 'input',
        message: "Enter the intern's email address",
        name: 'internemail',
        when: (answers) => answers.next1 == "Add an Intern"
    },
    {
        type: 'input',
        message: "Enter school that the intern is attending",
        name: 'school',
        when: (answers) => answers.next1 == "Add an Intern"
    },
];

inquirer
    .prompt(questions)
    .then(answers => {
        // if (answers.addmore == false) {
        //     inquireOn = false;
        //     console.log(`${inquireOn}`)
        // }
        const newManager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.officenum);
        console.log(`Hello! My name is ${newManager.name} and my office number is ${newManager.officeNumber}!`)
        const nextstep = answers.next1;
        switch (nextstep) {
            case "Add an Engineer":
                const newEngineer = new Engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.github);
                console.log(`Hello! My name is ${newEngineer.name} and my id is ${newEngineer.id}!`);
                break;
            case "Add an Intern":
                const newIntern = new Intern(answers.internname, answers.internid, answers.internemail, answers.school);
                console.log(`Hello! My name is ${newIntern.name} and my id is ${newIntern.id}!`);
                break;
            case "Finish building my team":
                console.log("Finished!")
                break;
        }
    })







