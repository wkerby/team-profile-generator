//require the inquirer package
const inquirer = require("inquirer");

//bring in classes created in the classes file
const classes = require("./lib/classes");
const { Employee, Manager, Engineer, Intern } = classes;

//create flag for inquire process 
var inquireOn = true;

//create functions to ask questions specific to role

const managerCreate = () => {
    const managerQuestions = [
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
        }
    ]
    inquirer.prompt(managerQuestions).then(answers => {
        const newManager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.officenum);
        console.log(`Hello! My name is ${newManager.name} and my office number is ${newManager.officeNumber}!`);
        doNext();
    })
}

const engineerCreate = () => {
    const engineerQuestions = [
        {
            type: 'input',
            message: "Enter the engineer's name (first and last)",
            name: 'engineername',
        },
        {
            type: 'input',
            message: "Enter the engineer's id",
            name: 'engineerid',
        },
        {
            type: 'input',
            message: "Enter the engineer's email address",
            name: 'engineeremail',
        },
        {
            type: 'input',
            message: "Enter the engineer's github username",
            name: 'github',
        }
    ]
    inquirer.prompt(engineerQuestions).then(answers => {
        const newEngineer = new Engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.github);
        console.log(`Hello! My name is ${newEngineer.name}, my id is ${newEngineer.id}, and my github username is ${newEngineer.github}!`);
        doNext();
    })

}

const internCreate = () => {
    const internQuestions = [
        {
            type: 'input',
            message: "Enter the intern's name (first and last)",
            name: 'internname',
        },
        {
            type: 'input',
            message: "Enter the intern's id",
            name: 'internid',
        },
        {
            type: 'input',
            message: "Enter the intern's email address",
            name: 'internemail',
        },
        {
            type: 'input',
            message: "Enter school that the intern is attending",
            name: 'school',
        }
    ]
    inquirer.prompt(internQuestions).then(answers => {
        const newIntern = new Intern(answers.internname, answers.internid, answers.internemail, answers.school);
        console.log(`Hello! My name is ${newIntern.name}, my id is ${newIntern.id}, and I currently attend ${newIntern.school}!`);
        doNext();
    })
};

const doNext = () => {
    const doNextQuestion = [
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'next',
            choices: ["Add an Engineer", "Add an Intern", "Finish building my team"]

        }
    ];
    inquirer.prompt(doNextQuestion).then(answers => {
        if (answers.next == "Finish building my team") {
            inquireOn == false;
        }

        else if (answers.next == "Add an Engineer") {
            engineerCreate();
        }

        else {
            internCreate();
        }
    })
}


//add block for user input

managerCreate();



