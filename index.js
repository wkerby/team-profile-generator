//require the inquirer package
const inquirer = require("inquirer");
//require fs package
const fs = require('fs');

//bring in classes created in the lib directory
// const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const Manager = manager.Manager;
const engineer = require("./lib/Engineer");
const Engineer = engineer.Engineer;
const intern = require("./lib/Intern");
const Intern = intern.Intern;

//create flag for inquire process 
var inquireOn = true;

//create var to store number of cards created from function
var cardCount = 1;

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


//create function that creates a card for employee objects
const pushCard = (employee) => {//determines which specific pieces of information go in the card
    cardCount++; //increment card count by 1
    if (employee.getRole() == "Manager") {
        const cardElem = document.querySelector("#card1");
        const clone = cardElem.cloneNode(true); //will also copy all elements nested inside of it
        clone.id = `card${cardCount}`;
        console.log(clone.children); //want to access the divs inside of which name, role, id, and email info lives
        //research traversing DOM to access the spans inside of the card
        cardElem.after(clone);
        `<div id="card1" class="card">
            <div class="card-header">
                <div id="name-role-info">
                    <div class="card-title-name">${employee.name}</div>
                    <div class="card-title-role">${employee.getRole()}</div>
                </div>
            </div>
            <div class="card-body">
                <div id="id-email-info">
                    <div class="card-data-id">ID: ${employee.id}</div>
                    <div class="card-data-email">Email: <span><a href="mailto:${employee.email}">${employee.email}</a></span></div>
                    <div class="card-data-office">Office number: ${employee.officenum}
                </div>
            </div>
        </div>`
    }


}

//create function that writes string of data to file
const appendToFile = (fileName, data) => {
    fs.appendFile(fileName, data, e => e ? console.error(e) : console.log("File created!"))
}

const mikeyG = new Manager("Mike Gotfryd", 89, 'mgotfryd@brasfieldgorrie.com', "103E");
pushCard(mikeyG.getRole());

//add block for user input
managerCreate();



