const manager = require("../lib/Manager");
const Manager = manager.Manager;
describe("Manager", () => {
    describe("Initialization", () => {
        it("Should return an Manager object containing a name property when called with 'new' keyword", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com", "jdoe78");

            expect("name" in manager).toEqual(true);
        });

        it("Should return an Manager object containing an id poroperty when called with the 'new' keyword", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com", "jdoe78");

            expect("id" in manager).toEqual(true);
        });

        it("Should return an Manager object containing an email poroperty when called with the 'new' keyword", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com");

            expect("email" in manager).toEqual(true);
        });
    });
    describe("getName", () => {
        it("Should return the name stored in the created Manager object", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com");
            expect(manager.getName() == manager.name);
        });
    });
    describe("getId", () => {
        it("Should return the id stored in the created Manager object", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com");
            expect(manager.getId() == manager.id);
        });
    });
    describe("getEmail", () => {
        it("Should return the email stored in the created Manager object", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com");
            expect(manager.getEmail() == manager.email);
        });
    });
    describe("getRole", () => {
        it("Should return the role stored in the created Manager object", () => {
            const manager = new Manager("John Doe", 28, "jdoe@test.com");
            expect(manager.getRole() == "Manager");
        });
    });
});
