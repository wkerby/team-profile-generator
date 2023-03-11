//create function that returns a randomly generated n-digit ID
const idGen = digits => {
    let myNum = Math.random();
    myNum = Math.floor(myNum * 10 ** digits)
    return myNum;
}

class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = idGen(2);
    }
    getName = () => {
        return this.name;
    }

    getId = () => {
        return this.id;
    }
    getEmail = () => {
        return this.email;
    }
    getRole = () => {
        return "Employee";
    }
};

class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;

    }
    getRole = () => {
        return "Manager"
    }

};

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email);
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

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
    }
    getSchool = () => {
        return this.school;
    }

    getRole = () => {
        return "Intern";
    }
};

const wilbur = new Intern("Wilbur", "w.kirbi43@snapper.com", "Georgia Tech")

console.log(wilbur.greeting());

