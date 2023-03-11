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

const willK = new Employee("William", "w.kerby99@gmail.com");

console.log(willK.getId());