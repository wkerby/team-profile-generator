const employee = require("./Employee");
const { Employee } = employee;

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }
    getGithub = () => {
        return this.github;
    }
    getRole = () => {
        return "Engineer";
    }
    greeting = () => {
        return `Hello! My name is ${this.name} and I am an Engineer. My github username is ${this.github}.`;
    }
};

module.exports = {
    Engineer
}