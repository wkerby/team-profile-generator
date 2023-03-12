const employee = require("../lib/Employee");
const Employee = employee.Employee;
describe("Employee", () => {
    describe("Initialization", () => {
        it("Should return an Employee object containing a name property when called with 'new' keyword", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");

            expect("name" in employee).toEqual(true);
        });

        it("Should return an Employee object containing an id poroperty when called with the 'new' keyword", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");

            expect("id" in employee).toEqual(true);
        });

        it("Should return an Employee object containing an email poroperty when called with the 'new' keyword", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");

            expect("email" in employee).toEqual(true);
        });
    });
    describe("getName", () => {
        it("Should return the name stored in the created Employee object", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");
            expect(employee.getName() == employee.name);
        });
    });
    describe("getId", () => {
        it("Should return the id stored in the created Employee object", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");
            expect(employee.getId() == employee.id);
        });
    });
    describe("getEmail", () => {
        it("Should return the email stored in the created Employee object", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");
            expect(employee.getEmail() == employee.email);
        });
    });
    describe("getRole", () => {
        it("Should return the role stored in the created Employee object", () => {
            const employee = new Employee("John Doe", 28, "jdoe@test.com");
            expect(employee.getRole() == "Employee");
        });
    });
});
