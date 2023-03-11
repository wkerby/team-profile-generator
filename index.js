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
        message: "Employee's name (first and last)",
        name: 'name'
    },
    {
        type: 'input',
        message: "Employee's email address",
        name: 'email'
    },
    {
        type: 'list',
        message: 'Employee role',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]

    },
    {
        type: 'input',
        message: "Manager's office number",
        name: 'officenum',
        when: (answers) => answers.role == "Manager"

    },
    {
        type: 'input',
        message: "Engineer's github username",
        name: 'github',
        when: (answers) => answers.role == "Engineer"

    },
    {
        type: 'input',
        message: "School that intern is attending",
        name: 'school',
        when: (answers) => answers.role == "Intern"
    },
    {
        type: 'confirm',
        message: 'More employees to add?',
        name: 'addmore'

    }

];

inquirer
    .prompt(questions)
    .then(answers => {
        if (answers.addmore == false) {
            inquireOn = false;
            console.log(`${inquireOn}`)
        }
        const role = answers.role;
        switch (role) {
            case "Manager":
                const newManager = new Manager(answers.name, answers.email, answers.officenum);
                console.log(`Hello! My name is ${newManager.name} and I am a manager!`);
                break;
            case "Engineer":
                const newEngineer = new Engineer(answers.name, answers.email, answers.officenum);
                console.log(`Hello! My name is ${newEngineer.name} and I am a Engineer!`);
                break;
            case "Intern":
                const newIntern = new Intern(answers.name, answers.email, answers.school);
                console.log(`Hello! My name is ${newIntern.name} and my id is ${newIntern.id}!`);
        }
    })







